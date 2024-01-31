// BlogSidebar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../../../data/blogData.json";

const BlogSidebar = () => {
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter blog data based on search input
  const filteredPosts = blogData.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to get the three most recent posts
  const getLatestPosts = () => {
    const sortedPosts = filteredPosts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

    return sortedPosts.slice(0, 3);
  };

   // Reload the page
   const handlePostClick = (post) => {
    // Wait for 2000ms (2 seconds)
    setTimeout(() => {
      // Reload the page after the delay
      window.location.reload();
    }, 800);
  };

  // Get the three most recent posts
  const latestPosts = getLatestPosts();

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Search Here</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form onSubmit={e => e.preventDefault()}>
              <div className="sidebar__search-input-2">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {latestPosts.map((post) => (
              <Link key={post.id} to={`/blog-details?title=${post.title}`} className="rc__post mb-20 d-flex align-items-center"
              onClick={() => handlePostClick(post)}
              >
                <div className="rc__post-thumb mr-20">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta">
                    <span>{post.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
