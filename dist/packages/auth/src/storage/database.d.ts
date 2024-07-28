export declare const database: {
    getItem: <T>(key: string) => T | undefined;
    removeItem: (key: string) => void;
    setItem: (key: string, data: ArrayBuffer | Uint8Array) => void;
};
