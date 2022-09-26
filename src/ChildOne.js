import React, { useContext } from "react";
import TestContext from "./TestContext";

function ChildOne() {
  const { numVal } = useContext(TestContext);
  return <div>I have {numVal} tomatoes in my house!</div>;
}

export default ChildOne;
