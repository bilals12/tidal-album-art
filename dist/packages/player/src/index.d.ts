import { PlayerConfig } from './player/index';

type Options = {
    outputDevices: boolean;
    players: Array<PlayerConfig>;
};
/**
 * Get the media element with playback currently.
 *
 * @returns {HTMLMediaElement | null}
 */
export declare function getMediaElement(): HTMLMediaElement | null;
/**
 * Configure the module.
 *
 * @param {Options} options
 */
export declare function bootstrap(options: Options): void;
export * from './api/index';
export type * from './api/index';
export type * from './api/interfaces';
export { events } from './event-bus';
export type { ErrorCodes, PlayerErrorInterface as Error, } from './internal/index';
export type { OutputDevice } from './internal/output-devices';
export type { AssetPresentation, AudioMode, AudioQuality, Codec, StreamType, VideoQuality, } from './internal/types';
export type { NativePlayerDeviceMode as DeviceMode } from './player/nativeInterface';
