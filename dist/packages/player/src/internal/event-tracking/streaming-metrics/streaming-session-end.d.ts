export type Payload = {
    streamingSessionId: string;
    timestamp: number;
};
export type StreamingSessionEnd = {
    name: 'streaming_session_end';
    payload: Payload;
};
declare const reducer: (newData: {
    streamingSessionId: string;
} & Partial<Payload>) => Promise<{
    name: "streaming_session_end";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
/**
 * The streaming session end event is sent by clients once a streaming session
 * ends, for whatever reason. It represents the end of a streaming session.
 */
export declare function streamingSessionEnd(newData: Parameters<typeof reducer>[0]): Promise<{
    name: "streaming_session_end";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
export {};
