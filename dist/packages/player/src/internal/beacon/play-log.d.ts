import { PlaybackSession } from '../event-tracking/play-log/playback-session';
import { BaseEvent } from './types';

export type PlayLogEvent = BaseEvent & {
    group: 'play_log';
    version: 2;
};
export type PlaybackSessionEvent = PlayLogEvent & PlaybackSession;
