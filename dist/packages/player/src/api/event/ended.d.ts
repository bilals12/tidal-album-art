import { MediaProduct } from '../interfaces';

export type EndReason = 'completed' | 'error' | 'skip';
export type EndedEvent = CustomEvent<{
    mediaProduct: MediaProduct;
    reason: EndReason;
}>;
export declare function ended(reason: EndReason, mediaProduct: MediaProduct): EndedEvent;
