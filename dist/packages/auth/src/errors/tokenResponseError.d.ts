import { ErrorOptions, TidalError } from '@tidal-music/common';

/**
 * Used to indicate that an access token could not be retrieved.
 *
 * @extends TidalError
 */
export declare class TokenResponseError extends TidalError {
    constructor(errorCode: string, options?: ErrorOptions);
}
