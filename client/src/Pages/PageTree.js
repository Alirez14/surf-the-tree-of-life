import ComSpeciesTree from "../Components/ComSpeciesTree";

const PageTree = () => {
    document.title = "Phylogentic Tree";
    return (<>
        <h1>Species Tree</h1>
        <ComSpeciesTree speciesId={1}></ComSpeciesTree>
    </>)
};

export default PageTree;