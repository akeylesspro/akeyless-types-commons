import { WhereFilterOp } from "firebase-admin/firestore";

export const REDIS_UPDATES_PREFIX = "redis_updates";

export const SOCKET_EVENTS = {
    SET_DATA: "set_data",
    GET_DATA: "get_data",
    DELETE_DATA: "delete_data",
    SUBSCRIBE_COLLECTIONS: "subscribe_collections",
    SUBSCRIBE_OPTIONS: "subscribe_options",
    UNSUBSCRIBE_COLLECTIONS: "unsubscribe_collections",
    CLEAR_ALL_REDIS_DATA: "clear_all_redis_data",
    DISCONNECT: "disconnect",
    SESSION: "session",
} as const;

export type SocketEventMap = {
    [K in (typeof SOCKET_EVENTS)[keyof typeof SOCKET_EVENTS]]: any;
};

export type RedisUpdateType = "update" | "add" | "delete";

export interface RedisUpdatePayload<UpdateType extends RedisUpdateType, DataType = any> {
    key: string;
    collection_name: string;
    update_type: UpdateType;
    data: DataType;
    update_time: number;
    expires_at?: number;
}

export interface SocketCallbackResponse {
    success: boolean;
    key?: string;
    data?: any;
    found?: boolean;
    message?: string;
}

export interface CollectionConfig {
    key?: string;
    sync_direction?: "firebase_to_redis" | "redis_to_firebase";
    sync_period?: number;
    is_big_collection?: boolean;
}

export interface WhereCondition {
    field_name: string;
    operator: WhereFilterOp;
    value: any;
}

export interface SubscribeCollectionsOptions {
    parallel?: boolean;
    priority?: string[][];
    /// conditions per collection name. the data-socket narrows both the initial frame and every
    /// later update to the documents that match, and reports entering/leaving the result set as
    /// add/remove, the way a firestore query snapshot does
    /// this not reflected to the client, so client cannot use it for filtering its used by socket manager in client commons only
    conditions?: Record<string, WhereCondition[]>;
}
