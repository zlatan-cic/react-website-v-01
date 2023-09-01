import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineAppstore,
} from "react-icons/ai";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="site-head">
        <div className="container">
          <div className="site-logo-social">
            <div className="logo">
              <AiOutlineAppstore className="logo-icon" /> Logo
            </div>
            <div className="social">
              <div className="socila-items">
                <a href="#">
                  <AiOutlineFacebook className="social-icons" />
                </a>
                <a href="#">
                  <AiOutlineTwitter className="social-icons" />
                </a>
                <a href="#">
                  <AiFillLinkedin className="social-icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="site-banner">
            <h1 className="title">Blog Title</h1>
            <p className="description">Short description of your blog.</p>
          </div>

          <nav className="site-nav">
            <div className="site-nav-left">
              <p className="page">Home</p>
              <p className="page">Tag</p>
              <p className="page">Author</p>
              <p className="page">Contact</p>
            </div>
            <div className="site-nav-right">
              <a href="/" className="btn-about_us">
                About us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Hero;
