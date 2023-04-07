import { Home } from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { Router as RemixRouter } from "@remix-run/router/dist/router";
import { Device } from "./pages/Device";
import { Record } from "./pages/Record";

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/",
    element: <Home />,
    label: "홈",
  },
  {
    id: 0,
    path: "/device",
    element: <Device />,
    label: "Device",
  },
  {
    id: 0,
    path: "/record",
    element: <Record />,
    label: "Record",
  },
];

export const router: RemixRouter = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element: router.element,
    };
  })
);
