import { CommitData } from '../../beacon/types';
export { playbackSession, playbackSessionAction } from './playback-session';
/**
 * Send event to event system scoped to play_log category.
 */
export declare function commit(data: Pick<CommitData, 'events'>): Promise<any>;
