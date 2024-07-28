import { AudioQuality, Codec, VideoQuality } from '../types';
import { PlaybackInfo } from './playback-info-resolver';

export type StreamInfo = {
    albumPeakAmplitude?: number;
    albumReplayGain?: number;
    bitDepth?: number;
    codec?: Codec;
    expires: number;
    id: string;
    prefetched: boolean;
    quality: AudioQuality | VideoQuality;
    sampleRate?: number;
    securityToken?: string;
    streamFormat?: 'aac' | 'aac+' | 'flac' | 'mp3' | 'mp4a.40.2' | 'mp4a.40.5' | 'none';
    streamUrl: string;
    streamingSessionId: string;
    trackPeakAmplitude?: number;
    trackReplayGain?: number;
    type: 'demo' | 'track' | 'video';
};
export declare function parseManifest(playbackInfo: PlaybackInfo): StreamInfo;
