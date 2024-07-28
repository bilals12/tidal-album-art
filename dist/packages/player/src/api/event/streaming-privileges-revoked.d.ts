export type StreamingPrivilegesRevokedEvent = CustomEvent<string>;
export declare const eventName = "streaming-privileges-revoked";
export declare function streamingPrivilegesRevokedEvent(otherDevice: string): StreamingPrivilegesRevokedEvent;
