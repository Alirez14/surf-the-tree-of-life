import React, { useEffect, useState } from "react";
import ComListSpecies from "../Components/ComListSpecies";

const fetchSpecies = (dataSetter, filterParam) => {
	let pathParam = filterParam ? filterParam : "";
	return fetch("http://localhost:8080/api/species/" + pathParam, {}).then(
		(res) => res.json().then((data) => dataSetter(data))
	);
};

const PageHome = () => {
	const [species, setSpecies] = useState();
	useEffect(() => {
		fetchSpecies(setSpecies);
	}, []);

	const handelFilter = (e) => {
		fetchSpecies(setSpecies, e.target.value);
	};

	return (
		<div>
			<h1>Welcome to Tree Of Life Project</h1>
			<input
				type="text"
				onChange={handelFilter}
				name="filterName"
				id=""
				placeholder="name"
			/>
			<ComListSpecies species={species}></ComListSpecies>
		</div>
	);
};

export default PageHome;
