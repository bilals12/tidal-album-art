export type Payload = {
    endReason: 'COMPLETE' | 'ERROR' | 'OTHER';
    endTimestamp: number;
    errorCode: null | string;
    errorMessage: null | string;
    startTimestamp: number;
    streamingSessionId: string;
};
export type DrmLicenseFetch = {
    name: 'drm_license_fetch';
    payload: Payload;
};
declare const reducer: (newData: {
    streamingSessionId: string;
} & Partial<Payload>) => Promise<{
    name: "drm_license_fetch";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
export declare function drmLicenseFetch(newData: Parameters<typeof reducer>[0]): Promise<{
    name: "drm_license_fetch";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
export {};
