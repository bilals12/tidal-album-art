import { default as shaka } from 'shaka-player';
import { EndedEvent } from '../api/event/ended';
import { LoadPayload, BasePlayer } from './basePlayer';

export default class ShakaPlayer extends BasePlayer {
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
    }): Promise<any>;
    seek(currentTime: number): Promise<number> | undefined;
    skipToPreloadedMediaProduct(): Promise<void>;
    togglePlayback(): void;
    unloadPreloadedMediaProduct(): Promise<void>;
    updateOutputDevice(): Promise<void>;
    updatePlayerConfig(config: Record<string, any>): void;
    get currentPlayer(): shaka.Player | undefined;
    set currentPlayer(newCurrentPlayer: shaka.Player | undefined);
    get mediaElement(): HTMLMediaElement | null;
    get ready(): Promise<void>;
    get volume(): number;
    set volume(newVolume: number);
}
