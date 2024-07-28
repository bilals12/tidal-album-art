import { CommitData, PrematureEvents } from './types';

/**
 * Generates a Web Worker from a function.
 */
export declare function workerize(method: Function): string;
export declare let worker: Worker;
/**
 * Start the event beacon worker.
 */
export declare function start(): Promise<void>;
export declare function commit(beaconWorker: Worker | undefined, data: Pick<CommitData, 'events' | 'type'>): Promise<{
    accessToken: string;
    apiUrl: string;
    appVersion: string;
    clientId: string;
    clientPlatform: string;
    eventUrl: string;
    ts: number;
    type: "play_log" | "streaming_metrics";
    events: Array<PrematureEvents | undefined> | Array<Promise<PrematureEvents | undefined>>;
} | undefined>;
