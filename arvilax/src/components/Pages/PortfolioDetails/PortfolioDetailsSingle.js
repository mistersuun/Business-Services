import React, { useState, useEffect } from "react";
import portfolio_data from "../../../data/projectData.json";

const PortfolioDetailsSingle = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");

  const [currentProject, setCurrentProject] = useState(null);

  // Find the current project's index based on the title
  const currentIndex = currentProject
    ? portfolio_data.findIndex(
        (item) => item.title.toLowerCase() === currentProject.title.toLowerCase()
      )
    : -1;

    const handleNextClick = () => {
      const nextIndex = (currentIndex + 1) % portfolio_data.length;
      const nextProject = portfolio_data[nextIndex];
      setCurrentProject(nextProject);
    };

    const handleBackClick = () => {
      const previousIndex =
        (currentIndex - 1 + portfolio_data.length) % portfolio_data.length;
      const previousProject = portfolio_data[previousIndex];
      setCurrentProject(previousProject);
    };
  
    useEffect(() => {
      // currentize the current project based on the URL parameter
      const currentProject = portfolio_data.find(
        (item) => item.title.toLowerCase() === title.toLowerCase()
      );
      setCurrentProject(currentProject);
    }, [title]);

  return (
    <>
      {currentProject && (
        <div className="pj-detials-page pt-110 pb-140">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="pj-details-hero-img w-img p-relative">
                  <img src={currentProject.img} alt="" />
                  <div className="pj-detials-meta-box white-bg">
                    <h3 className="pj-details-meta-title">{currentProject.category}</h3>
                    <div className="pj-detials-meta-info">
                      <span>
                        <b>Client:</b>{currentProject.client}
                      </span>
                      <span>
                        <b>Date:</b>
                        <a href="#"> {currentProject.date}</a>
                      </span>
                      <span>
                        <b>Category:</b>
                        <a href="#"> {currentProject.category}</a>
                      </span>
                      <span className="pj-share-icons">
                        <b>Share:</b>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="pj-detials-contact pt-85">
                  <h3 className="pj-detials-title">Details About Project</h3>
                  <p>
                    {currentProject.text1}
                  </p>
                  <p>
                    {currentProject.text2}
                  </p>
                  <p>
                    {currentProject.text3}
                  </p>
                  <p>
                    {currentProject.text4}
                  </p>
                  <div className="pj-detials-pagenation d-flex justify-content-between">
                    <div className="pj-detials-pagenation-left">
                      <span>
                        {currentIndex > 0 && (
                          <a href="#" onClick={handleBackClick}>
                            <svg
                              width="39"
                              height="16"
                              viewBox="0 0 39 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM39 7L1 7V9L39 9V7Z" fill="currentColor"
                              />
                            </svg>
                            Back
                          </a>
                        )}
                      </span>
                    </div>
                    <div className="pj-detials-pagenation-right">
                    <span>
                      {currentIndex < portfolio_data.length - 1 && (
                        <a href="#" onClick={handleNextClick}>
                          Next
                          <svg
                            width="43"
                            height="16"
                            viewBox="0 0 43 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M42.7071 8.70711C43.0976 8.31659 43.0976 7.68342 42.7071 7.2929L36.3431 0.928935C35.9526 0.538411 35.3195 0.538411 34.9289 0.928935C34.5384 1.31946 34.5384 1.95262 34.9289 2.34315L40.5858 8L34.9289 13.6569C34.5384 14.0474 34.5384 14.6805 34.9289 15.0711C35.3195 15.4616 35.9526 15.4616 36.3431 15.0711L42.7071 8.70711ZM-8.74228e-08 9L42 9L42 7L8.74228e-08 7L-8.74228e-08 9Z"
                              fill="currentColor"
                            />
                          </svg>{" "}
                        </a>
                      )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioDetailsSingle;
