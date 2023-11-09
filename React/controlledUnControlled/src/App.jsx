import { useState } from "react";
import ParentComponent from "./components/LiftingStateUp/ParentComponent";
import FormComparison from "./components/forms/FormComparison";
import ControlledForm from "./components/forms/ControlledForm";
import FormWithSingleHandler from "./components/forms/FormWithSingleHandler";
import UnControlledComponent from "./components/forms/UnControlledComponent";
function App() {
  return (
    <>
      <ParentComponent />
      {/* <FormComparison></FormComparison> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <FormWithSingleHandler></FormWithSingleHandler> */}
      {/* <UnControlledComponent></UnControlledComponent> */}
    </>
  );
}

export default App;
