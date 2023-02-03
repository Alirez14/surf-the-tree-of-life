import React, { useEffect, useState } from "react";
import ListSpecies from "../Components/list-species";

const fetchSpecies = (dataSetter) => {
	return fetch("http://localhost:8080/api/species/", {}).then((res) =>
		res.json().then((data) => dataSetter(data))
	);
};

const Home = () => {
	const [species, setSpecies] = useState();
	useEffect(() => {
		fetchSpecies(setSpecies);
	}, []);
	return (
		<div>
			<h1>Welcome to Tree Of Life Project</h1>
			<ListSpecies species={species}></ListSpecies>
		</div>
	);
};

export default Home;
