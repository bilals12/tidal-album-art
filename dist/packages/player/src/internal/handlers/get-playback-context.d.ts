import { PlaybackContext } from '../../api/interfaces';

/**
 * Gets the currently active playback context. This is the same value
 * as was included in the last sent MediaProductTransition event. If nothing
 * is loaded in the player yet or if the player was reset, undefined will be
 * returned.
 *
 * @returns {PlaybackContext | undefined}
 */
export declare function getPlaybackContext(): PlaybackContext | undefined;
