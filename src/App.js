import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import "tachyons";

import Navigation from "./components/navigation";
import Logo from "./components/logo";
import UrlLinkForm from "./components/urlLinkFrom";
//import Rank from "./components/rank";
import ImageBox from "./components/imageBox";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "46e18f6e2a134055ad2f5c47087f5cb0"
});

const particlesParams = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  state = {
    input: "",
    imageUrl: "",
    faceBox: []
  };

  calculateFaceBorders = data => {
    const image = document.getElementById("image");
    const width = Number(image.width);
    const height = Number(image.height);
    const faces = data.outputs[0].data.regions;
    let borders = [];
    faces.map(item => {
      const border = {
        left_column: width * item.region_info.bounding_box.left_col,
        right_column: width - width * item.region_info.bounding_box.right_col,
        top_row: height * item.region_info.bounding_box.top_row,
        bottom_row: height - height * item.region_info.bounding_box.bottom_row
      };
      borders = [...borders, border];
      return borders;
    });
    this.setState({ faceBox: borders });
  };

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmitPress = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.setBorders(this.calculateFaceBorders(response));
      });
  };

  render() {
    return (
      <div className="App">
        <Particles params={particlesParams} className="particles" />
        <div className="header mt3">
          <Logo />
          <Navigation />
        </div>
        <UrlLinkForm
          onChange={this.handleInputChange}
          onPress={this.handleSubmitPress}
        />
        <ImageBox imageUrl={this.state.imageUrl} faceBox={this.state.faceBox} />
      </div>
    );
  }
}

export default App;
