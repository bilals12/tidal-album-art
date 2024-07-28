import { UserCredentials } from '../types';

export declare const loadCredentials: (credentialsStorageKey: string) => Promise<void | UserCredentials>;
export declare const saveCredentialsToStorage: (credentials: Partial<UserCredentials> & {
    credentialsStorageKey: string;
}) => Promise<void>;
export declare const deleteCredentials: (credentialsStorageKey: string) => void;
