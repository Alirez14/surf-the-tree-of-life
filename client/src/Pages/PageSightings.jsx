import React, { useEffect, useState } from "react";

const getSightings = async (setSightings) => {
	const res = await fetch("http://localhost:8080/api/sightings");
	const sightings = await res.json();
	setSightings(sightings);
};

const deleteSighting = async (id, setSightings) => {
	const res = await fetch("http://localhost:8080/api/sightings/" + id, {
		method: "DELETE",
	});
	const result = await res.json();
	setSightings(result);
};

const PageSightings = () => {
	const [sightings, setSightings] = useState([]);
	useEffect(() => {
		getSightings(setSightings);
	}, []);

	const handelDelete = async (id, set) => {
		deleteSighting(id, setSightings);
	};

	return (
		<ul>
			{sightings.map((item) => (
				<li key={item._id}>
					{item.name} {item.date} {item.description}
					<button onClick={() => handelDelete(item._id)}>
						delete
					</button>
				</li>
			))}
		</ul>
	);
};

export default PageSightings;
