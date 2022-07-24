import React from "react";

const SingleFeatures = (props) => {
  const { title, icon, text, classs } = props;

  return (
    <div className="single__feature">
      <span>
        <i class={icon}></i>
      </span>
      <h6>{title}</h6>
      <p>{text}</p>
    </div>
  );
};

export default SingleFeatures;
