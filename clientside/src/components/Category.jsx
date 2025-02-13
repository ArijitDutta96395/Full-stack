import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./category.css"; // Import the new CSS file



const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let response = await axios.get("http://localhost:8000/auth/category");
        setCategory(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  return (
    <div className="category-container">
      {/* Centered Add Category Button */}
      <div className="add-category-btn">
        <Link to="/dashboard/add_category">+ Add Category</Link>
      </div>

      <div className="table-responsive">
        <table className="category-table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {category.length > 0 ? (
              category.map((e) => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="no-category" colSpan="1">
                  No categories available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Category;

