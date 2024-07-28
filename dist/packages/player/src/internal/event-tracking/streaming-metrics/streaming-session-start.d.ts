export type Payload = {
    abTestGroup: null | string;
    abTestName: null | string;
    browser: null | string;
    browserVersion: null | string;
    hardwarePlatform: 'DESKTOP' | 'WEB';
    isOfflineModeStart: boolean;
    mobileNetworkType: '3G' | '4G' | 'HSPA' | null;
    networkType: 'ETHERNET' | 'MOBILE' | 'NONE' | 'OTHER' | 'WIFI';
    operatingSystem: null | string;
    operatingSystemVersion: null | string;
    screenHeight: number;
    screenWidth: number;
    sessionProductId: string;
    sessionProductType: 'BROADCAST' | 'TRACK' | 'VIDEO';
    sessionTags: Array<string>;
    sessionType: 'DOWNLOAD' | 'PLAYBACK';
    startReason: 'EXPLICIT' | 'IMPLICIT';
    streamingSessionId: string;
    timestamp: number;
};
export type StreamingSessionStart = {
    name: 'streaming_session_start';
    payload: Payload;
};
declare const reducer: (newData: {
    streamingSessionId: string;
} & Partial<Payload>) => Promise<{
    name: "streaming_session_start";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
/**
 * The streaming session start event is sent by
 * clients once a new streaming session initiates
 * (see definition above). It represents the start
 * of a streaming session and includes information
 * regarding the client environment.
 *
 * A new streaming session starts whenever a client
 * decides that a media asset should be played.
 */
export declare function streamingSessionStart(newData: Parameters<typeof reducer>[0]): Promise<{
    name: "streaming_session_start";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
export {};
