import { MediaProduct } from '../../api/interfaces';
import { mimeTypes } from '../../internal/constants';
import { AudioQuality } from '../../internal/types';

type VideoQuality = 'AUDIO_ONLY' | 'HIGH' | 'LOW' | 'MEDIUM';
type AudioMode = 'DOLBY_ATMOS' | 'SONY_360RA' | 'STEREO';
type AssetPresentation = 'FULL' | 'PREVIEW';
type SteamType = 'LIVE' | 'ON_DEMAND';
type BasePlaybackInfo = {
    assetPresentation: AssetPresentation;
    licenseSecurityToken?: string;
    manifest: string;
    manifestHash?: string;
    manifestMimeType: string;
    prefetched: boolean;
    streamingSessionId: string;
};
export type PlaybackInfoTrack = BasePlaybackInfo & {
    albumPeakAmplitude: number;
    albumReplayGain: number;
    audioMode: AudioMode;
    audioQuality: AudioQuality;
    bitDepth: null | number;
    sampleRate: null | number;
    trackId: number;
    trackPeakAmplitude: number;
    trackReplayGain: number;
};
export type PlaybackInfoVideo = BasePlaybackInfo & {
    streamType: SteamType;
    videoId: number;
    videoQuality: VideoQuality;
};
export type PlaybackInfoDemo = Pick<BasePlaybackInfo, 'assetPresentation' | 'manifest' | 'prefetched' | 'streamingSessionId'> & {
    audioMode: AudioMode;
    audioQuality: AudioQuality;
    manifestMimeType: typeof mimeTypes.EMU;
    trackId: string;
};
type ExtraFields = {
    expires: number;
};
export type PlaybackInfo = (PlaybackInfoDemo | PlaybackInfoTrack | PlaybackInfoVideo) & ExtraFields;
export type Options = {
    accessToken: string | undefined;
    audioQuality: AudioQuality;
    clientId: null | string;
    mediaProduct: MediaProduct;
    prefetch: boolean;
    streamingSessionId: string;
};
export declare function getDemoPlaybackInfo(options: Options): PlaybackInfo;
export declare function fetchPlaybackInfo(options: Options): Promise<PlaybackInfo>;
export {};
