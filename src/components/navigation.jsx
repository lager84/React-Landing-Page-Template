import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
          Архыз-Парк
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="#about" className="page-scroll">
              База отдыха
              </a>
            </li>
            {/* <li>
              <a href="#features" className="page-scroll">
                База отдыха
              </a>
            </li> */}
            <li>
              <a href="#portfolio" className="page-scroll">
              Фотогалерея
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
               Номера
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
              Банный комплекс
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
              Архыз
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
