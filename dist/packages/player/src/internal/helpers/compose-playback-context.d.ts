import { PlaybackContext } from '../../api/interfaces';
import { StreamInfo } from './manifest-parser';
import { PlaybackInfo } from './playback-info-resolver';

type Params = {
    assetPosition: number;
    duration: number;
    playbackInfo: PlaybackInfo;
    streamInfo: StreamInfo;
};
export declare const composePlaybackContext: ({ assetPosition, duration, playbackInfo, streamInfo, }: Params) => PlaybackContext;
export {};
