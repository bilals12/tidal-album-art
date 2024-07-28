import { Credentials } from '@tidal-music/common';
import { ConsentCategory } from '../blockedConsentCategories';
import { AppInfo, EventHeaders, PlatformData } from '../types';

export declare const getEventHeaders: ({ appInfo: { appName, appVersion }, authorize, consentCategory, credentials, platformData: { browserName, browserVersion, osName }, sentTimestamp, suppliedHeaders, }: {
    appInfo: AppInfo;
    authorize?: boolean;
    consentCategory: ConsentCategory;
    credentials?: Credentials;
    platformData: PlatformData;
    sentTimestamp: number;
    suppliedHeaders?: Record<string, number | string>;
}) => EventHeaders;
