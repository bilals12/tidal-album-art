import { NetworkError, RetryableError } from '@tidal-music/common';
import { TokenResponseError, UnexpectedError } from '../errors';
import { UserCredentials } from '../types';

export declare const handleErrorResponse: (response: Response) => Promise<TokenResponseError | UnexpectedError | NetworkError | RetryableError>;
export declare const handleTokenFetch: ({ body, credentials, }: {
    body: Record<string, string>;
    credentials: UserCredentials;
}) => Promise<Response | TokenResponseError | UnexpectedError | NetworkError | RetryableError>;
export declare const prepareFetch: ({ body, credentials, path, }: {
    body: Record<string, string>;
    credentials: UserCredentials;
    path: string;
}) => {
    options: {
        body: string;
        headers: {
            'Content-Type': string;
        };
        method: string;
    };
    url: string;
};
export declare const exponentialBackoff: <T>({ delayInMs, request, retry, }: {
    delayInMs?: number;
    request: () => Promise<T>;
    retry: (response: T) => boolean;
}) => Promise<T>;
