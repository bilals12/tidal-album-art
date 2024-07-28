import { EPEvent } from '../types';

declare global {
    interface String {
        isWellFormed?(): boolean;
    }
}
export declare const validateEvent: ({ payload, ...eventWithoutPayload }: EPEvent) => boolean;
