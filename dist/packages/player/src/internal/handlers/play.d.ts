/**
 * Start playback of active media product.
 *
 * Playback will start and state transition to PLAYING.
 *
 * If there is no media product previously loaded with
 * the load method, this method will do nothing.
 *
 * @returns {Promise<void>}
 * @see {@link import('../../api/event/playback-state-change').PlaybackStateChange}
 */
export declare function play(): Promise<void>;
