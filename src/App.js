import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import axios from "axios";
import Photos from "./components/Photos";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";

function App() {
  const [images, setImages] = useState();
  const accessKey =
    "d5aeca2e0d9de8c9724b8ccffa6e1c7f0b9eefd73acc42ce1d64be3b421f8ad9";

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/users/hakantas212/photos/?&per_page=50&client_id=${accessKey}`
      )
      .then(res => {
        setImages(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div>
        <Router>
          <Header></Header>
          <Route path="/" exact component={Home} />
          <Route path="/work/#section" component={Home} />
          <Route path="/photos/" component={() => <Photos images={images} />} />
          <Route path="/contact/" component={Contact} />
        </Router>
      </div>
    </div>
  );
}

export default App;
