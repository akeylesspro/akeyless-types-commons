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
