import React, { useEffect, useState } from "react";
const getNames = async (setNames) => {
	const res = await fetch("http://localhost:8080/api/species/name");
	const names = await res.json();
	setNames(names);
};

const saveSighting = async (sighting) => {
	const res = await fetch("http://localhost:8080/api/sightings", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(sighting),
	});
	const result = await res.json();
	console.log(result);
};

const PageSightingForm = () => {
	const [names, setNames] = useState([]);
	useEffect(() => {
		getNames(setNames);
	}, []);

	const handelSubmit = (event) => {
		event.preventDefault();
		saveSighting({
			name: event.target.name.value,
			date: event.target.date.value,
			description: event.target.description.value,
		});
	};
	return (
		<form onSubmit={handelSubmit}>
			<select name="name">
				{names.map((item) => (
					<option key={item._id} value={item.name}>
						{item.name}
					</option>
				))}
			</select>
			<input type="date" name="date" />
			<textarea name="description" />
			<button type="submit">save</button>
		</form>
	);
};

export default PageSightingForm;
