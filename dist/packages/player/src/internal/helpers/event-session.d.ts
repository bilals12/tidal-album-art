type MaybeEvent<P> = {
    name: string;
    payload: P;
    streamingSessionId: string;
} | undefined;
declare class EventSessionDB {
    #private;
    constructor();
    /**
     * Delete a logged event by name and streamingSessionId.
     */
    delete({ name, streamingSessionId, }: {
        name: string;
        streamingSessionId: string;
    }): Promise<void>;
    /**
     * Get a logged event by name and streamingSessionId.
     */
    get<P>({ name, streamingSessionId, }: {
        name: string;
        streamingSessionId: string;
    }): Promise<MaybeEvent<P>>;
    /**
     * Adds or updates an event.
     */
    put(value: {
        id?: unknown;
        name: string;
        payload: unknown;
        streamingSessionId: string;
    }): Promise<void>;
}
export declare const db: EventSessionDB;
export {};
