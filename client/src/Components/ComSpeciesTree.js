import { useEffect, useState } from "react";

const ComSpeciesTree = ({speciesId}) => {
    const [species, setSpecies] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [descendants, setDescendants] = useState([]);
    
	useEffect(() => {
        const url = `${document.location.protocol}//${document.location.hostname}:8080/api/species/${speciesId}`;
        fetch(url)
            .then(response => response.json())
            .then(setSpecies);
    }, [speciesId]);

    useEffect(() => {
        const queryParams = new URLSearchParams({
            sortBy: "name",
            sortOrder: "asc"
        });
        if (expanded) {
            const url = `${document.location.protocol}//${document.location.hostname}:8080/api/species/${speciesId}/descendants?${queryParams}`;
            fetch(url)
                .then(response => response.json())
                .then(setDescendants);
        }    
    }, [speciesId, expanded]);
    
    const onExpand = () => {
        setExpanded(!expanded);
    };

    if (species === null) {
        return <li>Loading</li>
    }

    if (!expanded) {
        return <li onClick={onExpand}>{species.name}</li>
    }

    return <li>
        <span onClick={onExpand}>{species.name}</span>
        <ul>
            {descendants.map(child => <ComSpeciesTree speciesId={child.importId} key={child.importId} />)}
        </ul>
    </li>
};

export default ComSpeciesTree;