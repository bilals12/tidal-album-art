import { CredentialsProvider } from '@tidal-music/common';
import { BlockedConsentCategories } from './blockedConsentCategories';
import { AppInfo, PlatformData } from './types';

/**
 *
 * In order to simplify the implementation while still maintaining correct function, high performance
 * and reduced load on backend, a design decision has been made that the EventSender
 * shall only ever exist in one instance.
 */
export type Config = {
    appInfo: AppInfo;
    blockedConsentCategories: BlockedConsentCategories;
    credentialsProvider?: CredentialsProvider;
    eventBatchInterval?: number;
    feralEventTypes?: Array<string>;
    monitoringInterval?: number;
    platform: PlatformData;
    strictMode?: boolean;
    tlConsumerUri: string;
    tlPublicConsumerUri: string;
};
/**
 * Initializes the configuration instance.
 *
 * @param {Config} config
 */
export declare const init: (config: Config) => void;
/**
 * Sets the credentials provider.
 *
 * @param {CredentialsProvider} credentialsProvider
 */
export declare const setCredentialsProvider: (credentialsProvider: CredentialsProvider) => void;
type SetConsentCategoryParams = {
    PERFORMANCE?: boolean;
    TARGETING?: boolean;
};
/**
 * Turns on or of blocking of optional consent levels (PERFORMANCE or TARGETING).
 *
 * @param {SetConsentCategoryParams} consentLevel
 */
export declare const setConsentCategory: (consentLevel: SetConsentCategoryParams) => void;
/**
 * Returns the current configuration instance.
 *
 * @returns {Config}
 */
export declare const getConfig: () => Config;
export {};
