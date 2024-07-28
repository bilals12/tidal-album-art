import { default as shaka } from 'shaka-player';
import { Adaptation } from '../internal/event-tracking/streaming-metrics/playback-statistics';

export declare function shakaTrackToAdaptation(shakaTrack: shaka.extern.Track, assetPosition: number): Adaptation;
export declare function saveAdaptation(streamingSessionId: string, activeTrack: shaka.extern.Track, currentTime: number): Promise<Adaptation>;
export declare function registerAdaptations(shakaPlayer: shaka.Player): () => void;
