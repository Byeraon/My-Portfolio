import s from "./navigation.module.css";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export let Navigation = ({ setMenu, isMenu, changeActive, style }) => {
  const ParentElement = useRef();
  const First = useRef();
  const Second = useRef();
  return (
    <div
      onTransitionEnd={(el) => {
        console.log("end", isMenu);
        if (!isMenu) {
          ParentElement.current.style.transition = "0ms all";
          ParentElement.current.style.top = "100%";
          ParentElement.current.style.transition = "400ms all";
        } else {
          ParentElement.current.style.top = "0%";
        }
      }}
      style={style}
      className={s.all_nav}
    >
      <div
        onTransitionEnd={() => {
          setMenu();
          changeActive();
        }}
        className={s.nav}
      ></div>
      <div className={s.nav}></div>
      <div ref={ParentElement} className={s.text_block}>
        <div
          ref={First}
          style={
            isMenu
              ? { width: "100%", height: "100%", borderRadius: "0%" }
              : { width: "0%", height: "0%", borderRadius: "50%" }
          }
          className={s.backgroundBlock}
        ></div>
        <div
          ref={Second}
          className={s.backgroundBlock}
          style={Object.assign(
            { opacity: 0.5 },
            isMenu
              ? { width: "100%", height: "100%", borderRadius: "0%" }
              : { width: "0%", height: "0%", borderRadius: "50%" }
          )}
        ></div>
        <NavLink
          onClick={() => {
            console.log("click");
          }}
          activeClassName={s.active}
          to="/about"
        >
          <h3 className={s.s}>ABOUT</h3>
        </NavLink>
        <NavLink
          onClick={() => {
            console.log("click");
          }}
          activeClassName={s.active}
          exact
          to="/"
        >
          <h3 className={s.f}>HOMEPAGE</h3>
        </NavLink>
        <NavLink
          onClick={() => {
            console.log("click");
          }}
          activeClassName={s.active}
          to="/works"
        >
          <h3 className={s.t}>WORKS</h3>
        </NavLink>
      </div>
    </div>
  );
};
