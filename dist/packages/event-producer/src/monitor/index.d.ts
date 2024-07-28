type MonitoringInformation = {
    /**
     * Each map maps an event name to a counter. The counter indicates how many events of a certain type
     * that was dropped due to filtering, validation or storing issues respectively
     */
    consentFilteredEvents: Record<string, number>;
    storingFailedEvents: Record<string, number>;
    validationFailedEvents: Record<string, number>;
};
type Reason = keyof MonitoringInformation;
export declare let _monitoringInfo: MonitoringInformation;
export declare const resetMonitoringState: () => void;
type RegisterDropEventParams = {
    eventName: string;
    reason: Reason;
};
/**
 * Registers a dropped event.
 *
 * @param {RegisterDropEventParams} payload
 */
export declare const registerDroppedEvent: ({ eventName, reason, }: RegisterDropEventParams) => void;
/**
 * Sends monitoring information to backend.
 */
export declare const sendMonitoringInfo: () => Promise<void>;
export {};
