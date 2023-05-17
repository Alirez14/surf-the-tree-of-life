import { useState } from "react";

export default function PageCreateIndividual() {
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [owner, setOwner] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(name, species, owner);

        fetch("http://localhost:8080/api/individuals/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name, species, owner
            })
        })
    }

    return <div className="create-individual">
        <h1>Create a new individual</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name <input type="text" value={name} onChange={(event) => setName(event.target.value)} /></label>
            </div>
            <div>
                <label>Species <input type="text" value={species} onChange={(event) => setSpecies(event.target.value)} /></label>
            </div>
            <div>
                <label>Owner <input type="text" value={owner} onChange={(event) => setOwner(event.target.value)}/></label>
            </div>
            <div>
                <button type="submit">Create individual</button>
            </div>
        </form>
    </div>;
}