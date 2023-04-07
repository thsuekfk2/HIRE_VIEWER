import { Button } from "../components/Button";
import { useRouter } from "../hooks/useRouter";

export const Device = () => {
  const { routerTo } = useRouter();

  return (
    <div>
      Device Page
      <Button onClick={() => routerTo("/record")}>next</Button>
    </div>
  );
};
