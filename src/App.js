import "./App.css";
import React, { useState } from "react";
import { Navbar } from "./navbar/navbar";
import { Navigation } from "./navigation/navigation";
import { Menu } from "./site_parts/Menu/menu";
import { Contact } from "./links/contact/contact";
import { Route, BrowserRouter } from "react-router-dom";
import { Works } from "./site_parts/Works/works";
import { About } from "./site_parts/About/about";

function App() {
  const [cardIsActive, setCard] = useState(false);
  const [navIsActive, setNav] = useState(false);
  return (
    <div>
     
        {cardIsActive && <Contact />}
        <div style={{ zIndex: 2 }} className="App">
          <Navbar setMenu={setNav} isMenu={navIsActive}></Navbar>
          <Route exact path="/" render={() => <Menu isMenu={navIsActive} />} />
          <Route path="/about" render={() => <About />}></Route>
          <Route path="/works" render={() => <Works />}></Route>
        </div>
        <Navigation
          style={
            navIsActive
              ? { zIndex: 3, display: "block", opacity: 1 }
              : { zIndex: -10, opacity: 0 }
          }
          isMenu={navIsActive}
          setMenu={setNav}
        ></Navigation>
      
    </div>
  );
}

export default App;
