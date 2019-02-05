import React from "react";
import "./index.css";

const UrlLinkForm = ({ onChange, onPress }) => {
  return (
    <div>
      <p className="f3">This website can detect faces in your images</p>
      <div className="center">
        <div className="pa4 br3 shadow-5 form center">
          <input
            type="text"
            placeholder="Paste here URL of the image..."
            className="f4 pa2 w-75 center"
            onChange={onChange}
          />
          <button
            className="w-25 grow link ph3 pv2 dib white bg-light-purple center"
            onClick={onPress}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrlLinkForm;
