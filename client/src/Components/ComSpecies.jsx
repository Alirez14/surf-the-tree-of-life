import React, { useState } from "react";

const patchSpecies = (species) => {
	return fetch("http://localhost:8080/api/species/" + species._id, {
		method: "PATCH",
		body: JSON.stringify(species),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((res) => res.json());
};

const ComSpecies = ({ species }) => {
	const [comment, setComment] = useState(species.comment ?? "");
	const [collapse, setCollapse] = useState(true);
	const handelClick = () => {
		setCollapse(!collapse);
		if (!collapse) {
			patchSpecies({ ...species, comment: comment });
		}
	};

	const handelInputChange = (event) => {
		const value = event.target.value;
		setComment(value);
	};

	return (
		<div>
			<li onClick={handelClick}>
				{collapse
					? species.name
					: species.name +
					  " " +
					  species.extinct +
					  " " +
					  species.importId +
					  " " +
					  species.parent +
					  " " +
					  species.confidence}
			</li>
			{!collapse && (
				<input
					type="text"
					value={comment}
					onChange={handelInputChange}
				></input>
			)}
		</div>
	);
};

export default ComSpecies;
