import React, { useState } from "react";

function ComListRowSpecies({ item }) {
	const [expanded, setExpanded] = useState(false);
	const handleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<li onClick={handleExpand}>
			{!expanded
				? item.name
				: item.name +
				  " " +
				  item.parent +
				  " " +
				  item.extinct +
				  " " +
				  item.confidence}
		</li>
	);
}

export default ComListRowSpecies;
