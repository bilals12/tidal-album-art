import * as config from './config';
/**
 * Initializes the EventProducer and the tools it depends on (uuid, trueTime and the indexedDB).
 * This function must be called before any other function in the EventProducer.
 *
 * @param {config.Config} initialConfig
 */
export declare const init: (initialConfig: config.Config) => Promise<void>;
