import { PlaybackSession } from '../../internal/event-tracking/play-log/playback-session';
import { DrmLicenseFetch } from '../../internal/event-tracking/streaming-metrics/drm-license-fetch';
import { PlaybackInfoFetch } from '../../internal/event-tracking/streaming-metrics/playback-info-fetch';
import { PlaybackStatistics } from '../../internal/event-tracking/streaming-metrics/playback-statistics';
import { StreamingSessionEnd } from '../../internal/event-tracking/streaming-metrics/streaming-session-end';
import { StreamingSessionStart } from '../../internal/event-tracking/streaming-metrics/streaming-session-start';

export type BaseEvent = {
    client: {
        platform: 'web';
        token: string;
        version: string;
    };
    ts: number;
    user: {
        accessToken: string;
        clientId: number;
        id: number;
    };
    uuid: string;
    version: number;
};
export type PrematureEvents = DrmLicenseFetch | PlaybackInfoFetch | PlaybackSession | PlaybackStatistics | StreamingSessionEnd | StreamingSessionStart;
export type CommitData = {
    accessToken: string;
    apiUrl: string;
    appVersion: string;
    clientId: string;
    clientPlatform: string;
    eventUrl: string;
    events: Array<PrematureEvents | undefined> | Array<Promise<PrematureEvents | undefined>>;
    ts: number;
    type: 'play_log' | 'streaming_metrics';
};
