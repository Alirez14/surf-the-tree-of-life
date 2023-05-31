import React, { useState } from "react";

const sendComment = (id, comment) => {
	fetch("http://localhost:8080/api/species/" + id, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ comment: comment }),
	}).then((res) => res.json().then((data) => console.log(data)));
};

const ComRowSpecies = ({ specie }) => {
	const [collapse, setCollapse] = useState(true);
	const [comment, setComment] = useState(specie.comment);

	const handelCollapse = (e) => {
		if (!collapse) {
			sendComment(specie._id, comment);
		}
		setCollapse(!collapse);
	};

	return (
		<>
			<li onClick={handelCollapse}>
				{collapse
					? specie.name
					: specie.name +
					  " " +
					  specie.importId +
					  " " +
					  specie.extinct +
					  " " +
					  specie.confidence +
					  " " +
					  specie.parent}
			</li>
			{!collapse && (
				<input
					type="text"
					name=""
					id=""
					placeholder="comment"
					defaultValue={comment}
					onChange={(e) => {
						setComment(e.target.value);
					}}
				/>
			)}
		</>
	);
};

export default ComRowSpecies;
