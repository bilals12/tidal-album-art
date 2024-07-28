import { CredentialsProvider } from '@tidal-music/common';

export { finalizeDeviceLogin, finalizeLogin, init, initializeDeviceLogin, initializeLogin, logout, setCredentials, } from './auth/auth';
export type * from './types';
export { authErrorCodeMap } from './errors';
export type { AuthErrorCodes, AuthErrorNames, AuthenticationError, TokenResponseError, UnexpectedError, } from './errors';
export declare const credentialsProvider: CredentialsProvider;
