import { TimestampType } from "./global";

export type CreditType = "charge_home" | "charge_external" | (string & {});

export interface CreditItem {
    id: string;
    amount: number;
    car_number: string;
    expiration: {
        from: TimestampType;
        to: TimestampType;
    };
    types: CreditType[];
    created: TimestampType;
    updated: TimestampType;
    deleted: boolean;
}

export type CreditAuditAction = "subtract" | "add" | "delete";

export interface CreditAuditItem {
    id: string;
    action: CreditAuditAction;
    car_number: string;
    amount: number;
    comment?: string;
    reason: string;
    prev_balance: number;
    timestamp: TimestampType;
    user_id: string;
    user_name: string;
    credit_id: string;
}
