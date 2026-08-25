import { BoardMaker } from "../types";

export type DeviceCommandOption =
    | {
          text: string;
          delay_sec?: number;
      }
    | string;

export interface DeviceCommand {
    id: string;
    label_key: string;
    sms: DeviceCommandOption[];
    gprs: DeviceCommandOption[];
    maker: BoardMaker;
}
