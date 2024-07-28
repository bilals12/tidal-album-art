declare const customElementName = "tidal-current-time";
export declare class TidalCurrentTime extends HTMLElement {
    #private;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderTime(seconds: number): void;
}
export default customElementName;
