import React from "react";

const CustomImage = (props) => {
  const { id = "", style, className, src } = props;
  return (
    <div className="w-100 h-100 br3 overflow-hidden">
      <img
        loading="lazy"
        className={`w-100 h-100 ${className}`}
        width="auto"
        height="auto"
        src={src}
        // src="https://i5.walmartimages.com/dfw/4ff9c6c9-d64c/k2-_68f65387-046d-416a-a3ed-5bbe5367b9b1.v1.jpg?odnHeight=658&amp;odnWidth=658&amp;odnBg=&amp;odnDynImageQuality=70"
        alt=""
        id={id}
        style={style}
      />
    </div>
  );
};

export default CustomImage;
