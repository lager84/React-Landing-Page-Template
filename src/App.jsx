import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
//import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { News } from "./components/news";
import { Relaxation } from "./components/relaxation";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <News data={landingPageData.News} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery} />
      <Services data={landingPageData.Services} roomsData={landingPageData.Rooms} />
      <Relaxation data={landingPageData.Relaxation} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
