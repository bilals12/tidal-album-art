import { DrmLicenseFetch } from '../event-tracking/streaming-metrics/drm-license-fetch';
import { PlaybackInfoFetch } from '../event-tracking/streaming-metrics/playback-info-fetch';
import { PlaybackStatistics } from '../event-tracking/streaming-metrics/playback-statistics';
import { StreamingSessionStart } from '../event-tracking/streaming-metrics/streaming-session-start';
import { BaseEvent } from './types';

type StreamingMetricsEvent = BaseEvent & {
    group: 'streaming_metrics';
    version: 2;
};
export type StreamingSessionStartEvent = StreamingMetricsEvent & StreamingSessionStart;
export type PlaybackInfoFetchEvent = StreamingMetricsEvent & PlaybackInfoFetch;
export type DrmLicenceFetchEvent = StreamingMetricsEvent & DrmLicenseFetch;
export type PlaybackStatisticsEvent = StreamingMetricsEvent & PlaybackStatistics;
export {};
