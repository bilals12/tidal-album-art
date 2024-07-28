import { EndedEvent } from '../api/event/ended';
import { LoadPayload, BasePlayer } from './basePlayer';
import { NativePlayerComponentSupportedEvents } from './nativeInterface';

export default class NativePlayer extends BasePlayer {
    #private;
    name: string;
    playbackEngineHandlerAttached: boolean;
    constructor();
    /**
     * Clean up native player before leaving for another player.
     */
    abandon(): void;
    getPosition(): number;
    /**
     * We cannot run multiple instances of native player so this function is
     * for catching duration for a preloaded item in native player.
     *
     * I.e. wait for player to load it and emit mediaduration event, then we
     * can gather the duration data and send a media product transition.
     */
    handleAutomaticTransitionToPreloadedMediaProduct(): Promise<void>;
    load(payload: LoadPayload, transition: 'explicit' | 'implicit'): Promise<void>;
    mediaStateChange(state: string): Promise<string>;
    nativeEvent(eventName: NativePlayerComponentSupportedEvents): Promise<Event>;
    next(payload: LoadPayload): Promise<void>;
    pause(): void;
    play(): Promise<void>;
    playbackEngineEndedHandler(e: EndedEvent): Promise<void>;
    registerEventListeners(): void;
    reset({ keepPreload }?: {
        keepPreload: boolean;
    }): Promise<void>;
    seek(seconds: number): Promise<void>;
    skipToPreloadedMediaProduct(): Promise<void>;
    unloadPreloadedMediaProduct(): Promise<void>;
    updateDeviceMode(): void;
    updateOutputDevice(): Promise<void>;
    get ready(): Promise<void>;
    get volume(): number;
    set volume(newVolume: number);
}
