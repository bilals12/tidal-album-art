import { MediaProduct } from 'api/interfaces';
import { AudioQuality } from '../internal/types';
import { default as BrowserPlayerType } from './browserPlayer';
import { default as NativePlayerType } from './nativePlayer';
import { default as ShakaPlayerType } from './shakaPlayer';

type Player = BrowserPlayerType | NativePlayerType | ShakaPlayerType;
export type PlayerConfig = {
    itemTypes: Array<MediaProduct['productType']>;
    player: 'browser' | 'native' | 'shaka';
    qualities?: Array<AudioQuality>;
};
export declare function setPlayerConfig(allowedPlayers: Array<PlayerConfig>): void;
export declare function resetAllPlayers(): Promise<void>;
export declare function setActivePlayer(player: Player): void;
/**
 * Cancels a queued player switch or a queued repeat of same player.
 *
 * @see maybeSwitchPlayerOnEnd
 */
export declare function cancelQueuedOnendedHandler(): void;
export declare function maybeSwitchPlayerOnEnd(preloadPlayer: Player): void;
export declare function getNativePlayer(): Promise<NativePlayerType>;
export declare function getAppropriatePlayer(productType: 'demo' | 'track' | 'video', audioQuality: AudioQuality | undefined): Promise<BrowserPlayerType | NativePlayerType | ShakaPlayerType>;
/**
 * Unload preloads in all booted players.
 */
export declare function unloadPreloadedMediaProduct(): Promise<void>;
export {};
