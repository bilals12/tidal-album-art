import { ErrorOptions, TidalError } from './tidalError';

/**
 * Raised whenever an error occurs as the result of bad network conditions.
 *
 * @extends TidalError
 */
export declare class NetworkError extends TidalError {
    constructor(errorCode: string, options?: ErrorOptions);
}
