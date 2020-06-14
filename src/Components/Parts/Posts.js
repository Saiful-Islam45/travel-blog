import React from "react";
import PostItem from "./PostItem";
import Breadcrumb from "./Breadcrumb";

const Posts = () => {
  return (
    <div className="col-lg-8">
      <div className="blog-box list-style">
        <Breadcrumb />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
};

export default Posts;
