import { OutputDevice } from '../../internal/output-devices';

type DeviceChangePayload = {
    devices: Array<OutputDevice>;
};
export type DeviceChange = CustomEvent<DeviceChangePayload>;
export declare function deviceChange(devices: Array<OutputDevice>): DeviceChange;
export {};
