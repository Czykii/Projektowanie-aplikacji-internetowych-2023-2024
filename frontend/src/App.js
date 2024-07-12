import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import AudiR8 from "./pages/AudiR8";
import Nissan from "./pages/NissanGTR";
import Porsche from "./pages/Porsche911";
import AdminPanel from "./pages/AdminPanel";
import React from "react";

function App() {

  return (
    <div className="App">
      <div>
        {/*- Navbar -*/}
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/home">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/details">CENNIK</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    OFERTA
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/audir8">AUDI R8</a></li>
                    <li><a className="dropdown-item" href="/nissangtr">NISSAN GTR (R35)</a></li>
                    <li><a className="dropdown-item" href="/porsche911">PORSCHE 911</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">KONTAKT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      <Router>
        <Routes>
          <Route exact path= "/" element={<Navigate to="home" />} />
          <Route path = "/home" exact element={<Home />} />
          <Route path = "/contact" exact element = {<Contact />} />
          <Route path = "/details" exact element = {<Details />} />
          <Route path = "/audir8" exact element = {<AudiR8 />} />
          <Route path = "/nissangtr" exact element = {<Nissan />} />
          <Route path = "/porsche911" exact element={<Porsche />} />
          <Route path = "/adminpanel" exact element={<AdminPanel />} />
        </Routes>
      </Router>

        {/*- Footer -*/}
        <footer id="footer">
          <p> Wypożyczalnia samochodów sportowych FAST CARS </p>
          <p>Copyright © 2022 Wszelkie prawa zastrzeżone.</p>
          <a className="facebook" href="https://www.facebook.com/">
            <i className="fa fa-facebook-official" />

          </a>
          <a className="instagram" href="https://www.instagram.com/">
            <i className="mx-2 fa fa-instagram" />

          </a>
          <a className="youtube" href="https://www.youtube.com/">
            <i className="fa fa-youtube-play" />

          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
