import React,{useState} from "react";



function Item({ name, category }) {
  const[addToCart, setAddToCart] = useState(false);
 
  function handleAddClick(){
   setAddToCart(addToCart ? false: true);
  }

  return (
    <li className={addToCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddClick}>Add to Cart</button>
    </li>
  );
}

export default Item;