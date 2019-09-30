import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from "react-ga";
import "./App.css";
import "./index.css";
import axios from "axios";
import Photos from "./components/Photos";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

ReactGA.initialize("UA-148976686-1");
ReactGA.pageview(window.location.pathname + window.location.search);

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
      <Router>
        <Header></Header>
        <Route path="/" exact component={Home} />
        <Route path="/work/#section" component={Home} />
        <Route path="/photos/" component={() => <Photos images={images} />} />
        <Route path="/contact/" component={Contact} />
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
