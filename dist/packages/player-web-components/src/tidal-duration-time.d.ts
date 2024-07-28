declare const customElementName = "tidal-duration-time";
export declare class TidalDurationTime extends HTMLElement {
    #private;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderTime(seconds: number): void;
}
export default customElementName;
