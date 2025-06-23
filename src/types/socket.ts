export type RedisUpdateType = "update" | "add" | "delete";

export interface RedisUpdatePayload<UpdateType extends RedisUpdateType, DataType = any> {
    key: string;
    collection_name: string;
    update_type: UpdateType;
    data: DataType;
    firebase?: {
        merge?: boolean;
    };
    update_time: number;
}

export interface SocketCallbackResponse {
    success: boolean;
    found: boolean;
    message?: string;
    key?: string;
    data?: any;
    saved_in?: "redis" | "firebase";
}
