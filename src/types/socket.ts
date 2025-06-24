export const REDIS_UPDATES_PREFIX = "redis_updates";

export const SOCKET_EVENTS = {
    SET_DATA: "set_data",
    GET_DATA: "get_data",
    DELETE_DATA: "delete_data",
    SUBSCRIBE_COLLECTIONS: "subscribe_collections",
    UNSUBSCRIBE_COLLECTIONS: "unsubscribe_collections",
    CLEAR_ALL_REDIS_DATA: "clear_all_redis_data",
    DISCONNECT: "disconnect",
} as const;

export type SocketEventMap = {
    [SOCKET_EVENTS.SET_DATA]: any;
    [SOCKET_EVENTS.GET_DATA]: any;
    [SOCKET_EVENTS.DELETE_DATA]: any;
    [SOCKET_EVENTS.SUBSCRIBE_COLLECTIONS]: any;
    [SOCKET_EVENTS.UNSUBSCRIBE_COLLECTIONS]: any;
    [SOCKET_EVENTS.CLEAR_ALL_REDIS_DATA]: any;
    [SOCKET_EVENTS.DISCONNECT]: any;
};

export type RedisUpdateType = "update" | "add" | "delete";

export interface RedisUpdatePayload<UpdateType extends RedisUpdateType, DataType = any> {
    key: string;
    collection_name: string;
    update_type: UpdateType;
    data: DataType;
    update_time: number;
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
}
