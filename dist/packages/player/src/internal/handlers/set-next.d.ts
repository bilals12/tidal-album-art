import { MediaProduct } from '../../api/interfaces';

/**
 * Cache the latest next call to assert on it for subsequent load and
 * next calls, to re-use the promise for the same media products.
 */
export declare let latestNextCall: {
    mediaProduct: MediaProduct | undefined;
    promise: ReturnType<typeof _setNext>;
};
declare function _setNext(mediaProduct?: MediaProduct, sessionTags?: Array<string>): Promise<void>;
/**
 * Tell TIDAL Player to make an implicit transition to the selected media product
 * once the currently active product finishes playing. Can also be used to prepare
 * a media product for playback. Calling with mediaProduct set to undefined triggers
 * an unset of the previously setNext call.
 *
 * @param {MediaProduct | undefined} mediaProduct
 * @param {Array<string>} sessionTags
 */
export declare function setNext(mediaProduct?: MediaProduct, sessionTags?: Array<string>): Promise<void>;
export {};
