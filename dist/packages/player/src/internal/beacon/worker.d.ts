import { PlaybackSessionEvent } from './play-log';
import { DrmLicenceFetchEvent, PlaybackInfoFetchEvent, PlaybackStatisticsEvent, StreamingSessionStartEvent } from './streaming-metrics';

export type BeaconEvent = DrmLicenceFetchEvent | PlaybackInfoFetchEvent | PlaybackSessionEvent | PlaybackStatisticsEvent | StreamingSessionStartEvent;
export declare function beacon(): void;
