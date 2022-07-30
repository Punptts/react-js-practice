import React from "react";

function blogCard(props) {
  return (
    <div className="blog-card">
      <div className="image-container">
        <img src={props.image} className="card-img" />
      </div>
      <div className="card-detail">
        <h2 className="text-wrapper">{props.title}</h2>
        <p className="text-wrapper">{props.desc}</p>
      </div>
    </div>
  );
}

export default blogCard;
