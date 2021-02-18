import { lazy } from "react";

const PageA = lazy(() => import("@views/PageA"));

const PageB = lazy(() => import("@views/PageB"));

const routerMap = [
  {
    path: "/",
    component: PageA,
  },
  {
    path: "/page-b",
    component: PageB,
  },
];

export default routerMap;
