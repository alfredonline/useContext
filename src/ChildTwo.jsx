import React, { useContext } from "react";
import TestContext from "./TestContext";

function ChildTwo() {
  const { numVal, numFunc } = useContext(TestContext);
  return (
    <div>
      <button onClick={() => numFunc((numVal) => numVal + 1)}>add one</button>
    </div>
  );
}

export default ChildTwo;
