import { useRouter } from "../hooks/useRouter";

export const Record = () => {
  const { routerTo } = useRouter();

  return (
    <div>
      Record
      <button onClick={() => routerTo("/end")}>end</button>
    </div>
  );
};
