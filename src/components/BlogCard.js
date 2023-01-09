import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard() {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">15 Dec 2022</p>
          <h5 className="title">A beautiful thursday morning renaissance</h5>
          <p className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptatum nostrum perspiciatis sapiente laboriosam. Quis odit quod
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
  );
}
