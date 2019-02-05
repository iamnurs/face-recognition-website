import React from "react";
import Tilt from "react-tilt";
import logo from "./new_image_bio_face_s.png";

const Logo = () => {
  return (
    <div className=" ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={styles.container}
      >
        <div className="Tilt-inner">
          <img alt="logo" src={logo} />
        </div>
      </Tilt>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150
  }
};

export default Logo;
