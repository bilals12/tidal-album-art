export type Payload = {
    endReason: 'COMPLETE' | 'ERROR' | 'OTHER';
    endTimestamp: number;
    errorCode: null | string;
    errorMessage: null | string;
    startTimestamp: number;
    streamingSessionId: string;
};
export type PlaybackInfoFetch = {
    name: 'playback_info_fetch';
    payload: Payload;
};
declare const reducer: (newData: {
    streamingSessionId: string;
} & Partial<Payload>) => Promise<{
    name: "playback_info_fetch";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
/**
 * Create playbackInfoFetch event.
 */
export declare function playbackInfoFetch(newData: Parameters<typeof reducer>[0]): Promise<{
    name: "playback_info_fetch";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
export {};
