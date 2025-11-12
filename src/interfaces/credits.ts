import { TimestampType } from "./global";

export type CreditType = "charge_home" | "charge_external" | (string & {});

export interface CreditItem {
    id: string;
    amount: string;
    car_number: string;
    expiration: {
        from: TimestampType;
        to: TimestampType;
    };
    types: CreditType[];
    created: TimestampType;
    updated: TimestampType;
    is_active: boolean;
}

export type CreditAuditAction = "subtract" | "add" | "delete";

export interface CreditAuditItem {
    id: string;
    action: CreditAuditAction;
    car_number: string;
    amount: string;
    comment?: string;
    reason: string;
    prev_balance: string;
    timestamp: TimestampType;
    user_id: string;
    user_name: string;
    credit_id: string;
}
