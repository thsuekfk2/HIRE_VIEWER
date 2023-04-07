import { useRouter } from "../hooks/useRouter";

export const Home = () => {
  const { routerTo } = useRouter();
  return (
    <div>
      Home
      <button onClick={() => routerTo("/device")}>enter</button>
    </div>
  );
};
