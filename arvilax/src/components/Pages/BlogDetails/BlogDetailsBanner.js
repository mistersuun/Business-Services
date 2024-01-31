import React from "react";
import { Link } from "react-router-dom";
import blog_data from "../../../data/blogData.json"

const BlogDetailsBanner = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  const project = blog_data.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );
  return (
    <>
      <section
        className="breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay blog_details_banner"
        // data-background="assets/img/breadcrumb/breadcrumb-bg-2.jpg"
        style={{
          backgroundImage: `url("assets/img/breadcrumb/breadcrumb-bg-2.jpg")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-1">
                <h3 className="breadcrumb__title">{project.title}</h3>
                <div className="breadcrumb__list">
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                  <span className="dvdr">:</span>
                  <span>Blog & Article</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsBanner;
