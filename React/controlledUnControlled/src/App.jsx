import { useState } from "react";
import ParentComponent from "./components/LiftingStateUp/ParentComponent";
import FormComparison from "./components/LiftingStateUp/forms/FormComparison";
import ControlledForm from "./components/LiftingStateUp/forms/ControlledForm";
import FormWithSingleHandler from "./components/LiftingStateUp/forms/FormWithSingleHandler";
import UnControlledComponent from "./components/LiftingStateUp/forms/UnControlledComponent";
function App() {
  return (
    <>
      {/* <ParentComponent /> */}
      {/* <FormComparison></FormComparison> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <FormWithSingleHandler></FormWithSingleHandler> */}
      <UnControlledComponent></UnControlledComponent>
    </>
  );
}

export default App;
