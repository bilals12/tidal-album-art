import { ErrorOptions, TidalError } from './tidalError';

/**
 * Raised whenever an illegal argument was passed to a function.
 *
 * @extends TidalError
 */
export declare class IllegalArgumentError extends TidalError {
    constructor(errorCode: string, options?: ErrorOptions);
}
