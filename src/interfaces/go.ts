import { firebase_timestamp } from "./global";

export type GoMobileUserRole = "go_user" | "installer";

export interface GoAuthModel {
    phone_number: string;
    role: GoMobileUserRole;
    uid: string;
}

export type GoUserRole = "owner" | "guest";

export interface GoCarLink {
    id: string;
    uid: string;
    role: GoUserRole;
    car_number: string;
    created: firebase_timestamp;
}

export enum RoleInToken {
    owner = "3",
    guest = "7",
}

export interface GoUserCar {
    car_number: string;
    vin: string;
    brand: string;
    model: string;
    year: string;
    color: string;
    serial_number: string;
    brand_icon: string;
    owner_phone: string;
    owner_email: string;
    owner_name: string;
    role: string;
    linked_users: {
        short_phone_number: string;
        long_phone_number: string;
        role: GoUserRole;
        uid: string;
    }[];
}
