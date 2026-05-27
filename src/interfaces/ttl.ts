import { TimestampType } from "./global";

export interface Subscription {
    type: "subscription";
    id: string;
    car_number: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    email?: string;
    id_card: string;
    credit_card: {
        number: string;
        type: string;
        expiry: string;
        cvc: string;
    };
    created: TimestampType;
    ttl: TimestampType;
    user: {
        name: string;
        id: string;
    };
    subscription_fee: number;
    installation_date: TimestampType;
    comments?: string;
}

export type NxTtl = Subscription;
