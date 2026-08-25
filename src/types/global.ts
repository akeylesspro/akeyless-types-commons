export type NumberObject = { [key: number]: number };
export type TObject<T> = { [key: string]: T };
export interface Geo {
    lat: number;
    lng: number;
}

export type BoardMaker = "erm" | "jimi" | "ruptela" | "servision" | "jimi_iothub";
