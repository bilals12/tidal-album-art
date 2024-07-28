import { ErrorOptions, TidalError, TidalMessage } from '@tidal-music/common';

/**
 * Indicates that an outage has started.
 *
 * @errorCode
 * @extends TidalError
 */
export declare class OutageStartError extends TidalError {
    constructor(errorCode: string, options?: ErrorOptions);
}
/**
 * Indicates that an outage has ended.
 */
export declare const OutageEndMessage: TidalMessage;
/**
 * Sets the outage state. If the state is changed, an OutageStartError or OutageEndMessage is sent on the bus.
 *
 * @param {boolean} outage
 */
export declare const setOutage: (outage: boolean) => void;
export declare const isOutage: () => boolean;
