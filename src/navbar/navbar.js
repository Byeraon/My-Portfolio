import { useEffect, useState } from "react";
import s from "./navbar.module.css";

export let Navbar = (props) => {
  const [changeto, setCh1] = useState({});
  const [changeto2, setCh2] = useState({});

  useEffect(() => {
    if (props.isMenu) {
      setCh1({
        transform: "rotate(-45deg)",
        width: "100%",
        position: "absolute",
        transition: "all 400ms linear",
      });
      setCh2({
        transform: "rotate(45deg)",
        width: "100%",
        position: "absolute",
        transition: "all 400ms linear",
      });
    } else {
      setCh1({});
      setCh2({});
    }
  }, [props.isMenu]);

  return (
    <div onClick={props.setMenu} className={s.menu + " " + s.clicked}>
      <span
        style={changeto}
        className={s.menu_top + " " + s.clicked + " " + s.menu_item}
      ></span>
      <span
        style={changeto2}
        className={s.menu_center + " " + s.menu_item}
      ></span>
      <span
        style={changeto}
        className={s.menu_bottom + " " + s.clicked + " " + s.menu_item}
      ></span>
    </div>
  );
};
