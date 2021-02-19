import React from "react";
import { useTestStore } from "@store/index";

const ShowCount = () => {
  const {
    state: { count },
  } = useTestStore();
  return <div>{count}</div>;
};

export default ShowCount;
