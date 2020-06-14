import React from "react";
import Comment from "../Parts/Comment";
import PostDec from "../Parts/PostDec";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";

const Single = () => {
  return (
    <>
      <Header />
      <div className="single-post no-sidebar">
        <PostDec />
        <Comment />
      </div>
      <Footer />
    </>
  );
};

export default Single;
