import React from "react";
import { Galleria } from "primereact/galleria";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";



export const About = (props) => {

  const itemTemplate = (item) => {
    return <img src={item} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
}

const thumbnailTemplate = (item) => {
    return <img src={item} alt={item.alt} style={{ display: 'block' }} />;
}

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            {props.data
                      ?  
                      <Galleria 
                      pt={{
                        nextItemButton: (state) => ({
                          style: { color: "#e44d26", width: "4rem", height: "8rem" },
                        }),
                        previousItemButton: (state) => ({
                          style: { color: "#e44d26", width: "4rem", height: "8rem" },
                        }),
                        nextItemIcon: (state) => ({
                          style: { color: "#e44d26", width: "2rem", height: "4rem" },
                        }),
                        previousItemIcon: (state) => ({
                          style: { color: "#e44d26", width: "2rem", height: "4rem" },
                        }),
                      }}
                      value={props.data.Gallery} numVisible={5} circular style={{ maxWidth: '520px' }} 
                          showItemNavigators showItemNavigatorsOnHover showIndicators autoPlay transitionInterval={2000} 
                          showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
                  
                      : "loading"}        
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>База отдыха</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Почему выбирают именно нас?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div style={{paddingTop:"150px"}}>
                <video src="img/about/IMG_5915.mp4" type="video/MP4" controls style={{maxWidth:"500px", width:"100%" , height:"350px" , objectFit:"cover" , zIndex:"-100"}}></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
