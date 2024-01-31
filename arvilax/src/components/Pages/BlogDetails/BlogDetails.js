import React from "react";
import Menu from "../../common/Menu/Menu";
import BlogDetailsBanner from "./BlogDetailsBanner";
import BlogDetailsPost from "./BlogDetailsPost";
import FooterTwo from "../../common/Footer/FooterTwo";

const BlogDetails = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <BlogDetailsBanner />
      <BlogDetailsPost />
      <FooterTwo />
    </>
  );
};

export default BlogDetails;
