import { MediaProductTransitionPayload } from '../../api/event/media-product-transition';
import { StreamInfo } from './manifest-parser';
import { PlaybackInfo } from './playback-info-resolver';

declare class StreamingSessionStore {
    #private;
    /**
     * Clones a session to re-use the media product and playback content for a new session.
     *
     * @param from - streamingSessionId to clone
     * @param to - target streamingSessionId
     */
    clone(from: string, to: string): void;
    deleteMediaProductTransition(streamingSessionId: string): void;
    /**
     * Removed cached playbackInfo, streamInfo and mediaProductTransition for session.
     * For re-using playbackInfo etc for other sessions make sure to run clone before deletion!
     *
     * @see {@link StreamingSessionStore.clone}
     */
    deleteSession(streamingSessionId: string): void;
    deleteStreamInfo(streamingSessionId: string): void;
    getMediaProductTransition(streamingSessionId: string | undefined): MediaProductTransitionPayload | undefined;
    getPlaybackInfo(streamingSessionId: string | undefined): PlaybackInfo | undefined;
    getStreamInfo(streamingSessionId: string | undefined): StreamInfo | undefined;
    hasMediaProductTransition(streamingSessionId: string): boolean;
    hasPlaybackInfo(streamingSessionId: string): boolean;
    hasStreamInfo(streamingSessionId: string): boolean;
    overwriteDuration(streamingSessionId: string, updatedDuration: number): void;
    saveMediaProductTransition(streamingSessionId: string, mediaProductTransition: MediaProductTransitionPayload): void;
    savePlaybackInfo(streamingSessionId: string, streamInfo: PlaybackInfo): void;
    saveStreamInfo(streamingSessionId: string, streamInfo: StreamInfo): void;
}
export declare const streamingSessionStore: StreamingSessionStore;
export {};
