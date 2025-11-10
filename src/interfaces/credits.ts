import { TimestampType } from "./global";

export type CreditType = "charge_home" | "charge_external" | (string & {});

export interface CreditItem {
    id: string;
    amount: string;
    car_number: string;
    created: TimestampType;
    expiration: {
        from: TimestampType;
        to: TimestampType;
    };
    types: CreditType[];
}

export type CreditAuditAction = "subtract" | "add";

export interface CreditAuditItem {
    id: string;
    action: CreditAuditAction;
    amount: string;
    comment?: string;
    reason: string;
    prev_balance: string;
    timestamp: TimestampType;
    user_id: string;
    user_name: string;
}
