import { useRecoilValue } from "recoil";
import { MediaStream } from "../atoms/mediaStream";
import { useRef, useState } from "react";

export const useRecord = () => {
  const { userMediaStream } = useRecoilValue(MediaStream);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);

  const startRecording = async () => {
    try {
      if (userMediaStream?.id) {
        const mediaRecorder = new MediaRecorder(userMediaStream);
        mediaRecorderRef.current = mediaRecorder;
        const chunks: Blob[] = [];

        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
          const videoBlob = new Blob(chunks, { type: "video/webm" });
          setVideoBlob(videoBlob);
        };

        mediaRecorder.start();
        setIsRecording(true);
      }
    } catch (error) {
      console.error("Failed to start recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return {
    isRecording,
    videoBlob,
    startRecording,
    stopRecording,
  };
};
