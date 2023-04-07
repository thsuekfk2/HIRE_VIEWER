export interface MediaStreamInfo {
  userMediaStream: MediaStream | null;
  userMic: boolean;
  userVideo: boolean;
  userAudioInputDevice: MediaDeviceInfo | null;
  userAudioOutputDevice: MediaDeviceInfo | null;
  userVideoInputDevice: MediaDeviceInfo | null;
}
