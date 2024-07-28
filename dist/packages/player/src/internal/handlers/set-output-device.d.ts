/**
 * Set the output device. Applies to each sub-player that supports
 * output devices. Currently shaka and native.
 *
 * @param {string} sinkId - The sinkId we want to use as output.
 * @returns {Promise<string>} - The sinkId we are now using as output.
 */
export declare function setOutputDevice(sinkId: string): Promise<string>;
