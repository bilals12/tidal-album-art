export declare const encodeCredentials: (credentials: string) => Uint8Array;
export declare const decodeCredentials: (credentials: ArrayBuffer) => string;
export declare const wrapCryptoKey: ({ keyToWrap, password, salt, }: {
    keyToWrap: CryptoKey;
    password: string;
    salt: BufferSource;
}) => Promise<ArrayBuffer>;
export declare const unwrapCryptoKey: ({ password, salt, wrappedKeyBuffer, }: {
    password: string;
    salt: ArrayBuffer;
    wrappedKeyBuffer: ArrayBuffer;
}) => Promise<CryptoKey>;
export declare const encryptCredentials: ({ content, counter, key, }: {
    content: ArrayBuffer;
    counter: BufferSource;
    key: CryptoKey;
}) => Promise<ArrayBuffer>;
export declare const decryptCredentials: ({ counter, encryptedCredentials, key, }: {
    counter: BufferSource;
    encryptedCredentials: ArrayBuffer;
    key: CryptoKey;
}) => Promise<ArrayBuffer>;
export declare const getEncryptionKey: () => Promise<CryptoKey>;
