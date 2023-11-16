import React, { useContext } from "react";
// 1
const ContextWrapper = React.createContext();
function Context() {
  return (
    //2
    <ContextWrapper.Provider value="Hi Hello">
      <GrandParent></GrandParent>
    </ContextWrapper.Provider>
  );
}

function GrandParent() {
  return (
    <>
      <h2>GrandParent</h2>
      <div>⬇</div>
      <Parent></Parent>
    </>
  );
}

function Parent() {
  return (
    <>
      <h2>Parent</h2>
      <div>⬇</div>
      <Children></Children>
    </>
  );
}
const useCustomHook = () => useContext(ContextWrapper);
function Children() {
  //3
  //const message = useContext(ContextWrapper);
  //or
  const message = useCustomHook();
  return (
    <>
      <h2> Children</h2>
      <div>⬇</div>
      <div>{message}</div>
    </>
  );
}

export default Context;
