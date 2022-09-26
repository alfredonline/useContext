import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import TestContext from "./TestContext"
import { useState } from "react"

function App() {

  const [num, setNum] = useState(1)

  return (
    <TestContext.Provider value={{numVal: num, numFunc: setNum}}>
      <ChildOne />
      <ChildTwo />
    </TestContext.Provider>
  );
}

export default App;
