import React, { useEffect, useState } from "react";
import style from "./about.module.css";
import { MyInput } from "../../usableComponents/myInput/myInput";
import { MyButton } from "../../usableComponents/myButton/myButton";
import firebase from "firebase/compat";
import { TechBlock } from "./techBlock/techBlock";

export const About = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState(
    "Привет! Я кот по имени Код. Я очень сильно люблю кофе... Поможешь приготовить? А то у меня лапки..."
  );
  const [coffee, setCoffee] = useState(0);
  var starCountRef = firebase.database().ref("coffee/");
  starCountRef.on("value", (snapshot) => {
    const data = snapshot.val();
    if (coffee !== data) {
      setCoffee(data);
    }
  });
  const [sending, setSend] = useState("not sended");
  const checkDisabled = (data) => {
    return Object.values(data).filter((el) => el.length > 0).length ===
      Object.values(data).length
      ? !validateEmail(data.email)
      : true;
  };
  const db = firebase.firestore();

  useEffect(() => {
    console.log(coffee);
  }, [coffee]);

  useEffect(() => {
    if (sending === "sended" || sending === "error") {
      setTimeout(() => {
        setSend("not sended");
      }, 2000);
    }
  }, [sending]);

  function declOfNum(number, words) {
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
    ];
  }

  const sendContacts = () => {
    setSend("sending");
    db.collection("contacft")
      .add(data)
      .then((docRef) => {
        setSend("sended");
      })
      .catch((error) => setSend("error"));
    setData({ name: "", email: "", message: "" });
  };

  const validateEmail = (email) => {
    //eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className={style.aboutBoard}>
      <TechBlock />
      <div className={style.leftAbout}>
        <p className={style.aboutBackText}>About</p>
        <div className={style.myInfo}>
          <h4>About me.</h4>
          <p>Frontend Developer</p>
          <p>
            Меня зовут Никита Краснов, мне 20 лет. Я -
            <span className={style.best}> фронтенд разработчик </span>
            из России. Тот самый паренёк, который делает крутые и странные вещи
            с веб-технологиями.
            <br />
            <br />
            Люблю <span className={style.best}> решать </span> различные задачи
            на фронте, как со стороны
            <span className={style.best}> логики </span>, так и
            <span className={style.best}> дизайна </span>. Создаю понятный UI, с
            которым интересно взаимодействовать.
            <br />
            <br />
            Когда не занят делами, разбираюсь с
            <span className={style.best}> кодом</span> и пытаюсь понять, как
            сбежать из университета. Собственно, как и сейчас. <br />
            <br />
            Открыт для новых предложений, будь то
            <span className={style.best}> работа </span> или даже
            <span className={style.best}> кофе</span>, всем мир!
          </p>
          <div className={style.catLine}></div>
          <div className={style.gameCat}>
            <div className={style.cat}>(´｡• ω •｡)</div>
            <p className={style.catText}>
              {message}
              <br />
              <br />У меня уже <span className={style.best}>{coffee}</span>{" "}
              {declOfNum(coffee, ["кружечка", "кружечки", "кружечек"])} кофе!
            </p>
          </div>
        </div>
      </div>
      <div className={style.rightContact}>
        <p className={style.contactBackText}>Contact</p>
        <div className={style.myInfo + " " + style.said}>
          <h4>Let's talk!</h4>
          <p>Работа, фриланс, проект, или всё-таки кофе?</p>
          <MyInput
            name="Name *"
            value={data.name}
            onChange={(event) => {
              setData((prevstate) => ({
                ...prevstate,
                name: event.target.value,
              }));
            }}
          />
          <MyInput
            name="Email *"
            value={data.email}
            validateEmail={validateEmail}
            onChange={(event) => {
              setData((prevstate) => ({
                ...prevstate,
                email: event.target.value,
              }));
            }}
          />
          <MyInput
            name="Message *"
            value={data.message}
            onChange={(event) => {
              setData((prevstate) => ({
                ...prevstate,
                message: event.target.value,
              }));
            }}
          />
          <MyButton
            sended={sending}
            onClick={sendContacts}
            disabled={checkDisabled(data)}
            send
            name="S E N D"
          />
        </div>
      </div>
    </div>
  );
};
