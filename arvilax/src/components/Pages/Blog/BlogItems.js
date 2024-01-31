import React from "react";
import { Link } from "react-router-dom";
import blog_data from "../../../data/blogData.json"
// portfolio items

const BlogItems = () => {
  return (
    <>
      <div className="project-page-list pt-140 pb-90">
        <div className="container">
          <div className="row">
            {blog_data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-12">
              <div className="pj-list-item mb-50">
                <div className="pj-list__img">
                  <Link to={`/portfolio-details?title=${item.title}`}>
                    <img src={item.img} alt="" style={{ cursor: "pointer" }} />
                  </Link>
                </div>
                <span>
                  <a href="#">{item.category}</a>
                </span>
                <h4 className="pj-list__title">
                  <Link to={`/portfolio-details?title=${item.title}`}>{item.title}</Link>
                </h4>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItems;
