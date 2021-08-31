import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items,setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      if (search){
        return item.name.includes(search);
      }
      else {
        return true;
      }
    } else {
      if (search){
        return item.category === selectedCategory &&  item.name.includes(search);
      }
      else {
        return item.category === selectedCategory;
      }
    }
  });

  function handleItemFormSubmit(newItem) {
    setItems([...items,newItem])
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={handleItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;