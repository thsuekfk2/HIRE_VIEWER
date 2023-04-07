import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { MediaStream } from "../atoms/mediaStream";
import { useEffect, useRef } from "react";
import { useCreateMediaStream } from "../hooks/useCreateMediaStream";
import { useRecord } from "../hooks/useRecord";
import { RecordingIcon } from "../components/RecordingIcon";
import { Button } from "../components/Button";

export const Record = () => {
  const { createStream } = useCreateMediaStream();
  const { isRecording, videoBlob, startRecording, stopRecording } = useRecord();

  const { userMediaStream } = useRecoilValue(MediaStream);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    createStream();
  }, []);

  useEffect(() => {
    if (videoRef.current && userMediaStream?.id) {
      videoRef.current.srcObject = userMediaStream;
    }
  }, [userMediaStream]);

  const downloadVideo = () => {
    if (videoBlob) {
      const videoUrl = URL.createObjectURL(videoBlob);
      const link = document.createElement("a");
      link.href = videoUrl;
      link.download = "recorded_video.webm";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
      URL.revokeObjectURL(videoUrl);
    }
  };

  return (
    <Container>
      <Cam muted autoPlay playsInline ref={videoRef}></Cam>
      <ButtonWrap>
        {isRecording ? (
          <>
            <RecordingIcon />
            <Button onClick={stopRecording}>Stop</Button>
          </>
        ) : (
          <Button onClick={startRecording}>Start</Button>
        )}
        {videoBlob && <Button onClick={downloadVideo}>영상 다운</Button>}
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cam = styled.video`
  width: 600px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
