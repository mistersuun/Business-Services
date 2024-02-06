import React, { useState, useEffect }  from 'react';
import { Route, Routes } from "react-router-dom";
// internal
import BackToTop from '../components/BackToTop';
//import AnimateMouse from '../components/common/AnimateMouse';
import ContextProvider from '../components/context/ContextProvider';
import Home from '../components/Home/Home';
//import HomeThree from '../components/HomeThree/HomeThree';
import HomeTwo from '../components/HomeTwo/HomeTwo';
import About from '../components/Pages/About/About';
import Blog from '../components/Pages/Blog/Blog';
import BlogDetails from '../components/Pages/BlogDetails/BlogDetails';
import ContactUs from '../components/Pages/ContactUs/ContactUs';
import FAQ from '../components/Pages/FAQ/FAQ';
import Portfolio from '../components/Pages/Portfolio/Portfolio';
import PortfolioDetails from '../components/Pages/PortfolioDetails/PortfolioDetails';
import Price from '../components/Pages/Price/Price';
import Service from '../components/Pages/Service/Service';
import ServiceDetails from '../components/Pages/ServiceDetails/ServiceDetails';
import TeamDetails from '../components/Pages/TeamDetails/TeamDetails';
import NewBlogPost from '../components/Pages/Blog/NewBlogPage';
import blogData from '../data/blogData.json'
import MyComponent from '../components/common/Calendly';
//import TeamPage from '../components/Pages/TeamPage/TeamPage';

//Unused
//        <Route path="/team" element={<TeamPage/>} />
//        <Route path="/home-3" element={<HomeThree />} />

const AppNavigation = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the JSON file
    setArticles(blogData);
  }, []);

  const addPost = (newPost) => {
    // Add the new post to the articles
    setArticles((prevArticles) => [...prevArticles, { ...newPost, id: prevArticles.length + 1 }]);
  };

  return (
    <ContextProvider>
      <Routes>
        <Route path="/home-2" element={<Home />} />
        <Route path="/" element={<HomeTwo />} />
        <Route path="/about" element={<About />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/services" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/price" element={<Price/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/new-blog-post" element={<NewBlogPost onAddPost={addPost} />} />
        </Routes>
      <BackToTop/>
    </ContextProvider>
  );
};

export default AppNavigation;