import React from "react";
import { Button } from 'primereact/button';

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Наш сервис</h2>
          <p>
           Мы представляем услуги наивысшего качества.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i><img src={d.icon} style={{width:"50px", height:"50"}} alt=""></img></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>                
                </div>
              ))
            : "Загрузка"}
        </div>
        {props.roomsData
        ?props.roomsData.map((d,i)=>(
        <section key={`${d.type}-${i}`} className="section-rooms row" style={{overflow:"hidden"}}>
        
          <div className="root-div-rooms row">
          <div className="section-title">
          <h2>{d.title}</h2>         
          </div>
          <div >
            <img style={{marginLeft:"15px"}} src={d.img[0].smallImage} alt=""></img>
          </div>
          </div>

          <div className="text-services">
          <p className="text-p-services">
          {d.text}
          </p>
          </div>
          <div className="div-but">
          <Button  label={"Забронировать от " + d.total} className="img-services" rounded />
          </div>
        </section>)) : "Загрузка"}
      </div>
    </div>
    
  );
};
