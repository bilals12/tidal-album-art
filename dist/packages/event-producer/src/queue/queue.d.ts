import { Config, EPEvent } from '../types';

export declare const worker: Worker;
export declare function getEvents(): EPEvent[];
/**
 * Gets the first 10 events from the queue.
 *
 * @returns {Array<EPEvent>}
 */
export declare function getEventBatch(): Array<EPEvent>;
/**
 * Sets events in queue.
 *
 * @param {Array<EPEvent>} newEvents
 */
export declare function setEvents(newEvents: Array<EPEvent>): void;
/**
 * Inits workers localforage database and loads stored events into memory.
 *
 * @returns {Promise<void>}
 */
export declare const initDB: (options?: {
    feralEventTypes: Config["feralEventTypes"];
}) => Promise<void>;
/**
 * Persists events in db.
 */
export declare function persistEvents(): void;
/**
 * Removes events from the queue and persist queue.
 *
 * @param {Array<string>} idsToRemove
 */
export declare function removeEvents(idsToRemove: Array<string>): void;
/**
 * Adds an event to the queue and persist queue.
 *
 * @param {EPEvent} event
 */
export declare function addEvent(event: EPEvent): void;
