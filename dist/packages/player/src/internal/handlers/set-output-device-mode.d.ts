import { NativePlayerDeviceMode } from '../../player/nativeInterface';

/**
 * Set device mode. Only available for native player.
 *
 * @param {NativePlayerDeviceMode} mode - The desired mode.
 * @returns {Promise<NativePlayerDeviceMode>} - The mode we now use.
 */
export declare function setOutputDeviceMode(mode?: NativePlayerDeviceMode): Promise<NativePlayerDeviceMode>;
