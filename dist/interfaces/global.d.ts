import { BoardStatus, UnitStatus } from "../enums";
import { Timestamp } from "firebase-admin/firestore";
import { TObject } from "../types";
export interface firebase_timestamp {
    _nanoseconds: number;
    _seconds: number;
}
export interface NxUser {
    id?: string;
    client?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    status?: string;
    roles?: string[];
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
    features?: string[];
    id?: string;
    name?: string;
    root_site?: string;
    status?: string;
    api_token?: string;
    key?: string;
}
export interface Board {
    id: string;
    imei: string;
    sim: string;
    status: BoardStatus;
    type: string;
    token?: string;
    uploaded: firebase_timestamp | Timestamp;
    userId: string;
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
}
export interface CanbusParameter {
    desc?: string | null;
    id: number | string;
    value: number;
}
