import React from "react";
import Header from "../Parts/Header";
import Slider from "../Parts/Slider";
import FreshStories from "../Parts/FreshStories";
import Footer from "../Parts/Footer";
import TreandingPosts from "../Parts/TreandingPosts";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <TreandingPosts />
      <FreshStories />
      <Footer />
    </>
  );
};

export default Home;
