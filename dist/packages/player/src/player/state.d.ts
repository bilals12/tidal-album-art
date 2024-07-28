import { default as BrowserPlayer } from './browserPlayer';
import { default as NativePlayer } from './nativePlayer';
import { default as ShakaPlayer } from './shakaPlayer';

type Player = BrowserPlayer | NativePlayer | ShakaPlayer;
declare class PlayerState {
    activePlayer: Player | undefined;
    preloadPlayer: Player | undefined;
    get preloadedMediaProduct(): import('..').MediaProduct | undefined;
    get preloadedStreamingSessionId(): string | undefined;
}
export declare const playerState: PlayerState;
export {};
