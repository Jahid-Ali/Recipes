import React, { useState } from "react";
import "../App.css";
import Popup from "./Popup";

const Recipes = ({ items }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const closePopup = () => {
    setShowPopUp(false);
  };

  const showPopup = () => {
    setShowPopUp(true);
  };

  return (
    <div className="recipe">
      <img
        className="recipe__img"
        src={items["recipe"]["image"]}
        alt="recipiesimg"
      />
      <p className="recipe__name">
        {items.recipe.label}
      </p>
      <p className="ingredients" onClick={showPopup}>
        Ingredients
      </p>

      <Popup
        visible={showPopUp}
        onClose={closePopup}
        // imgSrc={getImage}
        title={items.recipe.label}
        desc={items.recipe.ingredients}
      />
    </div>
  );
};

export default Recipes;
