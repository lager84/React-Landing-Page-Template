import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { Galleria } from "primereact/galleria";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { WINTER, SPRING, SUMMER, AUTUMN, names } from "../data/sezoneName";
import { TabMenu } from "primereact/tabmenu";



export const Gallery = (props) => {

  const [images, setImages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const galleria = useRef(null);
  const [currentTab, setCurrentTab] = useState();
  const items = [
    { label: names[WINTER], icon:<img style={{marginRight:"5px"}} src="img/portfolio/WINTER.png" alt="Зима"></img>},
    { label: names[SPRING], icon:<img style={{marginRight:"5px"}} src="img/portfolio/SPRING.png" alt="Весна"></img> },
    { label: names[SUMMER], icon:<img style={{marginRight:"5px"}} src="img/portfolio/SUMMER.png" alt="Лето"></img> },
    { label: names[AUTUMN], icon:<img style={{marginRight:"5px"}} src="img/portfolio/AUTUMN.png" alt="Осень"></img> },
  ];


  const getSesone = useCallback(() => {
  const date = new Date();
  let monthNumber = date.getMonth() + 1;
  var sesoneTab;
  if(monthNumber === 12 || monthNumber === 1 || monthNumber === 2)
  {
       sesoneTab = 0
  }
  else if(monthNumber === 3 || monthNumber === 4 || monthNumber === 5)
    {
       sesoneTab = 1
    }
    else if(monthNumber === 6 || monthNumber === 7 || monthNumber === 8)
      {
         sesoneTab = 2
      }else
      {
         sesoneTab = 3
      }
  return sesoneTab
  },[])

 



  const [activeIndexTab, setActiveIndexTab] = useState(getSesone());



  useEffect(() => {
    setImages(props.data);
    if (activeIndexTab === 0) {
      setCurrentTab(WINTER);
    }
    if (activeIndexTab === 1) {
      setCurrentTab(SPRING);
    }
    if (activeIndexTab === 2) {
      setCurrentTab(SUMMER);
    }
    if (activeIndexTab === 3) {
      setCurrentTab(AUTUMN);
    }
  }, [props.data, activeIndexTab]);

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
      <img src={item.smallImage} alt={item.alt} style={{ display: "block" }} />
    );
  };

  const tabsGroup = useMemo(() => {
    let fdate = {};
    fdate[WINTER] = images?.filter((i) => i.type === WINTER);
    fdate[SPRING] = images?.filter((i) => i.type === SPRING);
    fdate[SUMMER] = images?.filter((i) => i.type === SUMMER);
    fdate[AUTUMN] = images?.filter((i) => i.type === AUTUMN);
    return fdate;
  }, [images]);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Фотогалерея</h2>
          <p>Самый лучший отдых у нас.</p>
        </div>
        <div className="tab-menu row">
        <TabMenu className="tab-item"
          model={items}
          activeIndex={activeIndexTab}
          onTabChange={(e) => setActiveIndexTab(e.index)}
        />
        </div>
        <div className="row">
          {props.data ? (
            <Galleria
              pt={{
                closeButton: (state) => ({
                  style: { color: "#e44d26", width: "8rem", height: "8rem" },
                }),
                closeIcon: (state) => ({
                  style: { color: "#e44d26", width: "3rem", height: "3rem" },
                }),
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
              }}
              ref={galleria}
              value={tabsGroup[currentTab]}
              numVisible={7}
              style={{ maxWidth: "850px" }}
              activeIndex={activeIndex}
              onItemChange={(e) => setActiveIndex(e.index)}
              circular
              fullScreen
              showItemNavigators
              showThumbnails={false}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
            />
          ) : (
            "Загрузка..."
          )}

          <div className="portfolio-items row">
            {images &&
              tabsGroup[currentTab].map((image, index) => {
                let imgEl = (
                  <img
                    src={image.smallImage}
                    alt={image.title}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setActiveIndex(index);
                      galleria.current.show();
                    }}
                  />
                );
                return (
                  <div className="col-sm-6 col-md-4 col-lg-4" key={index}>
                    {imgEl}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
