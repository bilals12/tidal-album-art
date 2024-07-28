import { EndedEvent } from '../api/event/ended';
import { LoadPayload, BasePlayer } from './basePlayer';

export default class BrowserPlayer extends BasePlayer {
    #private;
    name: string;
    constructor();
    getPosition(): number;
    load(payload: LoadPayload, transition: 'explicit' | 'implicit'): Promise<void>;
    next(payload: LoadPayload): Promise<void>;
    pause(): void;
    play(): Promise<void>;
    playbackEngineEndedHandler(e: EndedEvent): Promise<void>;
    reset({ keepPreload }?: {
        keepPreload: boolean;
    }): Promise<void>;
    seek(currentTime: number): Promise<number> | undefined;
    skipToPreloadedMediaProduct(): Promise<void>;
    togglePlayback(): void;
    unloadPreloadedMediaProduct(): Promise<void>;
    get currentPlayer(): HTMLVideoElement | undefined;
    set currentPlayer(newCurrentPlayer: HTMLVideoElement | undefined);
    get mediaElement(): HTMLMediaElement | null;
    get ready(): Promise<void> | undefined;
    get volume(): number;
    set volume(newVolume: number);
}
