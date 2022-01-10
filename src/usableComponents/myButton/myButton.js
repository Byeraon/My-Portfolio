import React from "react";
import style from "./myButton.module.css";

export const MyButton = (props) => {
  return (
    <button
      className={
        props.sended === "sending"
          ? style.sending
          : props.sended === "sended"
          ? style.sended :
          props.sended === "error"
          ? style.error
          : ""
      }
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.sended === "sended"
        ? "S E N D E D"
        : props.sended === "error"
        ? "E R R O R"
        : "S E N D"}
    </button>
  );
};
