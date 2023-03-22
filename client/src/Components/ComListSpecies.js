import React from "react";
import ComListRowSpecies from "./ComListRowSpecies";

const listRender = (list) => {
	return list ? (
		list.map((item, index) => {
			return <ComListRowSpecies key={index} item={item} />;
		})
	) : (
		<p> loading</p>
	);
};

const ComListSpecies = ({ species }) => {
	return <div>{listRender(species)}</div>;
};

export default ComListSpecies;
