import styled from "@emotion/styled";

export const RecordingIcon = () => {
  return (
    <Recording>
      <div className="recording-circle" />
      <div className="recording-text">Record</div>
    </Recording>
  );
};

const Recording = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: rgb(99, 99, 99);
  border-radius: 4px;
  width: 85px;

  .recording-circle {
    background-color: red;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    animation: ease pulse 2s infinite;
    margin-right: 4px;
  }

  .recording-text {
    font-size: 12px;
    color: white;
  }

  @keyframes pulse {
    0% {
      background-color: red;
    }
    50% {
      background-color: #f06c6c;
    }
    100% {
      background-color: red;
    }
  }
`;
