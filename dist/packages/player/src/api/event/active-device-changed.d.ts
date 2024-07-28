export type ActiveDeviceChanged = CustomEvent<string>;
export declare const eventName = "active-device-changed";
export declare function activeDeviceChanged(id: string): ActiveDeviceChanged;
