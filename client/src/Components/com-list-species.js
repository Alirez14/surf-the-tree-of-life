import React from "react";

const ComRenderSpeciesList = ({ species }) => {
    if (!species) {
        return <p>Loading...</p>;
    }

    return (
        <ul>
            {species.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </ul>
    );
};

const ComListSpecies = ({ species }) => {
    return (
        <div>
            <ComRenderSpeciesList species={species} />
        </div>
    );
};

export default ComListSpecies;
