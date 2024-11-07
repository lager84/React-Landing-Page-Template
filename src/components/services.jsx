//import {useRef, useState} from "react";
import React  from "react";
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";


export const Services = (props) => {

  //const [full , setFull] = useState(false);
  //const galleria = useRef(null);
 
  const responsiveOptions = [
      {
          breakpoint: '991px',
          numVisible: 4
      },
      {
          breakpoint: '767px',
          numVisible: 3
      },
      {
          breakpoint: '575px',
          numVisible: 1
      }
  ];



  const itemTemplate = (item) => {
      return <img src={item.largeImage} alt={item.alt} style={{  width: '100%' , display: 'block', height:'900px' , objectFit:'cover' }} />;
  }

  const thumbnailTemplate = (item) => {
      return <img src={item.smallImage} alt={item.alt} style={{ display: 'block' }} />;
  }


  

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
          <div style={{marginBottom:"40px"}}>
            {/* <img style={{marginLeft:"15px", maxWidth:"400px" }} src={d.img[0].smallImage} alt=""></img> */}
            <Galleria   pt={{
                nextItemButton: (state) => ({
                  style: { color: "#e44d26", width: "8rem", height: "8rem" },
                }),
                previousItemButton: (state) => ({
                  style: { color: "#e44d26", width: "8rem", height: "8rem" },
                }),
                nextItemIcon: (state) => ({
                  style: { color: "#e44d26", width: "4rem", height: "4rem" },
                }),
                previousItemIcon: (state) => ({
                  style: { color: "#e44d26", width: "4rem", height: "4rem" },
                }),
                nextThumbnailButton: (state) => ({
                  style: { color: "#e44d26", width: "4rem", height: "4rem" },
                }),
                previousThumbnailButton: (state) => ({
                  style: { color: "#e44d26", width: "4rem", height: "4rem" },
                }),
                nextThumbnailIcon: (state) => ({
                  style: { color: "#e44d26", width: "2rem", height: "2rem" },
                }),
                previousThumbnailIcon: (state) => ({
                  style: { color: "#e44d26", width: "2rem", height: "2rem" },
                }),
              }} autoPlay transitionInterval={2000} value={d.img} responsiveOptions={responsiveOptions} numVisible={5} circular  className="galleryRooms" style={{marginLeft:"15px"}}
              // fullScreen={full}
            showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
          </div>
          {d.video_1?
          <div  className="divVideo">
          <video src={d.video_1} controls type="video/mp4" style={{ maxHeight:"600px"}}></video>
          <video src={d.video_2} controls type="video/mp4" style={{ maxHeight:"600px"}}></video>
          </div> : ""
          }
          </div>
          <div className="text-services">
          <p className="text-p-services">
          {d.text}
          </p>
          </div>          
          <div className="div-but">
          <Button  label={"Забронировать" + d.total} className="img-services" rounded />
          </div>
        </section>)): "Загрузка"}
      </div>
    </div>
    
  );
};
