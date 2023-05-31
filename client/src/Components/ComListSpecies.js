import React from "react";
import ComRowSpecies from "./ComRowSpecies";

const listRender = (list) => {
	return list ? (
		list.map((item) => {
			return <ComRowSpecies key={item._id} specie={item}></ComRowSpecies>;
		})
	) : (
		<p> loading</p>
	);
};

const ComListSpecies = ({ species }) => {
	return <div>{listRender(species)}</div>;
};

export default ComListSpecies;
