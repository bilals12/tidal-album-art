import { Bus, TidalMessage } from '@tidal-music/common';
import { OutageStartError } from './outage';

/**
 * The bus used by the EventSender for all "asynchronous" communication.
 *
 * @param {(e: BusEvent) => void} callbackFn
 */
export declare const bus: Bus;
/**
 * Posts a message to the bus.
 *
 * @param {OutageStartError | TidalMessage} message
 */
export declare const postMessage: (message: OutageStartError | TidalMessage) => void;
