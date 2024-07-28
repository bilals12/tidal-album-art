type UserActionEventPayload = Readonly<{
    startedAt: number;
}>;
type UserActionEvent = Readonly<{
    payload: UserActionEventPayload;
    type: 'USER_ACTION';
}>;
export type OutgoingEvents = UserActionEvent;
type TimeInformation = Readonly<{
    clientTime: string;
    serverTime: string;
}>;
type PrivilegedSessionNotificationEventPayload = Readonly<{
    clientDisplayName: null | string | undefined;
    endsAt: TimeInformation;
    sessionId: string;
    updatedAt: TimeInformation;
}>;
type PrivilegedSessionNotificationEvent = Readonly<{
    payload: PrivilegedSessionNotificationEventPayload;
    type: 'PRIVILEGED_SESSION_NOTIFICATION';
}>;
type ReconnectEvent = Readonly<{
    type: 'RECONNECT';
}>;
export type IncomingEvent = PrivilegedSessionNotificationEvent | ReconnectEvent;
export declare function fetchWebSocketURL(accessToken: string): Promise<string>;
export declare function socketOpen(webSocket: WebSocket): Promise<void>;
/**
 * Connects to the Pushkin service over web sockets. Pauses the music
 * on incoming PRIVILEGED_SESSION_NOTIFICATION messages, and used to
 * send USER_ACTION messages when a user clicks the play button in
 * the application UI.
 */
export declare class Pushkin {
    #private;
    constructor();
    /**
     * Call this method to ensure pushkin is running.
     */
    static ensure(): Promise<void>;
    /**
     * Call this method when credentials changes to re-setup pushkin with the new credentials
     */
    static refresh(): Promise<void>;
    reconnect(): Promise<void>;
    /**
     * Call this method to tell Pushkin a user action happened, so it can
     * make good qualified guesses if you're the session with allowed playback-
     */
    userAction(): Promise<void>;
    get connected(): boolean | undefined;
}
export {};
