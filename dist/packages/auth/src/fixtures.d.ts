export declare const storage: {
    accessToken: {
        clientId: string;
        clientUniqueKey: string;
        expires: number;
        grantedScopes: string[];
        requestedScopes: string[];
        token: string;
        userId: string;
    };
    clientId: string;
    clientSecret: string;
    clientUniqueKey: string;
    codeChallenge: string;
    credentialsStorageKey: string;
    previousClientSecret: string;
    redirectUri: string;
    refreshToken: string;
    scopes: string[];
    tidalAuthServiceBaseUri: string;
    tidalLoginServiceBaseUri: string;
};
export declare const storageClientCredentials: {
    accessToken: {
        clientId: string;
        clientUniqueKey: undefined;
        expires: number;
        grantedScopes: never[];
        requestedScopes: never[];
        token: string;
    };
    clientId: string;
    clientSecret: string;
    credentialsStorageKey: string;
    previousClientSecret: string;
    scopes: string[];
    tidalAuthServiceBaseUri: string;
    tidalLoginServiceBaseUri: string;
};
export declare const userJsonResponse: {
    access_token: string;
    clientName: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: "Bearer";
    user_id: number;
};
export declare const clientCredentialsJsonResponse: {
    access_token: string;
    expires_in: number;
    scope: string;
    token_type: "Bearer";
};
export declare const expiresTimerMock: number;
export declare const deviceAuthorizationResponse: {
    deviceCode: string;
    expiresIn: number;
    interval: number;
    userCode: string;
    verificationUri: string;
    verificationUriComplete: string;
};
