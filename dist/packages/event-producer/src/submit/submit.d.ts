import { Config } from '../config';

/**
 * Takes the first 10 events from the queue and sends them to backend.
 * Successful events are then removed from the queue.
 * Unsuccessful events are kept in the queue for later retry.
 *
 * If the backend service is not available we trigger an outage.
 *
 * @param {SubmitEventsParams} params
 */
type SubmitEventsParams = {
    config: Config;
};
export declare const submitEvents: ({ config, }: SubmitEventsParams) => Promise<void>;
export {};
