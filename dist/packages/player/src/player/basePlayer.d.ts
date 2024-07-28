import { EndReason, EndedEvent } from '../api/event/ended';
import { MediaProductTransitionPayload } from '../api/event/media-product-transition';
import { MediaProduct, PlaybackState } from '../api/interfaces';
import { StreamInfo } from '../internal/helpers/manifest-parser';
import { PlaybackInfo } from '../internal/helpers/playback-info-resolver';
import { OutputType } from '../internal/output-devices';

export type LoadPayload = {
    assetPosition: number;
    mediaProduct: MediaProduct;
    playbackInfo: PlaybackInfo;
    streamInfo: StreamInfo;
};
export declare class BasePlayer {
    #private;
    name: string | undefined;
    constructor();
    adjustedVolume(streamInfo: StreamInfo): number;
    attachPlaybackEngineEndedHandler(): void;
    /**
     * Cleans up stored stream info and media product transitions
     * for preloadedStreamingSessionId if it does not match
     * currentStreamingSessionId.
     */
    cleanUpStoredPreloadInfo(): void;
    debugLog(...args: Array<unknown>): void;
    detachPlaybackEngineEndedHandler(): void;
    /**
     * Commits play_log playbackSession and streaming_metrics playbackStatistics.
     *
     * @param streamingSessionId
     */
    eventTrackingStreamingEnded(streamingSessionId: string, { endAssetPosition, endReason, }: {
        endAssetPosition: number;
        endReason: EndReason;
    }): void;
    eventTrackingStreamingStarted(streamingSessionId: string): void;
    finishCurrentMediaProduct(endReason: EndReason): void;
    getPosition(): number;
    /**
     * Refetches playbackinfo.
     */
    hardReload(mediaProduct: MediaProduct, assetPosition: number): Promise<void>;
    hasNextItem(): boolean | "" | undefined;
    hasStarted(): boolean | "" | undefined;
    load(_lp: LoadPayload, _transition: 'explicit' | 'implicit'): Promise<void>;
    /**
     * If playback info is prefetched or expired, do a hard reload.
     *
     * @returns {boolean} True if hard reloaded, else false.
     */
    maybeHardReload(): Promise<boolean>;
    /**
     * This method should be call whenever a playback starts, for **whatever** reason.
     *
     * skip, load.
     *
     * @param streamingSessionId
     */
    mediaProductStarted(streamingSessionId: string | undefined): void;
    next(_lp: LoadPayload): Promise<void>;
    /**
     * When re-using a nexted item for a load, overwrite the nexted MediaProduct with the provided one.
     * To ensure sourceId, sourceType and referenceId from the load call is correct for the playback -
     * and not a stale incorrect one from the next call.
     *
     * @param streamingSessionId
     * @param partialMediaProduct
     */
    overwriteMediaProduct(streamingSessionId: string, partialMediaProduct: Partial<MediaProduct>): void;
    pause(): void;
    play(): Promise<void>;
    playbackEngineEndedHandler(_e: EndedEvent): Promise<void>;
    reset(_options: {
        keepPreload: boolean;
    }): Promise<void>;
    seek(_number: number): void;
    /**
     * Handle play log reporting for seeking.
     * Seek start should log a PLAYBACK_START action if playing post seek.
     */
    seekEnd(assetPosition: number): void;
    /**
     * Handle play log reporting for seeking.
     * Seek start should log a PLAYBACK_STOP action.
     */
    seekStart(assetPosition: number): void;
    setStateToXIfNotYInZMs(ms: number, ifNotState: PlaybackState, setToState: PlaybackState): Promise<void>;
    skipToPreloadedMediaProduct(): Promise<void>;
    unloadPreloadedMediaProduct(): Promise<void>;
    updateOutputDevice(): Promise<void>;
    /**
     * Hydrates the volume level from config, and adjusts
     * it before setting, if loudness normalization is
     * enabled.
     */
    updateVolumeLevel(): void;
    /**
     * Adjusts the volume for the next track.
     * Can be called on product ended to have the level ready.
     */
    updateVolumeLevelForNextProduct(): void;
    get currentMediaProduct(): MediaProduct | null;
    set currentStreamingSessionId(ssi: string | undefined);
    get currentStreamingSessionId(): string | undefined;
    set currentTime(seconds: number);
    get currentTime(): number;
    get duration(): number | null;
    get expired(): boolean;
    get isActivePlayer(): boolean | undefined;
    get nextItem(): MediaProductTransitionPayload | undefined;
    set outputDeviceType(ot: OutputType | undefined);
    set playbackState(newPlaybackState: PlaybackState);
    get playbackState(): PlaybackState;
    get prefetched(): boolean | undefined;
    set preloadedStreamingSessionId(ssi: string | undefined);
    get preloadedStreamingSessionId(): string | undefined;
    get startAssetPosition(): number;
    set startAssetPosition(assetPosition: number);
    get volume(): number;
    set volume(_number: number);
}
