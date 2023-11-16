import React from "react";
import { memo } from "react";

function ChildOfCallBack({ Learning, count }) {
  console.log("child component");
  return (
    <>
      <div>ChildOfCallBack:{count + 1}</div>
      <p>{Learning()}</p>
    </>
  );
}

export default memo(ChildOfCallBack);
