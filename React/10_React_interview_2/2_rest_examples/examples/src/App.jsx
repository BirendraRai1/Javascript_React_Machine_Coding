import { useState } from "react";
import UseMemoConcept from "./components/useMemo";
import UseCallbackConcept from "./components/useCallBack";
import EasyUseMemoExamples from "./components/EasyUseMemoExamples";
import EasyUseCallBackExamples from "./components/EasyUseCallBackExamples";
import EasyUseRefExamples from "./components/EasyUseRefExamples";
import CustomHook1 from "./components/CustomHook1";
import CustomHook2 from "./components/CustomHook2";
import DebounceInReact from "./components/DebounceInReact";
import SecondDebounce from "./components/SecondDebounce";
import ThrottlingInReact from "./components/ThrottlingInReact";
function App() {
  return (
    <>
      {/* <EasyUseMemoExamples></EasyUseMemoExamples> */}
      {/* <UseMemoConcept value={100}></UseMemoConcept> */}
      {/* <EasyUseCallBackExamples></EasyUseCallBackExamples> */}
      {/* <UseCallbackConcept></UseCallbackConcept> */}
      {/* <EasyUseRefExamples></EasyUseRefExamples> */}
      {/* <CustomHook1></CustomHook1> */}
      {/* <CustomHook2></CustomHook2> */}
      {/* <DebounceInReact></DebounceInReact> */}
      {/* <SecondDebounce></SecondDebounce> */}
      <ThrottlingInReact></ThrottlingInReact>
    </>
  );
}

export default App;
