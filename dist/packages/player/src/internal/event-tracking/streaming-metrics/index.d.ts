import { CommitData } from '../../beacon/types';
export { drmLicenseFetch } from './drm-license-fetch';
export { playbackInfoFetch } from './playback-info-fetch';
export { playbackStatistics } from './playback-statistics';
export { streamingSessionEnd } from './streaming-session-end';
export { streamingSessionStart } from './streaming-session-start';
/**
 * Send event to event system scoped to streaming_metrics category.
 */
export declare function commit(data: Pick<CommitData, 'events'>): Promise<any>;
