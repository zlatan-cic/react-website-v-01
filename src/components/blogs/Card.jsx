import React from "react";
import './Card.css'

const Card = ({ blogData }) => {
  return (
    <>
      <a href="#" className="post-card">
        <header className="post-header-card">
          <img src={blogData.img} alt="image" className="post-image-card"></img>
          <h2 className="post-title-card">{ blogData.title }</h2>
        </header>
        <section className="post-text-card">{blogData.text}</section>
        <footer className="post-footer-card">
          <div className="post-card-left">{blogData.author}</div>
          <div className="post-card-right">{blogData.time}</div>
        </footer>
      </a>
    </>
  );
};

export default Card;

