import { Button } from "../components/Button";
import { useRouter } from "../hooks/useRouter";

export const Home = () => {
  const { routerTo } = useRouter();
  return (
    <div>
      Home
      <Button onClick={() => routerTo("/device")}>enter</Button>
    </div>
  );
};
