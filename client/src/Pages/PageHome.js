import React, { useEffect, useState } from "react";
import ComListSpecies from "../Components/ComListSpecies";

const fetchSpecies = (dataSetter, searchKey) => {
	const urlPostFix = !searchKey ? "/" : "?searchKey=" + searchKey;
	return fetch("http://localhost:8080/api/species" + urlPostFix, {}).then(
		(res) => res.json().then((data) => dataSetter(data))
	);
};

const PageHome = () => {
	const [species, setSpecies] = useState();

	useEffect(() => {
		fetchSpecies(setSpecies);
	}, []);

	const handelChange = (e) => {
		const searchKey = e.target.value;
		fetchSpecies(setSpecies, searchKey);
	};

	return (
		<div>
			<h1>Welcome to Tree Of Life Project</h1>
			<input type="text" name="searchKey" onChange={handelChange} />
			<ComListSpecies species={species}></ComListSpecies>
		</div>
	);
};

export default PageHome;
