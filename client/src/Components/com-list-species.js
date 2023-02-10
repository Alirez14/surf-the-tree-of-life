import React from "react";

const ComListSpecies = ({ species }) => {
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

export default ComListSpecies;
