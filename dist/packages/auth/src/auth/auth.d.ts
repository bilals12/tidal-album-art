import { Bus, Credentials, GetCredentials } from '@tidal-music/common';
import { DeviceAuthorizationResponse, InitArgs, LoginConfig } from '../types';

/**
 * Use this function to e.g. get notified when the credentials have been updated.
 *
 */
export declare const bus: Bus;
/**
 * Initialize the auth library, this needs to be called before any other auth methods.
 *
 * @param {InitArgs} initArgs - setup auth with clientId, scope, etc.
 */
export declare const init: ({ clientId, clientSecret, clientUniqueKey, credentialsStorageKey, scopes, tidalAuthServiceBaseUri, tidalLoginServiceBaseUri, }: InitArgs) => Promise<void>;
/**
 * To login your user, you need to open the url returned from this method.
 * It will have all necessary parameters to start the login flow.
 *
 * @param {Object} args
 * @param {string} args.redirectUri - the redirectUri you have registered with TIDAL
 * @param {LoginConfig} args.loginConfig - optional parameters to customize the login flow
 *
 * @throws {@link @tidal-music/common!TidalError} - if the auth module has not been initialized
 */
export declare const initializeLogin: ({ loginConfig, redirectUri, }: {
    loginConfig?: LoginConfig;
    redirectUri: string;
}) => Promise<string>;
/**
 * In case you have a limited input device, e.g. a TV, you can use this method to start the login flow.
 * The method will return a response including a code you need to show to the user along with a url.
 *
 * @throws {@link @tidal-music/common!TidalError} - if the auth module has not been initialized
 * @throws {@link UnexpectedError} - if the credentials are not valid (e.g. status 401)
 * @throws {@link @tidal-music/common!RetryableError} - if the server is not reachable (e.g. status 500)
 * @throws {@link @tidal-music/common!NetworkError} - if the client appears to be offline
 */
export declare const initializeDeviceLogin: () => Promise<DeviceAuthorizationResponse>;
/**
 * After the user has been redirected back to your app, you need to call this method to finalize the login flow.
 * It will exchange the code for an access token and store it in the secure storage.
 *
 * @param {string} loginResponseQuery - make sure to pass the whole query string, not just the code
 *
 * @throws {@link @tidal-music/common!TidalError} - if the auth module has not been initialized (`init` and `initializeLogin` are prerequisites)
 * @throws {@link AuthenticationError} - if there is no code in `loginResponseQuery`, normally happens when something with the login went wrong
 * @throws {@link UnexpectedError} - if the credentials are not valid (e.g. status 401)
 * @throws {@link @tidal-music/common!RetryableError} - if the server is not reachable (e.g. status 500)
 * @throws {@link @tidal-music/common!NetworkError} - if the client appears to be offline
 */
export declare const finalizeLogin: (loginResponseQuery: string) => Promise<void>;
/**
 * After displaying the code to the user, you need to call this method to finalize the login flow.
 * This method will poll until the user has logged in on another device.
 * Once the user has logged in, the access token will be stored in the secure storage.
 *
 * @throws {@link @tidal-music/common!TidalError} - if the auth module has not been initialized
 * @throws {@link TokenResponseError} - if no token could be fetched in the time limit
 * @throws {@link UnexpectedError} - if the credentials are not valid (e.g. status 401)
 * @throws {@link @tidal-music/common!RetryableError} - if the server is not reachable (e.g. status 500)
 * @throws {@link @tidal-music/common!NetworkError} - if the client appears to be offline
 */
export declare const finalizeDeviceLogin: () => Promise<void>;
/**
 * Log the user out and clear all local state and the secure storage.
 * Call this method only when the user actively want to log out.
 */
export declare const logout: () => void;
/**
 * This is the heart of the auth module. Make sure to always call this method when in need of a token.
 * It will return a valid access token and also refresh or upgrade the token if necessary.
 * Please note: the method will return an accessToken without a `token` property if no credentials are found.
 *
 * @param {string} apiErrorSubStatus - pass `apiErrorSubStatus` when you get an authentication error from the API.
 * In some cases the auth module needs trigger a hard refresh then. (even if the token is still valid)
 * For example on status `401` with a subStatus of `11003` a refresh will be triggered.
 *
 * @throws {@link @tidal-music/common!TidalError} - if the auth module has not been initialized
 * @throws {@link @tidal-music/common!IllegalArgumentError} - if the scopes have changed or the clientUniqueKey is not the same
 * @throws {@link UnexpectedError} - if the credentials are not valid (e.g. status 401)
 * @throws {@link @tidal-music/common!RetryableError} - if the server is not reachable (e.g. status 500)
 * @throws {@link @tidal-music/common!NetworkError} - if the client appears to be offline
 */
export declare const getCredentials: GetCredentials;
/**
 * This method should only be used to migrate old credentials to the auth module.
 * In case you don't wan't to log all users out, but have access and refresh tokens stored somewhere else, you can use this method.
 * Please be aware there is no server checks here, we trust the input and store the credentials in the secure storage.
 *
 * @param {Object} args
 * @param {Credentials} args.accessToken - the access token to set
 * @param {string} args.refreshToken - the refresh token to set
 *
 * @throws {@link @tidal-music/common!TidalError} - if the auth module has not been initialized
 * @throws {@link @tidal-music/common!IllegalArgumentError} - if the scopes have changed, the clientUniqueKey is not the same or the accessToken is invalid
 */
export declare const setCredentials: ({ accessToken, refreshToken, }: {
    accessToken: Credentials;
    refreshToken?: string;
}) => Promise<void>;
