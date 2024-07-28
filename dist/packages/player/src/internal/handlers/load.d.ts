import { MediaProduct } from '../../api/interfaces';

/**
 * Will reset TIDAL Player from any current state and immediately make a
 * transition to the provided media product.
 *
 * Playback state will immediately change to NOT_PLAYING.
 *
 * @param {MediaProduct} mediaProduct - The media product to load.
 * @param {number} assetPosition - At which time in seconds playback should start when later calling the play method, defaults to 0.
 * @param {boolean} prefetch - Wether or not this is a prefetch. This should be set to true if you need a media product transition to boot the UI.
 *
 * @see {@link import('../../api/event/playback-state-change').PlaybackStateChange}
 *
 * @returns {Promise<void>} - On resolve, the requested media product is considered the active one and a MediaProductTransition will have been sent.
 */
export declare function load(mediaProduct: MediaProduct, assetPosition?: number, prefetch?: boolean): Promise<void>;
