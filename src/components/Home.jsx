import React, { Fragment } from "react";
import Header from "./1-header/Header";
import HeroSlider from "./2-hero-slider/HeroSlider";
import PopularMenu from "./3-popular-menu/PopularMenu";
import ChooseUs from "./4-choose-us/ChooseUs";
import Menu from "./5-menu/Menu";
import Testimonials from "./6-testimonials/Testimonials";
import Download from "./7-download-section/Download";
import Footer from "./8-footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <Menu />
      <Testimonials />
      <Download />
      <Footer />
    </Fragment>
  );
};

export default Home;
