import style from "./menu.module.css";
import { Links } from "../../links/links";
import { Kitty } from "./Kitty/kitty";

export let Menu = (props) => {
  return (
    <div className={style.Menu}>
      <Kitty />
      <div className={style.black_place}></div>
      <div className={style.all_text}>
        <div className={style.text_place}>
          <h1>~ NIKITA&nbsp;</h1>
          <h1 className={style.c_p}>\</h1>
          <h1>&nbsp;KRASNOV ~</h1>
        </div>
        <h2 className={style.top_text}>
          Frontend 
          <span className={style.text_next}>
          &nbsp;Developer</span>
        </h2>
      </div>
      <Links setCard={props.setCard}></Links>
    </div>
  );
};
