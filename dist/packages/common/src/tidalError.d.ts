export type ErrorOptions = {
    cause?: unknown;
};
/**
 * Generic TIDAL error
 *
 * @extends Error
 */
export declare class TidalError extends Error {
    errorCode: string;
    /**
     * Constructor.
     *
     * @param errorCode Defined by the user of this error, but must match the regexp: [0-9a-z]{1,5}
     */
    constructor(errorCode: string, options?: ErrorOptions);
}
