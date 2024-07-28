import { NativePlayerComponentDeviceDescription, NativePlayerDeviceMode } from '../player/nativeInterface';

export type OutputType = 'airplay' | 'bluetooth' | 'builtIn' | 'displayPort' | 'hdmi' | 'systemDefault' | 'usb' | 'windowsCommunication';
export declare class OutputDevice {
    controllableVolume: boolean;
    id: string;
    name: string;
    nativeDeviceId?: string;
    type: OutputType | undefined;
    webDeviceId?: string;
    constructor({ controllableVolume, name, nativeDeviceId, type, webDeviceId, }: {
        controllableVolume?: boolean;
        name: string;
        nativeDeviceId?: string;
        type: OutputType | undefined;
        webDeviceId?: string;
    });
}
export declare function findOutputType(device: MediaDeviceInfo | NativePlayerComponentDeviceDescription): OutputType | undefined;
export declare function marshalLabel(deviceLabel: string, operatingSystem: string): string;
export declare function isWindowsCommunicationsDevice(d: MediaDeviceInfo | NativePlayerComponentDeviceDescription): boolean;
export declare function getOutputDeviceByName(devices: Set<OutputDevice>, name: string): OutputDevice | undefined;
export declare class OutputDevices {
    #private;
    outputDevices: Set<OutputDevice>;
    constructor();
    addNativeDevices(devices: Array<NativePlayerComponentDeviceDescription>): void;
    addWebDevices(devices: Array<MediaDeviceInfo>): void;
    emitDeviceChange(): void;
    getNativeDevice(id: string): NativePlayerComponentDeviceDescription | undefined;
    hydrateWebDevices(): Promise<void>;
    mergeDevices(): void;
    queueUpdate(): Promise<void>;
    set activeDevice(device: OutputDevice);
    get activeDevice(): OutputDevice;
    /**
     * Set the current device mode for the output device.
     */
    set deviceMode(deviceMode: NativePlayerDeviceMode);
    get deviceMode(): NativePlayerDeviceMode;
}
export declare const outputDevices: OutputDevices;
