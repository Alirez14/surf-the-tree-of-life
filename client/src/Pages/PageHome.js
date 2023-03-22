import React, { useEffect, useState } from "react";
import ComListSpecies from "../Components/ComListSpecies";
import ComSearchBar from "../Components/ComSearchBar";

const fetchSpecies = (dataSetter, queryParams = "") => {
	let path = "/";
	if (queryParams !== "") {
		path = "?name=" + queryParams;
	}
	return fetch("http://localhost:8080/api/species" + path, {}).then((res) =>
		res.json().then((data) => dataSetter(data))
	);
};

const PageHome = () => {
	const [species, setSpecies] = useState();
	const [userInput, setUserInput] = useState("");

	useEffect(() => {
		fetchSpecies(setSpecies, userInput);
	}, [userInput]);

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	return (
		<div>
			<h1>Welcome to Tree Of Life Project</h1>
			<ComSearchBar handleChange={handleChange} />
			<ComListSpecies species={species}></ComListSpecies>
		</div>
	);
};

export default PageHome;
