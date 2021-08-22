import React, { useState } from "react";

const Searchbar = (props) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
    setTerm("");
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="">Image Title</label>
          <input
            onChange={onInputChange}
            type="text"
            placeholder="search images here"
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
