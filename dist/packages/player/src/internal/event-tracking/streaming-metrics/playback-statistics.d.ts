import { OutputType } from '../../output-devices';
import { AudioQuality, VideoQuality } from '../../types';

export type StatisticsOutputType = 'BLUETOOTH' | 'BUILT_IN' | 'DISPLAY_PORT' | 'HDMI' | 'SYSTEM_DEFAULT' | 'USB';
export type Stall = Readonly<{
    assetPosition: number;
    endTimestamp: number;
    reason: 'SEEK' | 'UNEXPECTED';
    startTimestamp: number;
}>;
export type Adaptation = Readonly<{
    assetPosition: number;
    bandwidth: number;
    codecs: null | string | undefined;
    mimeType: null | string | undefined;
    timestamp: number;
    videoHeight: null | number | undefined;
    videoWidth: null | number | undefined;
}>;
export type BasePayload = {
    actualAssetPresentation: 'FULL' | 'PREVIEW';
    actualAudioMode: 'DOLBY_ATMOS' | 'SONY_360RA' | 'STEREO';
    actualProductId: null | string;
    actualStartTimestamp: number;
    actualStreamType: 'LIVE' | 'ON_DEMAND';
    adaptations: Array<Adaptation>;
    cdm: 'FAIR_PLAY' | 'NONE' | 'PLAY_READY' | 'WIDEVINE';
    cdmVersion: null | string;
    endReason: 'COMPLETE' | 'ERROR' | 'OTHER';
    endTimestamp: number;
    errorCode: null | string;
    errorMessage: null | string;
    hasAds: boolean;
    idealStartTimestamp: number;
    outputDevice: StatisticsOutputType | null;
    productType: 'TRACK' | 'VIDEO';
    stalls: Array<Stall>;
    streamingSessionId: string;
};
export type TrackPayload = {
    actualQuality: AudioQuality;
    productType: 'TRACK';
};
export type VideoPayload = {
    actualQuality: VideoQuality;
    productType: 'VIDEO';
};
export type Payload = BasePayload & (TrackPayload | VideoPayload);
export type PlaybackStatistics = {
    name: 'playback_statistics';
    payload: Payload;
};
export declare function transformOutputType(outputType: OutputType): StatisticsOutputType | undefined;
declare const reducer: (newData: {
    streamingSessionId: string;
} & Partial<Payload>) => Promise<{
    name: "playback_statistics";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
/**
 * Create playbackStatistics event.
 */
export declare function playbackStatistics(newData: Parameters<typeof reducer>[0]): Promise<{
    name: "playback_statistics";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
export {};
