import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const AnotherComponent = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return <div>Count from another component: {count}</div>;
};

export default AnotherComponent;
