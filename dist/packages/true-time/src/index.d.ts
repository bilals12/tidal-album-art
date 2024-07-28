export declare class TrueTime {
    #private;
    constructor(url: string);
    /**
     * Returns the current time adjusted to server-time.
     *
     * @param clientCurrentTime The current time on the client side. Defaults to Date.now().
     * @returns The current adjusted time (or the client time if not synced yet).
     */
    now(clientCurrentTime?: number): number;
    /**
     * Synchronizes the client's time with the server's time.
     * If the client's time is already synchronized within an hour, this method does nothing.
     *
     * @returns {Promise<void>} A promise that resolves when the synchronization is complete.
     */
    synchronize(): Promise<void>;
    /**
     * Returns the timestamp of a performance mark with the specified name and detail.
     * PS: `performance.mark` must be called with `startTime: trueTime.now()`.
     *
     * @param markName - The name of the performance mark.
     * @param detail - Optional. The detail of the performance mark.
     * @returns The timestamp of the performance mark, or undefined if not found.
     * @throws ReferenceError if the performance mark is not found.
     */
    timestamp(markName: string, detail?: string): number | undefined;
}
export declare const trueTime: TrueTime;
