/**
 * Generates a SHA256 hash of the content.
 */
export declare const sha256: (message: string) => Promise<string>;
/**
 * Converts a Base64 value to "Base64 URL compatible" value.
 *
 * @see https://tools.ietf.org/html/draft-ietf-oauth-spop-15#appendix-A
 */
export declare const base64URLEncode: (value: string) => string;
/**
 * Generates a code challenge value which is used to verify the authorization request.
 *
 * @see https://tools.ietf.org/html/draft-ietf-oauth-spop-15#section-4.1
 */
export declare const generateOAuthCodeChallenge: () => string;
