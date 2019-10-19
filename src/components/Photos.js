import React, { useState } from "react";
import "./photos.css";
import styled from "styled-components";

const Photos = ({ images }) => {
  const [hovered, setHovered] = useState(false);
  const [image, setImage] = useState("");

  const Dialog = styled.div`
    position: fixed;
    overflow: scroll;
    object-fit: contain;
    width: 90%;
    height: 100%;
    z-index: 9999;
  `;

  return (
    <section>
      {images &&
        images.map(img => (
          <li key={img.id}>
            <img
              onClick={() => {
                setHovered(true);
                setImage(img.urls.raw);
              }}
              className="grid__item"
              alt={img.alt_description}
              src={img.urls.regular}
            />
          </li>
        ))}
      {hovered && (
        <Dialog>
          <img
            className="popup"
            src={image}
            alt="test"
            onClick={() => {
              setHovered(false);
            }}
          />
        </Dialog>
      )}
    </section>
  );
};

export default Photos;
