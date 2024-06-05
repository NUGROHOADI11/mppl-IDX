import { useEffect, useState } from "react";
import { products } from "../models/products";
import { useNavigate } from 'react-router-dom';
import "../assets/styles/style.css";

const Category = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(products);

  let filters = ["Bread", "Cakes", "Cookies", "Donut", "Pastry", "Cupcake"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = products.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...products]);
    }
  };

  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate('/detail', { state: { item } });
    console.log(item)
  };

  return (
    <div>
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${selectedFilters?.includes(category) ? "active" : ""
              }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container" >
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} onClick={() => handleClick(item)} className="item">
            <img src={item.image} alt={item.name} style={{ width: '150px', height: '150px', borderRadius: 5 }} />
            <p className="mb-0">{item.name}</p>
            <p className="category mb-0">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
