import { useNavigate } from "react-router-dom";

export const useRouter = () => {
  const navigate = useNavigate();

  const routerTo = (pathname: string) => {
    return navigate(pathname);
  };

  return { routerTo };
};
