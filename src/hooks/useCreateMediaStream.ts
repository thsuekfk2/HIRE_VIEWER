import { useRecoilState, useRecoilValue } from "recoil";
import { MediaStream } from "../atoms/mediaStream";

export const useCreateMediaStream = () => {
  const { userMediaStream } = useRecoilValue(MediaStream);
  const [_, setUserStream] = useRecoilState(MediaStream);

  const initialConstraints = {
    audio: true,
    video: true,
  };

  const createStream = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia(
        initialConstraints
      );
      setUserStream((prev) => ({ ...prev, userMediaStream: videoStream }));
      console.log("나의 비디오 stream", videoStream);
      return;
    } catch (error) {
      console.log("failed to get stream", error);
      return;
    }
  };

  const toggleAudioStream = () => {
    if (userMediaStream?.id) {
      userMediaStream
        .getAudioTracks()
        .forEach((track) => (track.enabled = !track.enabled));
    } else {
      console.log("myStream doesnt exist");
    }
  };

  const toggleVideoStream = () => {
    if (userMediaStream?.id) {
      userMediaStream
        .getVideoTracks()
        .forEach((track) => (track.enabled = !track.enabled));
    } else {
      console.log("myStream doesnt exist");
    }
  };

  const stopStream = () => {
    if (userMediaStream?.id) {
      userMediaStream.getTracks().forEach((track) => track.stop());
    } else {
      console.log("myStream doesnt exist");
    }
  };

  return {
    createStream,
    stopStream,
    toggleVideoStream,
    toggleAudioStream,
  };
};
