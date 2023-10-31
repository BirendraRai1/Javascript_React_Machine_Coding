import React from "react";
import { memo } from "react";

function ChildOfCallBack({ Learning, count }) {
  console.log("child component");
  return <div>ChildOfCallBack</div>;
}

export default memo(ChildOfCallBack);
