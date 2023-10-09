"use client";
import { themeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const UseContextExample = () => {

  const {state,dispatch} = useContext(themeContext);

  console.log(state)
  return (
    <div className="useContextExample">
      <button onClick={()=>dispatch({type:"Change_Theme"})}>Change Theme</button>
      <button onClick={()=>dispatch({type:"Change_Fontsize", payload:20})}>Change Font Size</button>
    </div>
  );
};

export default UseContextExample;