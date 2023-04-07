import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./styles/globalStyle";
import { Global } from "@emotion/react";

function App() {
  return (
    <RecoilRoot>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
