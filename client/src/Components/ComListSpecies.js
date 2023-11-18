import React from "react";
import ComSpecies from "./ComSpecies";

const listRender = (list) => {
	return list ? (
		list.map((item, index) => {
			return <ComSpecies species={item} key={item._id}></ComSpecies>;
		})
	) : (
		<p> loading</p>
	);
};

const ComListSpecies = ({ species }) => {
	return <div>{listRender(species)}</div>;
};

export default ComListSpecies;
