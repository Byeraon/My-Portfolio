import { useEffect, useState } from "react";
import style from "./contact.module.css";

export let Contact = (props) => {
  const [tag, setTag] = useState();
  const [backdropper, setBack] = useState();
  let destroyer = () => {
    setBack(style.backdropper_out);
    setTag(style.tag_out);
    setTimeout(props.setCard, 500);
  };
  useEffect(() => {
    if (props.isCard) {
      setBack(style.backdropper);
      setTag(style.tag);
    }
  }, [props.isCard]);

  return (
    <div className={style.all_place}>
      <div
        onClick={(e) => {
          if (
            (e.target.className.slice(0, 12).indexOf("real") === -1) &
            (e.target.className.slice(0, 12).indexOf("text") === -1) &
            (e.target.className.slice(0, 12).indexOf("line") === -1)
          ) {
            destroyer();
          }
        }}
        className={style.card + " " + tag}
      >
        <div className={style.real_card + " " + tag}>
          <h4 className={style.text}>Contact Information</h4>
          <div className={style.line}></div>
          <h4 className={style.text}>
            e-mail: nikitka.crasnov2013@mail.ru <br></br>phone: +7 (962) 168
            62-00
          </h4>
          <h4 className={style.text}>FFFFF</h4>
        </div>
      </div>
      <div
        onClick={destroyer}
        className={style.not_card + " " + backdropper}
      ></div>
    </div>
  );
};
