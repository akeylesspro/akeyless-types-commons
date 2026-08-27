import { BoardMaker, TObject } from "../types";
import { firebase_timestamp, GprsItem, TimestampType } from "./global";

export type DeviceCommandOption =
    | {
          text: string;
          delay_sec?: number;
      }
    | string;

export interface DeviceCommand {
    id: string;
    label_key: string;
    maker: BoardMaker;
    group: number;
    sms?: DeviceCommandOption[];
    gprs?: DeviceCommandOption[];
}

export type DeviceCommandType = "sms" | "gprs";

export interface DeviceCommandDetails {
    command_key: string;
    command_type: "device";
    user_name: string;
    user_id: string;
    command_id: string;
}

export interface SendDeviceCommandBody {
    car_number: string;
    command_type: DeviceCommandType;
    command_id?: string;
    messages?: DeviceCommandOption[];
    label_key?: string;
    request_id?: string;
    wait_for_response?: boolean;
}

export interface SendDeviceCommandResponse {
    request_id: string;
}

export type DeviceCommandStatus = "done" | "in_progress" | "failed" | "responded";

export type DeviceCommandProgressStatus = DeviceCommandStatus | "idle" | "sending" | "timeout";

export interface DeviceCommandItem {
    id: string;
    content: string;
    status: string;
    response: string;
}

export interface SendDeviceCommandResult {
    success: boolean;
    request_id: string;
    error?: string;
}

export interface SmsOutItem {
    id: string;
    content: string;
    external_id: string;
    recipient: string;
    service: string;
    status: string;
    timestamp: firebase_timestamp;
    details?: TObject<any>;
    updated?: firebase_timestamp;
    response?: string;
}

export interface SmsInItem {
    id: string;
    content: string;
    service: string;
    external_id: string;
    timestamp: TimestampType;
    sender: string;
}

export interface GprsInItem {
    id: string;
    content: string;
    external_id: number;
    recipient: string;
    timestamp: TimestampType;
    commandId?: string;
}

export interface CommandHistoryItemBase {
    commandKey: string;
    commandType: string;
    userId: string;
    userName: string;
    sendingTime: TimestampType;
    status: DeviceCommandStatus;
    commandId: string;
    recipient: string;
}

export interface GroupedSmsCommand extends CommandHistoryItemBase {
    type: "SMS";
    messages: SmsOutItem[];
    firstSmsTime: TimestampType;
    lastSmsTime: TimestampType;
}

export interface GroupedGprsCommand extends CommandHistoryItemBase {
    type: "GPRS";
    commands: GprsItem[];
    firstCommandTime: TimestampType;
    lastCommandTime: TimestampType;
}

export type CommandHistoryItem = GroupedSmsCommand | GroupedGprsCommand;
