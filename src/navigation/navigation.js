import s from "./navigation.module.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export let Navigation = ({ setMenu, isMenu, changeActive }) => {
  return (
    <div className={s.all_nav}>
      <div
        onTransitionEnd={() => {
          setMenu();
          changeActive();
        }}
        className={s.nav}
      ></div>
      <div className={s.nav}></div>
      <div className={s.text_block}>
        <NavLink activeClassName={s.active} to="/about">
          <h3 className={s.s}>ABOUT</h3>
        </NavLink>
        <NavLink activeClassName={s.active} exact to="/">
          <h3 className={s.f}>HOMEPAGE</h3>
        </NavLink>
        <NavLink activeClassName={s.active} to="/works">
          <h3 className={s.t}>WORKS</h3>
        </NavLink>
      </div>
    </div>
  );
};
