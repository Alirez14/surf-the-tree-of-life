import React from "react";

const ComSearchBar = ({ handleChange }) => {
	return <div>
        <input placeholder="search" onChange={handleChange}>
        </input>
    </div>;
};

export default ComSearchBar;
