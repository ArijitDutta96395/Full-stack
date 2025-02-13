import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    if (!category.trim()) {
      setError("Category name cannot be empty.");
      return;
    }

    try {
      let result = await axios.post("http://localhost:8000/auth/add_category", {
        category,
      });

      if (result.data.status) {
        navigate("/dashboard/category");
      } else {
        setError(result.data.Error);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="p-4 rounded border shadow-lg bg-white w-50">
        <h2 className="text-center mb-3">Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="category">
              <strong>Category Name:</strong>
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter Category"
              className="form-control rounded-0 shadow-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            {error && <small className="text-danger">{error}</small>}
          </div>

          <button className="btn btn-success w-100 rounded-0" type="submit">
            + Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
