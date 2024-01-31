import React from "react";
import Menu from "../../common/Menu/Menu";
import BlogBanner from "./BlogBanner";
import BlogPost from "./BlogPost";
import FooterTwo from "../../common/Footer/FooterTwo";

const Blog = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <BlogBanner />
      <BlogPost />
      <FooterTwo/>
    </>
  );
};

export default Blog;
