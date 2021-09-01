import "./App.css";
import React, { useState } from "react";
import { Navbar } from "./navbar/navbar";
import { Navigation } from "./navigation/navigation";
import { Menu } from "./site_parts/Menu/menu";
import { Contact } from "./links/contact/contact";
import { Route, BrowserRouter } from "react-router-dom";
import { Works } from "./site_parts/Works/works";

function App() {
  const [navIsActive, setActive] = useState(false);
  const [cardIsActive, setCardActive] = useState(false);
  const [menuClose, setClose] = useState(false);

  let setMenu = () => {
    if (navIsActive) {
      setClose(true);
    } else {
      setActive(!navIsActive);
      setClose(false);
    }
  };

  let changeActive = () => {
    setActive(!navIsActive);
    setClose(false);
  };

  let setCard = () => {
    setCardActive(!cardIsActive);
  };

  return (
    <div>
      <BrowserRouter>
        {cardIsActive && <Contact setCard={setCard} isCard={cardIsActive} />}
        {navIsActive && (
          <Navigation
            changeActive={changeActive}
            menuClose={menuClose}
            setMenu={setMenu}
            isMenu={navIsActive}
          ></Navigation>
        )}
        <div className="App">
          <Navbar isMenu={navIsActive} setMenu={setMenu}></Navbar>
          <Route exact path="/" render={() => <Menu setCard={setCard} />} />
          <Route path="/about" render={() => <div></div>}></Route>
          <Route path="/works" render={() => <Works />}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
