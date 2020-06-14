import React from "react";
import Header from "../Parts/Header";
import Footer from "../Parts/Footer";
import Sidebar from "../Parts/Sidebar";
import Pagination from "../Parts/Pagination";
import Posts from "../Parts/Posts";

const Category = () => {
  return (
    <>
      <Header />
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts />
            <Sidebar />
            <Pagination />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;
