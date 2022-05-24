import React from "react";

function Category(props) {
  return (
    <div className="item" id="category">
      <h5>CATEGORY</h5>
      <select name="task" id="task" value={props.val} onChange={props.onChangeEvent}>
        <option value="">Choose a category</option>
        <option value="Work">Work</option>
        <option value="School">School</option>
        <option value="Home">Home</option>
        <option value="Personel">Personel</option>
      </select>
    </div>
  );
}

export default Category;