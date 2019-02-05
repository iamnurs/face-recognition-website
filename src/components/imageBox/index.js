import React from "react";

import "./index.css";

const ImageBox = ({ imageUrl, faceBox }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="image" alt="" src={imageUrl} width="500px" height="auto" />
        {faceBox.map(box => (
          <div
            className="border"
            style={{
              top: box.top_row,
              bottom: box.bottom_row,
              left: box.left_column,
              right: box.right_column
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageBox;
