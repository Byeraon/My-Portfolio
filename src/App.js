import "./App.css";
import React, { useState } from "react";
import { Navbar } from "./navbar/navbar";
import { Navigation } from "./navigation/navigation";
import { Menu } from "./site_parts/Menu/menu";
import { Contact } from "./links/contact/contact";
import { Route, BrowserRouter } from "react-router-dom";
import { Works } from "./site_parts/Works/works";

function App() {
  const [cardIsActive, setCard] = useState(false);
  const [navIsActive, setNav] = useState(false);
  return (
    <div>
      <BrowserRouter>
        {cardIsActive && <Contact />}
        {navIsActive && <Navigation isMenu={navIsActive}></Navigation>}
        <div className="App">
          <Navbar setMenu={setNav} isMenu={navIsActive}></Navbar>
          <Route exact path="/" render={() => <Menu />} />
          <Route path="/about" render={() => <div></div>}></Route>
          <Route path="/works" render={() => <Works />}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
