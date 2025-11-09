import { BoardStatus, ClientStatus, EquipmentStatus, EquipmentStatusReason, LanguageOptions, SiteType, UnitStatus } from "../enums";
import { Timestamp } from "firebase-admin/firestore";
import { Geo, TObject } from "../types";
import { Interface } from "readline";

export type TimestampType = firebase_timestamp | Timestamp;

export interface firebase_timestamp {
    _nanoseconds: number;
    _seconds: number;
}

export interface Site {
    id?: string;
    address: string;
    cars: string[];
    client: string;
    code?: string;
    color: string;
    email: string;
    father?: string;
    is_read_only?: boolean;
    location: Geo;
    name: string;
    phone: string;
    polygons: string[];
    sites: string[];
    type: SiteType;
    users?: string[];
    created?: firebase_timestamp;
    updated?: firebase_timestamp;
}

export interface NxUser {
    id?: string;
    clients?: string[];
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    email?: string;
    status?: string;
    features?: string[];
    site?: string;
    sites?: string[];
    created?: firebase_timestamp;
    updated?: firebase_timestamp;
    last_login?: firebase_timestamp;
}

export interface MobileAppUser {
    id?: string;
    uid: string;
    created: firebase_timestamp;
    updated: firebase_timestamp;
    is_agreement_signed?: boolean;
    agreement_signed_datetime?: firebase_timestamp;
    fcm_token?: string;
    short_phone_number?: string;
    long_phone_number?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    validation_code?: string;
    validation_token?: string;
    features?: string[];
    is_super_user?: boolean;
    app?: string;
    disabled_events?: Record<string, Record<string, number[]>>;
    success?: boolean;
    app_version: string;
    language: "en" | "ru" | "heb";
    method: "sms" | "email";
    os: "android" | "ios";
    name?: string;
}

export interface GoUser {
    clients: Pick<Client, "features" | "id" | "name">[];
    features: string[];
    first_name: string;
    last_name: string;
}

export interface Client {
    created?: TimestampType;
    updated?: TimestampType;
    features?: string[];
    id?: string;
    name?: string;
    root_site?: string;
    status?: ClientStatus;
    api_token?: string;
    key?: string;
    email?: string;
    language?: LanguageOptions;
    installation_name?: string;
    installation_phone?: string;
    installation_root_site?: string;
}

export interface Board {
    id: string;
    imei: string;
    sim: string;
    status: BoardStatus;
    type: string;
    uploaded: TimestampType;
    userId: string;
    token?: string;
    comments?: string;
}
export interface Peripheral {
    boardRef?: string;
    boardType?: string;
    boardTypeId?: string;
    installationLocationImageUrl?: string;
    location?: string;
    mac?: string;
    relayType?: null;
    status?: number;
    technician?: string;
    updateDate?: TimestampType;
    serialNumber?: string;
    equipmentOptionId?: string;
    equipmentOptionName?: string;
    type?: string;
}

export interface Car {
    confirmation_code: string;
    id?: string;
    install_confirmation_date: TimestampType;
    carId: string;
    mainDriver: string;
    installation_status: string;
    name: string;
    userPhone: string;
    userEmail?: string;
    userAddress?: string;
    userIdCard?: string;
    userResidence?: string;
    parking_place?: string;
    vehicle_markers?: string;
    camera_installation_details: TObject<string>;
    status: UnitStatus;
    warrantyExpire: TimestampType;
    protectionType: string;
    protectionTypeId: string;
    warranty: boolean;
    statusMokedUser: string;
    isEnforcementCenterUser: boolean;
    sites: string[];
    client: string;
    installationDate: TimestampType;
    timestamp: number;
    customer: string;
    customerId: string;
    technician: string;
    technicianId: string;
    engine_type: string;
    gov_info: TObject<string | number>;
    brand: string;
    manufacturer: string;
    carYear: string;
    color: string;
    commandOption: string;
    chassisNumber: string;
    subEnforcmentUser: TObject<string | any[] | null>;
    peripherals: Peripheral[];
    icon?: string;
    vin?: string;
    features?: string[];
    deactivated?: boolean;
    internal_comments?: string;
    comments?: string;
    link_token?: string;
    maker_icon?: string;
    maintenance_timestamp?: TimestampType;
}

export interface UnitExtra {
    car_number: string;
    "overspeed-alert"?: {
        enabled: boolean;
        updated: Timestamp;
        value: number;
    };
    installation?: {
        address?: string;
        app: string;
        lat?: number;
        lng?: number;
    };
    call_center?: {
        account_update_timestamp?: Timestamp;
    };
    protection_certificate_url?: string;
}

export interface UsersUnits {
    id?: string;
    carId: string;
    phone: string;
    role: "admin" | "user" | "installer" | "guest";
}

export interface LastLocationCar {
    car_number: string;
    latitude: number;
    longitude: number;
    timestamp: TimestampType;
    client?: string;
    prev_latitude?: number;
    prev_longitude?: number;
    sites?: string[];
    source?: string;
    spd?: number;
    vin?: number;
    odo?: number;
    ign?: number;
    direction?: number;
}

export interface CarState {
    car_number?: string;
    client?: string;
    engine?: number;
    engine_updated?: TimestampType;
    ign?: number;
    is_online?: number;
    last_offline?: TimestampType;
    last_online?: TimestampType;
    server?: string;
    sites?: string[];
    update?: TimestampType;
    updated?: TimestampType;
    vin?: number;
    disarmed?: number;
    disarm_code?: string;
    evacuator?: number;
    is_ce?: number;
    is_ab?: number;
    is_abs?: number;
    is_tpms?: number;
    battery_disconnected?: number;
    charge_percents?: number;
    is_charging?: number;
    cut?: number;
}

export interface CanbusParameter {
    desc?: string | null;
    id: number | string;
    value: number;
    timestamp?: TimestampType;
}

export interface Equipment {
    id: string;
    serial_number: string;
    equipment_option: string;
    equipment_option_id: string;
    status: EquipmentStatus;
    status_reason: EquipmentStatusReason;
    meta: {
        version: {
            hw: string;
            sw: string;
        };
        attributes?: string;
        [key: string]: any;
    };
    comments: string;
    created: firebase_timestamp;
    updated: firebase_timestamp;
    updated_by: string;
    created_by?: string;
}

export interface EquipmentOption {
    id: string;
    name: string;
    equipment_category: string;
    description: string;
    created: firebase_timestamp;
    updated: firebase_timestamp;
    updated_by: string;
    created_by?: string;
}
export interface EventFromDevice {
    event_id: number;
    car_number: string;
    source: string;
    timestamp: TimestampType;
    spd: number;
    vin: number;
    latitude: number;
    longitude: number;
    event_name: string;
}

export interface EventFromDevice_Ruptela extends EventFromDevice {
    charge_percents: number;
}

export interface EventFromDevice_Erm extends EventFromDevice {
    disarm_code: string;
}

export interface ErmStates {
    car_number: string;
    ign?: number;
    is_online?: number;
    last_offline?: Date;
    last_online?: Date;
    server: string;
    updated?: Date;
    vin?: number;
    is_awake?: number;
    battery_disconnected?: number;
}

export type ReportMetaDataType =
    | "string"
    | "car_number"
    | "phone"
    | "date"
    | "time"
    | "datetime"
    | "number"
    | "email"
    | "boolean"
    | "geo"
    | "duration";

export type ReportParameterDataType = ReportMetaDataType | "select" | "multi_select";

export interface ReportMetaHeader {
    name: string;
    type: ReportMetaDataType;
    class_name?: string;
    style?: string;
}

export interface ReportMeta {
    headers: ReportMetaHeader[];
}

export type ReportDataRow = (string | number | Date | boolean | null)[];
