import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import VideoPopup from "../../common/Modals/VideoPopup";
import BlogSidebar from "./BlogSidebar";
import blogData from "../../../data/blogData.json";

const settings = {
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  fade: false,
  arrows: false,
};

// Function to sort blog posts by most recent date
const sortBlogDataByDate = (data) => {
  return data.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
};

const BlogPost = () => {
  const sliderRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Sort the blog data by most recent date
  const sortedBlogData = sortBlogDataByDate(blogData);

  // Paginate the sorted blog data
  const paginate = (data, page, perPage) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return data.slice(start, end);
  };

  // Get the paginated blog data for the current page
  const paginatedBlogData = paginate(sortedBlogData, currentPage, postsPerPage);

  const totalPosts = sortedBlogData.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="postbox__wrapper mr-40">
                {paginatedBlogData.map((post) => (
                  <article
                    key={post.id}
                    className={`postbox__item format-${post.format} mb-50 transition-3`}
                  >
                    <div className="postbox__thumb w-img">
                      {post.format === "slider" && post.images ? (
                        <div className="postbox__slider swiper-container w-img p-relative">
                          <Slider ref={sliderRef} {...settings}>
                            {post.images.map((image, index) => (
                              <div key={index} className="postbox__slider-item">
                                <img src={image} alt="" />
                              </div>
                            ))}
                          </Slider>
                          <div className="postbox-nav">
                            <button
                              onClick={() => sliderRef.current?.slickNext()}
                              className="postbox-slider-button-next"
                            >
                              <i className="fal fa-angle-right"></i>
                            </button>
                            <button
                              onClick={() => sliderRef.current?.slickPrev()}
                              className="postbox-slider-button-prev"
                            >
                              <i className="fal fa-angle-left"></i>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <Link to={`/blog-details?title=${post.title}`}>
                          <img src={post.image} alt="" />
                        </Link>
                      )}
                    </div>
                    <div className="postbox__content">
                      <div className="postbox__meta mb-25">
                        <span>
                          <Link to={`/blog-details?title=${post.title}`}>
                            <i className="fal fa-user"></i>
                            {post.author}
                          </Link>
                        </span>
                        <span>
                          <i className="fal fa-calendar-day"></i>
                          {post.date}
                        </span>
                        <span>
                          <Link tto={`/blog-details?title=${post.title}`}>
                            <i className="fal fa-comment"></i>
                            {post.commentCount} COMMENT
                          </Link>
                        </span>
                      </div>
                      <h3 className="postbox__title">
                        <Link to={`/blog-details?title=${post.title}`}>{post.title}</Link>
                      </h3>
                      <div className="postbox__text">
                        <p>{post.content}</p>
                      </div>
                      <div className="postbox__read-more">
                        <Link className="tp-btn-border" to={`/blog-details?title=${post.title}`}>
                          read more
                          <span>
                            <svg
                              width="22"
                              height="8"
                              viewBox="0 0 22 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <svg
                              width="22"
                              height="8"
                              viewBox="0 0 22 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
                <div className="basic-pagination">
                  <nav>
                    <ul>
                      <li>
                        {currentPage > 1 && (
                          <Link
                            to="/blog"
                            onClick={() => handlePageChange(currentPage - 1)}
                          >
                            <i className="far fa-long-arrow-left"></i>
                          </Link>
                        )}
                      </li>
                      {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index}>
                          <span
                            className={currentPage === index + 1 ? "current" : ""}
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </span>
                        </li>
                      ))}
                      <li>
                        {currentPage < totalPages && (
                          <Link
                            to="/blog"
                            onClick={() => handlePageChange(currentPage + 1)}
                          >
                            <i className="far fa-long-arrow-right"></i>
                          </Link>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      {paginatedBlogData[0]?.videoId && (
        <VideoPopup
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={paginatedBlogData[0].videoId}
        />
      )}
      {/* video modal end */}
    </>
  );
};

export default BlogPost;
