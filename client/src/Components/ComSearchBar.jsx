import React from "react";

const ComSearchBar = ({ onChange }) => {
	return (
		<input type="text" placeholder="search by name" onChange={onChange} />
	);
};

export default ComSearchBar;
