import styled from "@emotion/styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?(): void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonWrap onClick={onClick}>{children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
  background-color: #444;
  color: white;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  margin: 10px;
`;
