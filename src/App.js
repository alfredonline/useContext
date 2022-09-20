import ChildOne from "./ChildOne";
import TestContext from "./TestContext";
function App() {
  return (
    <TestContext.Provider value={25}>
      <ChildOne />
    </TestContext.Provider>
  );
}

export default App;
