import { CredentialsProvider } from '@tidal-music/common';
import { Config } from '../config';
import { EPEvent, SentEvent } from '../types';

export declare const strictEventCheck: (event: SentEvent) => void;
export type SendEventParams = {
    config: Config;
    credentialsProvider: CredentialsProvider;
    event: SentEvent;
};
/**
 * Receives an event, validates it, converts it to an EPEvent, and adds it to the queue
 *
 * @param {SendEventParams} params
 *
 * @returns {Promise<void | EPEvent[]>}
 */
export declare const sendEvent: ({ config, credentialsProvider, event: sentEvent, }: SendEventParams) => Promise<Array<EPEvent> | void>;
