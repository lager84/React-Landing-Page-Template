import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Galleria } from "primereact/galleria";

export const Relaxation = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleria = useRef(null);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.largeImage}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img src={item.smallImage} alt={item.alt} style={{ display: "block" , maxWidth: "100px",
        maxHeight: "100px", }} />
    );
  };

  return (
    <div id="relaxation" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Развлечения</h2>
          <p>
            Чем заняться в Архызе?
          </p>
        </div>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <section id="row_active" style={{ flexBasis: "45%" }}>
          <h3>Активный отдых</h3>
          {props.data
            ? props.data
                .filter((i) => i.type === "active")
                .map((d, i) => (
                  <div key={`${d.title}-${i}`} className="card">
                  <Accordion multiple activeIndex={d.activeIndex}>
                    <AccordionTab
                      header={d.title}
                      style={{ fontSize: "18px" }}
                    >
                      <img
                        src={d.img_title}
                        alt=""
                        style={{ maxWidth: "100%", height: "auto" }}
                      ></img>

                      <Galleria
                        pt={{
                          closeButton: (state) => ({
                            style: {
                              color: "#e44d26",
                              width: "8rem",
                              height: "8rem",
                            },
                          }),
                          closeIcon: (state) => ({
                            style: {
                              color: "#e44d26",
                              width: "3rem",
                              height: "3rem",
                            },
                          }),
                          nextItemButton: (state) => ({
                            style: {
                              color: "#e44d26",
                              width: "8rem",
                              height: "8rem",
                            },
                          }),
                          previousItemButton: (state) => ({
                            style: {
                              color: "#e44d26",
                              width: "8rem",
                              height: "8rem",
                            },
                          }),
                          nextItemIcon: (state) => ({
                            style: {
                              color: "#e44d26",
                              width: "4rem",
                              height: "4rem",
                            },
                          }),
                          previousItemIcon: (state) => ({
                            style: {
                              color: "#e44d26",
                              width: "4rem",
                              height: "4rem",
                            },
                          }),
                        }}
                        ref={galleria}
                        value={d.img}
                        numVisible={7}
                        style={{ maxWidth: "850px" }}
                        activeIndex={activeIndex}
                        onItemChange={(e) => setActiveIndex(e.index)}
                        circular
                        fullScreen
                        showItemNavigators
                        showThumbnailNavigators={false}
                        showThumbnails={true}
                        item={itemTemplate}
                        thumbnail={thumbnailTemplate}
                      />

                      <div
                        className="grid"
                        style={{
                          maxWidth: "500px",
                          display: "flex",
                          gap: "5px",
                          margin: "5px 0px 5px 0px",
                          justifyContent: "center",
                        }}
                      >
                        {d.img &&
                          d.img.map((image, index) => {
                            let imgEl = (
                              <img
                                src={image.smallImage}
                                alt={image.alt}
                                style={{
                                  cursor: "pointer",
                                  maxWidth: "100px",
                                  maxHeight: "100px",
                                }}
                                onClick={() => {
                                  setActiveIndex(index);
                                  galleria.current.show();
                                }}
                              />
                            );
                            return (
                              <div className="col-3" key={index}>
                                {imgEl}
                              </div>
                            );
                          })}
                      </div>

                      <p className="m-0" style={{textAlign:'left', marginTop:'25px' , marginBottom:'25px'}}>{d.text}</p>
                    </AccordionTab>
                  </Accordion>
                </div>
                ))
            : "loading"}
        </section>
        <section id="row_eco" style={{ flexBasis: "45%" }}>
          <h3>Экотуризм</h3>
          {props.data
            ? props.data
                .filter((i) => i.type === "eco")
                .map((d, i) => (
                  <div key={`${d.title}-${i}`} className="card">
                    <Accordion multiple activeIndex={d.activeIndex}>
                      <AccordionTab
                        header={d.title}
                        style={{ fontSize: "18px" }}
                      >
                        <img
                          src={d.img_title}
                          alt=""
                          style={{ maxWidth: "100%", height: "auto" }}
                        ></img>

                        <Galleria
                          pt={{
                            closeButton: (state) => ({
                              style: {
                                color: "#e44d26",
                                width: "8rem",
                                height: "8rem",
                              },
                            }),
                            closeIcon: (state) => ({
                              style: {
                                color: "#e44d26",
                                width: "3rem",
                                height: "3rem",
                              },
                            }),
                            nextItemButton: (state) => ({
                              style: {
                                color: "#e44d26",
                                width: "8rem",
                                height: "8rem",
                              },
                            }),
                            previousItemButton: (state) => ({
                              style: {
                                color: "#e44d26",
                                width: "8rem",
                                height: "8rem",
                              },
                            }),
                            nextItemIcon: (state) => ({
                              style: {
                                color: "#e44d26",
                                width: "4rem",
                                height: "4rem",
                              },
                            }),
                            previousItemIcon: (state) => ({
                              style: {
                                color: "#e44d26",
                                width: "4rem",
                                height: "4rem",
                              },
                            }),
                          }}
                          ref={galleria}
                          value={d.img}
                          numVisible={7}
                          style={{ maxWidth: "850px" }}
                          activeIndex={activeIndex}
                          onItemChange={(e) => setActiveIndex(e.index)}
                          circular
                          fullScreen
                          showItemNavigators
                          showThumbnailNavigators={false}
                          showThumbnails={true}
                          item={itemTemplate}
                          thumbnail={thumbnailTemplate}
                        />

                        <div
                          className="grid"
                          style={{
                            maxWidth: "500px",
                            display: "flex",
                            gap: "5px",
                            margin: "5px 0px 5px 0px",
                            justifyContent: "center",
                          }}
                        >
                          {d.img &&
                            d.img.map((image, index) => {
                              let imgEl = (
                                <img
                                  src={image.smallImage}
                                  alt={image.alt}
                                  style={{
                                    cursor: "pointer",
                                    maxWidth: "100px",
                                    maxHeight: "100px",
                                  }}
                                  onClick={() => {
                                    setActiveIndex(index);
                                    galleria.current.show();
                                  }}
                                />
                              );
                              return (
                                <div className="col-3" key={index}>
                                  {imgEl}
                                </div>
                              );
                            })}
                        </div>

                        <p className="m-0" style={{textAlign:'left', marginTop:'25px' , marginBottom:'25px'}}>{d.text}</p>
                      </AccordionTab>
                    </Accordion>
                  </div>
                ))
            : "loading"}
        </section>
      </div>
    </div>
  );
};
