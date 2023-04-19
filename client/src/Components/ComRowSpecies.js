import React, { useState } from "react";

const ComRowSpecies = ({ species }) => {
	const [visible, setVisible] = useState(false);

	const handelVisibility = () => {
		setVisible(!visible);
	};

	return (
		<li onClick={handelVisibility}>
			{!visible
				? species.name
				: species.name +
				  " " +
				  species.parent +
				  " " +
				  species.confidence +
				  " " +
				  species.extinct}
		</li>
	);
};

export default ComRowSpecies;
