export type ActiveDevicePassThroughChanged = CustomEvent<boolean>;
export declare const eventName = "active-device-pass-through-changed";
export declare function activeDevicePassThroughChanged(passThrough: boolean): ActiveDevicePassThroughChanged;
