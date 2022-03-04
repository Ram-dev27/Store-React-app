import React from "react";
import image from "../Assets/item-3.jpeg";
import './cards.css';
import Button from "react-bootstrap/Button";


const Cards = ({ data }) => {
  console.table(data);
  return (
    <div className="container">
      <div className="cards">
        <h1>Title</h1>
        <img src={image} alt="London"></img>
        <h3>category</h3>
        <p>
          Entrypoint main 1.46 MiB (1.54 MiB) = static/js/bundle.js 1.46 MiB
          main.4508e0a613cf35a87866.hot-update.js 3.42 KiB 3 auxiliary assets
        </p>
        <Button variant="primary">
            Add cart
        </Button>
      </div>
    </div>
  );
};

export default Cards;
