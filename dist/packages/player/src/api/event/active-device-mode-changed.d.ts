import { NativePlayerDeviceMode } from '../../player/nativeInterface';

export type ActiveDeviceModeChanged = CustomEvent<NativePlayerDeviceMode>;
export declare const eventName = "active-device-mode-changed";
export declare function activeDeviceModeChanged(deviceMode: NativePlayerDeviceMode): ActiveDeviceModeChanged;
