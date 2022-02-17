import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react/cjs/react.development";
import style from "./OneTech.module.css";

export const OneTech = ({ item }) => {
  const [img, setImg] = useState(false);
  useLayoutEffect(() => {
    item.url.getDownloadURL().then((url) => {
      setImg(url);
    });
  }, [item.url]);

  return (
    <div
      style={Object.assign(
        { backgroundImage: `url(${img})` },
        img ? { width: "100%", opacity: 1 } : { width: "0%" }
      )}
      className={style.tech}
    >
      <div
        style={{ backgroundColor: item.color }}
        className={style.backColor}
      ></div>

      <p>{item.name}</p>
    </div>
  );
};
