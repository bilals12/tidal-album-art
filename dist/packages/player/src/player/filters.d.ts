import { default as shaka } from 'shaka-player';

export declare function manipulateLicenseResponse(response: shaka.extern.Response): void;
export declare function manipulateLicenseRequest(request: shaka.extern.Request, options: {
    securityToken: string;
    streamingSessionId: string;
}): void;
