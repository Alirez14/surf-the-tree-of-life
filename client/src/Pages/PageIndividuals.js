import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function PageIndividuals () {
    const [individuals, setIndividuals] = useState([]);
    const [sortBy, setSortBy] = useState("Name");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(function() {
        const urlParams = new URLSearchParams();
        urlParams.set("sortBy", sortBy);
        urlParams.set("sortOrder", sortOrder);
        fetch("http://localhost:8080/api/individuals/?" + urlParams)
            .then(response => response.json())
            .then(individuals => setIndividuals(individuals))
    }, [sortBy, sortOrder])

    return <div>
        <h1>Individuals</h1>
        <table>
            <thead>
                <tr>
                    <th onClick={() => {
                        setSortBy("name")
                        if (sortOrder === "asc") {
                            setSortOrder("desc");
                        } else {
                            setSortOrder("asc");
                        }
                    }}>Name</th>
                    <th onClick={() => {
                        setSortBy("species")
                        if (sortOrder === "asc") {
                            setSortOrder("desc");
                        } else {
                            setSortOrder("asc");
                        }
                    }}>Species</th>
                    <th onClick={() => {
                        setSortBy("owner")
                        if (sortOrder === "asc") {
                            setSortOrder("desc");
                        } else {
                            setSortOrder("asc");
                        }
                    }}>Owner</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { individuals.map(individual => <tr key={individual._id}>
                    <td>{individual.name}</td>
                    <td>{individual.species}</td>
                    <td>{individual.owner}</td>
                    <td><Link to={"/individuals/" + encodeURI(individual._id)}>Edit</Link></td>
                </tr>) }
            </tbody>
        </table>
    </div>
} 