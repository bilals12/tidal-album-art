export { waitFor } from './internal/helpers/wait-for';
export declare function getPreloadedStreamingSessionId(): string | undefined;
export declare const credentialsProvider: import('@tidal-music/common').CredentialsProvider;
export declare function waitForEvent(target: EventTarget, eventName: string): Promise<unknown>;
export declare function mockNativePlayer(): void;
