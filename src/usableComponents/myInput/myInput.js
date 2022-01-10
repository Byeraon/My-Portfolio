import React from "react";
import style from "./myInput.module.css";

export const MyInput = (props) => {
  return (
    <div className={style.inputed}>
      {props.name === "Message *" ? (
        <textarea res value={props.value} onChange={props.onChange}></textarea>
      ) : (
        <input value={props.value} onChange={props.onChange}></input>
      )}

      <label>{props.name}</label>
      <div className={style.line}>
        <div
          style={
            props.name !== "Email *"
              ? props.value.length > 0
                ? { width: "100%" }
                : {}
              : props.value.length > 0
              ? props.validateEmail(props.value)
                ? { width: "100%" }
                : { width: "50%" }
              : {}
          }
          className={style.doingLine}
        ></div>
      </div>
    </div>
  );
};
