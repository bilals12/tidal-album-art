import { Config } from './config';
import { SentEvent } from './types';
import * as bus from './bus';
export { getConfig, setConsentCategory, setCredentialsProvider, } from './config';
export type * from './types';
/**
 * This is the user exposed function that wraps sendEvent with the config and credentialsProvider.
 *
 * @param {SentEvent} event The event to add to the queue
 */
export declare const sendEvent: (event: SentEvent) => void;
export declare const init: (config: Config) => Promise<void>;
export { bus };
