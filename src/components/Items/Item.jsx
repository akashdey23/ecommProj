import React from "react";
import './Item.css';

const Item = ({id,name,image,new_price,old_price}) => {
  return (
    <div className="item" id={id}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

export default Item;
