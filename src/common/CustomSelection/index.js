import React, { useState } from "react";
import "./CustomSelection.css";
function CustomSelection() {
  const [selectedOption, setSelectedOption] = useState(""); // State to manage the selected option

  // Function to handle option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="custom-select-wrapper d-flex gap-2">
      <div className="mt-2">Sorting</div>
      <select
        className="custom-select "
        aria-label="Default select example"
        value={selectedOption} // Set the selected value
        onChange={handleOptionChange} // Handle change event
      >
        <option value="">Low to High</option>
        <option value="1">High to Low</option>
        <option value="2">50 to 100</option>
        <option value="3">101 to 200</option>
        <option value="4">201 to 500</option>
        <option value="5">500 to Above</option>
      </select>
    </div>
  );
}

export default CustomSelection;
