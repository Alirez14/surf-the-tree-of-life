import { useParams } from "react-router-dom";
import ComIndividualForm from "../Components/ComIndividualForm";
import { useEffect, useState } from "react";

export default function PageUpdateIndividual() {
    const { id } = useParams();
    const [individual, setIndividual] = useState(null);
    
    useEffect(function() {
        fetch("http://localhost:8080/api/individuals/" + encodeURI(id))
            .then(response => response.json())
            .then(individual => setIndividual(individual));
    }, [id]);

    function handleSave(individual) {
        fetch("http://localhost:8080/api/individuals/" + encodeURI(id), {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(individual)
        })
    }

    return <div>
        <h1>Edit individual</h1>
        <ComIndividualForm individual={individual} onSave={handleSave}></ComIndividualForm>
    </div>
}