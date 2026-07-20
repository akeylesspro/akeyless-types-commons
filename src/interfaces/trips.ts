import { firebase_timestamp } from "./global";

export type TripSource = "jimi" | "erm2" | "ruptela";

export interface Trip {
    id: string;
    car_number: string;
    distance: number;
    started: firebase_timestamp;
    ended: firebase_timestamp;
    lat_start: number;
    lng_start: number;
    lat_end: number;
    lng_end: number;
}

export type TripDetail = {
    id: string;
    lat: number;
    lng: number;
    spd: number;
    timestamp: firebase_timestamp;
    trip_id: string;
    is_deleted?: boolean;
};

export type TripDetails = TripDetail[];
