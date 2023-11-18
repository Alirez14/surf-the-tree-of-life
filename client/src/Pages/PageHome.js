import React, { useEffect, useState } from "react";
import ComListSpecies from "../Components/ComListSpecies";
import ComSearchBar from "../Components/ComSearchBar";

const fetchSpecies = (dataSetter, userInput) => {
	const param = userInput ?? "";
	console.log("http://localhost:8080/api/species/" + param);
	return fetch("http://localhost:8080/api/species/" + param).then((res) =>
		res.json().then((data) => dataSetter(data))
	);
};

const PageHome = () => {
	const [species, setSpecies] = useState();

	useEffect(() => {
		fetchSpecies(setSpecies);
	}, []);

	const handelSearch = (event) => {
		const search = event.target.value;
		fetchSpecies(setSpecies, search);
	};

	return (
		<div>
			<h1>Welcome to Tree Of Life Project</h1>
			<ComSearchBar onChange={handelSearch}></ComSearchBar>
			<ComListSpecies species={species}></ComListSpecies>
		</div>
	);
};

export default PageHome;
