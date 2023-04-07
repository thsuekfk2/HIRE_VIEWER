import { useRouter } from "../hooks/useRouter";

export const Device = () => {
  const { routerTo } = useRouter();

  return (
    <div>
      Device Page
      <button onClick={() => routerTo("/record")}>next</button>
    </div>
  );
};
