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
          {/* <a href="https://t.me/arhizpark">
          <i className="fa-brands fa-telegram" style={{fontSize:'24px' , marginRight:'10px', color:"#e44d26"}} ></i>
          </a>
          <a href="https://wa.me/message/J5RIVBNFTJWSF1">
          <i className="fa-brands fa-whatsapp" style={{fontSize:'24px' , color:"#e44d26"}} ></i>
          </a>
       */}
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
              <a href="#news" className="page-scroll">
              Новости
              </a>
            </li>
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
               Проживание и сервис
              </a>
            </li>
            <li>
              <a href="#relaxation" className="page-scroll">
              Развлечения
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
