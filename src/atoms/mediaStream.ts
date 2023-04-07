import { atom } from "recoil";
import { MediaStreamInfo } from "../types/mediaStreamType";

export const MediaStream = atom<MediaStreamInfo>({
  key: "mediaStream-atom",
  default: {
    userMediaStream: null,
    userMic: false,
    userVideo: false,
    userAudioInputDevice: null,
    userAudioOutputDevice: null,
    userVideoInputDevice: null,
  },
});
