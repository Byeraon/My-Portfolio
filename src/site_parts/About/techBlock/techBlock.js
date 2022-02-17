import React, { useEffect } from "react";
import style from "./techBlock.module.css";
import firebase from "firebase/compat";
import { useState } from "react/cjs/react.development";
import { OneTech } from "./oneTech/OneTech";

export const TechBlock = () => {
  const db = firebase.firestore();
  const storage = firebase.storage();
  const [techs, setTechs] = useState([]);
  useEffect(() => {
    console.log(techs);
  }, [techs]);
  useEffect(() => {
    setTechs([]);
    db.collection("myTechs")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log("cafw");
          setTechs((prevstate) => [
            ...prevstate,
            { ...doc.data(), url: storage.refFromURL(doc.data().url) },
          ]);
        });
      });
  }, [db]);
  return (
    <div className={style.techBlock}>
      {techs.map((el) => (
        <OneTech key={el.name} item={el} />
      ))}
    </div>
  );
};
