import { BoardStatus, ClientStatus, LanguageOptions, UnitStatus } from "../enums";
import { Timestamp } from "firebase-admin/firestore";
import { TObject } from "../types";
export interface firebase_timestamp {
    _nanoseconds: number;
    _seconds: number;
}
export type DashboardFeatures = "super_admin" | "client_admin" | "site_admin" | "capacity_admin" | "dashboard_user";
export type ReportsFeatures = "gprs_balance";
export type InstallerFeatures = "super_installer" | "install" | "uninstall" | "maintenance" | "tests" | "tools";
export type ContactFeatures = "contact_by_email" | "contact_by_phone";
export type NxUserFeatures = DashboardFeatures | InstallerFeatures | ReportsFeatures | ContactFeatures;
export interface NxUserPermeations extends Partial<Record<NxUserFeatures, Boolean>> {
}
export type ClientFeatures = "PDI" | "alert_management" | "biometry" | "cawamo" | "charge_tracking" | "contact_by_email" | "cut_on_off" | "doors_open_close" | "keypad_code_change" | "no_installation_sms_to_end_user" | "polygon_scheduler" | "servision" | "vibration_level_control" | "vibration_on_off";
export interface ClientPermeations extends Partial<Record<ClientFeatures, Boolean>> {
}
export interface NxUser {
    id?: string;
    clients?: string[];
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    status?: string;
    features?: NxUserFeatures[];
    site?: string;
    sites?: string[];
    created?: firebase_timestamp;
    updated?: firebase_timestamp;
}
export interface Installer {
    id?: string;
    fullName?: string;
    phone?: string;
    superTechnician?: string;
    clients?: string[];
    customers?: string[];
}
export interface Client {
    created?: firebase_timestamp | Timestamp;
    updated?: firebase_timestamp | Timestamp;
    features?: ClientFeatures[];
    id?: string;
    name?: string;
    root_site?: string;
    status?: ClientStatus;
    api_token?: string;
    key?: string;
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
    uploaded: firebase_timestamp | Timestamp;
    userId: string;
    token?: string;
    comments?: string;
}
export interface Peripheral {
    boardRef: string;
    boardType: string;
    boardTypeId: string;
    installationLocationImageUrl: string;
    location: string;
    mac: string;
    relayType: null;
    status: number;
    technician: string;
    updateDate: firebase_timestamp | Timestamp;
}
export interface Car {
    confirmation_code: string;
    id?: string;
    install_confirmation_date: firebase_timestamp | Timestamp;
    carId: string;
    mainDriver: string;
    installation_status: string;
    name: string;
    userPhone: string;
    userEmail?: string;
    camera_installation_details: TObject<string>;
    status: UnitStatus;
    warrantyExpire: firebase_timestamp | Timestamp;
    protectionType: string;
    protectionTypeId: string;
    warranty: boolean;
    statusMokedUser: string;
    isEnforcementCenterUser: boolean;
    sites: string[];
    client: string;
    installationDate: firebase_timestamp | Timestamp;
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
    subEnforcmentUser: TObject<string | null | null[]>;
    peripherals: Peripheral[];
    icon?: string;
    vin?: string;
}
export interface LastLocationCar {
    car_number: string;
    latitude: number;
    longitude: number;
    timestamp: firebase_timestamp | Timestamp;
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
export interface CanbusParameter {
    desc?: string | null;
    id: number | string;
    value: number;
}
export interface EventFromDevice {
    event_id: number;
    car_number: string;
    source: string;
    timestamp: firebase_timestamp | Timestamp;
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
