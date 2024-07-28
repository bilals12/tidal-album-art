import { LoudnessNormalizationMode } from './api/interfaces';
import { AudioQuality } from './internal/types';

type Config = {
    apiUrl: string;
    appVersion: string;
    clientPlatform: string;
    desiredVolumeLevel: number;
    eventUrl: string;
    gatherEvents: boolean;
    loudnessNormalizationMode: LoudnessNormalizationMode;
    outputDevicesEnabled: boolean;
    streamingWifiAudioQuality: AudioQuality;
};
export declare function get<K extends keyof Config>(key: K): Config[K];
export declare function update(updates: Partial<Config>): Config;
export declare const events: EventTarget;
export {};
