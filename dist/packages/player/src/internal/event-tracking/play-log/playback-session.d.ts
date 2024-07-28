import { AssetPresentation, AudioMode, AudioQuality, VideoQuality } from '../../types';

type Action = {
    actionType: 'PLAYBACK_START' | 'PLAYBACK_STOP';
    assetPosition: number;
    timestamp: number;
};
export type Payload = {
    actions: Array<Action>;
    actualAssetPresentation: AssetPresentation;
    actualAudioMode: AudioMode | null;
    actualProductId: string;
    actualQuality: AudioQuality | VideoQuality | null;
    endAssetPosition: number;
    endTimestamp: number;
    isPostPaywall: boolean;
    playbackSessionId: string;
    productType: 'TRACK' | 'VIDEO';
    requestedProductId: string;
    sourceId: string;
    sourceType: string;
    startAssetPosition: number;
    startTimestamp: number;
};
export type PlaybackSession = {
    name: 'playback_session';
    payload: Payload;
};
declare const reducer: (newData: {
    streamingSessionId: string;
} & Partial<Payload>) => Promise<{
    name: "playback_session";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
/**
 * A playback session starts when playback of a media
 * product to which a transition just has been made
 * starts, i.e. at the exact point in time when the
 * first piece of media is presented to the user,
 * audio, video or both.
 *
 * A playback session ends exactly when the last piece
 * of media for a certain media product has been presented
 * to the user.
 */
export declare function playbackSession(newData: Parameters<typeof reducer>[0]): Promise<{
    name: "playback_session";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
export declare function playbackSessionAction(streamingSessionId: string, action: Action): Promise<{
    name: "playback_session";
    payload: Payload;
    streamingSessionId: string;
} | undefined>;
export {};
