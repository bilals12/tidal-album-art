export { AuthenticationError } from './authenticationError';
export { TokenResponseError } from './tokenResponseError';
export { UnexpectedError } from './unexpectedError';
export declare const authErrorCodeMap: {
    readonly authenticationError: "A0000";
    readonly illegalArgumentError: "A0007";
    readonly initError: "A0001";
    readonly networkError: "A0002";
    readonly retryableError: "A0003";
    readonly storageError: "A0004";
    readonly tokenResponseError: "A0005";
    readonly unexpectedError: "A0006";
};
export type AuthErrorNames = keyof typeof authErrorCodeMap;
export type AuthErrorCodes = (typeof authErrorCodeMap)[AuthErrorNames];
