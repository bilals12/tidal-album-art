import { PlaybackState } from '../interfaces';

type PlaybackStateChangePayload = {
    state: PlaybackState;
};
export type PlaybackStateChange = CustomEvent<PlaybackStateChangePayload>;
export declare function playbackStateChange(state: PlaybackState): PlaybackStateChange;
export {};
