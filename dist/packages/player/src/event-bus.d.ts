import { PlayerError } from './internal';

declare class PlayerEventTarget extends EventTarget {
    dispatchError(error: PlayerError): void;
}
export declare const events: PlayerEventTarget;
export {};
