import React from "react";

const listRender = (list) => {
	return list ? (
		list.map((item, index) => {
			return <li key={index}>{item.name}</li>;
		})
	) : (
		<p> loading</p>
	);
};

const ListSpecies = ({ species }) => {
	return <div>{listRender(species)}</div>;
};

export default ListSpecies;
