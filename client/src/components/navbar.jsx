import React from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-transparent fw-medium"
      data-bs-theme="dark"
    >
      <div className="container-md">
        <a className="navbar-brand " href="#">
          <img src={logo} alt="eRespect" width="150" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav my-nav">
            <li className="nav-item">
              <ScrollLink
                to="sobreNos"
                smooth={true}
                duration={100}
                easing="easeInOutCubic"
              >
                <a className="nav-link" aria-current="page" href="#">
                  Sobre Nós
                </a>
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="legislacao"
                smooth={true}
                duration={100}
                easing="easeInOutCubic"
              >
                <a className="nav-link" href="#">
                  Legislação
                </a>
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="servico"
                smooth={true}
                duration={100}
                easing="easeInOutCubic"
              >
                <a className="nav-link" href="#">
                  Nosso Serviço
                </a>
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="contatos"
                smooth={true}
                duration={100}
                easing="easeInOutCubic"
              >
                <a className="nav-link" href="#">
                  Contatos
                </a>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
