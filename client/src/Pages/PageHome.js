import React, { useEffect, useState } from "react";
import ComListSpecies from "../Components/ComListSpecies";

const fetchSpecies = (dataSetter) => {
	return fetch("http://localhost:8080/api/species/", {}).then((res) =>
		res.json().then((data) => dataSetter(data))
	);
};

const PageHome = () => {
	const [species, setSpecies] = useState();
	useEffect(() => {
		fetchSpecies(setSpecies);
	}, []);
	return (
		<div>
			<h1>Welcome to Tree Of Life Project</h1>
			<ComListSpecies species={species}></ComListSpecies>
		</div>
	);
};

export default PageHome;
