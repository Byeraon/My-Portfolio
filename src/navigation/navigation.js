import s from "./navigation.module.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export let Navigation = ({ setMenu, menuClose, isMenu, changeActive }) => {
  const [navchg, setCh] = useState({});
  const [navchg_top, setCh2] = useState({});
  const [textes, setText] = useState({});
  const [textes_a, setA] = useState({});
  const [textB, setTextB] = useState({});
  const [first_menu, setFirst] = useState(false);

  let destroyer = () => {
    setCh({
      transition: "all 500ms linear",
      height: "0",
      marginTop: "0",
      borderRadius: "100%",
      backgroundColor: "black",
    });
    setCh2({
      transition: "all 250ms linear",
      height: "0",
      marginTop: "0",
      borderRadius: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.192)",
    });
    setText(s.after_animated);
    setA(s.after_animated_fA);
    setTextB({
      height: "0",
      transition: "all 500ms linear",
    });
    setTimeout(setMenu, 500);
  };

  useEffect(() => {
    console.log(menuClose);
    if (menuClose) {
      setCh({
        transition: "all 500ms linear",
        height: "0",
        marginTop: "0",
        borderRadius: "100%",
        backgroundColor: "black",
      });
      setCh2({
        transition: "all 250ms linear",
        height: "0",
        marginTop: "0",
        borderRadius: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.192)",
      });
      setText(s.after_animated);
      setA(s.after_animated_fA);
      setTextB({
        height: "0",
        transition: "all 500ms linear",
      });
      setTimeout(setMenu, 500);
    }
  }, [menuClose, setMenu]);

  useEffect(() => {
    if (isMenu) {
      setCh({
        transition: "all 500ms linear",
        height: "200vh",
        marginTop: "-100vh",
        borderRadius: "0%",
        backgroundColor: "black",
      });
      setCh2({
        transition: "all 250ms linear",
        height: "200vh",
        marginTop: "-100vh",
        borderRadius: "0%",
        backgroundColor: "rgba(0, 0, 0, 0.192)",
      });
      setText(s.animated);
      setA(s.animated_fA);
      setTextB({
        height: "100vh",
      });
      setFirst(true);
    }
  }, [isMenu, first_menu]);

  return (
    <div className={s.all_nav}>
      <div
        onTransitionEnd={() => {
          if (menuClose) {
            setMenu();
            changeActive();
          }
        }}
        className={s.nav}
        style={navchg}
      ></div>
      <div className={s.nav} style={navchg_top}></div>
      <div style={textB} className={s.text_block}>
        <NavLink
          activeClassName={s.active}
          className={textes_a}
          onClick={destroyer}
          to="/about"
        >
          <h3 className={textes + " " + s.s}>ABOUT</h3>
        </NavLink>
        <NavLink
          activeClassName={s.active}
          className={textes_a}
          onClick={destroyer}
          exact
          to="/"
        >
          <h3 className={textes + " " + s.f}>HOMEPAGE</h3>
        </NavLink>
        <NavLink
          activeClassName={s.active}
          className={textes_a}
          onClick={destroyer}
          to="/works"
        >
          <h3 className={textes + " " + s.t}>WORKS</h3>
        </NavLink>
      </div>
    </div>
  );
};
