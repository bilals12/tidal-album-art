export declare const css: (template: {
    raw: readonly string[] | ArrayLike<string>;
}, ...substitutions: any[]) => string;
export declare const html: (template: {
    raw: readonly string[] | ArrayLike<string>;
}, ...substitutions: any[]) => string;
/**
 * Takes 't' seconds and formats them as '(hh:)mm:ss'.
 * Only 0-pad minutes if needed (hours present).
 */
export declare function asTime(t?: number | string): string;
/**
 * Formats seconds to datetime durations for the <time> element.
 *
 * @see https://www.w3.org/TR/html5/infrastructure.html#duration-time-component
 * @param {number} t - Seconds
 */
export declare function timeDateTime(t?: number | string): string;
