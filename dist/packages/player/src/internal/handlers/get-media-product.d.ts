import { MediaProduct } from '../../api/interfaces';

/**
 * Gets the currently active media product. This is the same value as
 * was included in the last sent MediaProductTransition event. If nothing
 * is loaded in the player yet or if the player was reset, null will be
 * returned.
 *
 * @returns {MediaProduct | null}
 */
export declare function getMediaProduct(): MediaProduct | null;
