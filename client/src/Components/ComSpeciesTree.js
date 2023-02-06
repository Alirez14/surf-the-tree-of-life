import { useEffect, useState } from "react";

const ComSpeciesTree = ({speciesId}) => {
    const [species, setSpecies] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [children, setChildren] = useState([]);
	
    if (species === null) {
        return <li>Loading</li>
    }

    if (!expanded) {
        return <li>{species.name}</li>
    }

    return <li>
        {species.name}
        <ul>
            {children.map(child => <ComSpeciesTree speciesId={child.importId}/>)}
        </ul>
    </li>
};

export default ComSpeciesTree;