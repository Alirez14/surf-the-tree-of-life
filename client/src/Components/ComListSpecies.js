import React from "react";
import ComRowSpecies from "./ComRowSpecies";

const listRender = (list) => {
	return list ? (
		list.map((item, index) => {
			return <ComRowSpecies key={index} species={item}></ComRowSpecies>;
		})
	) : (
		<p> loading</p>
	);
};

const ComListSpecies = ({ species }) => {
	return <div>{listRender(species)}</div>;
};

export default ComListSpecies;
