export default function ComIndividualForm ({ individual, onSave }) {
    const editedIndividual = {...individual}

    function handleSubmit(event) {
        event.preventDefault()
        onSave(editedIndividual)
    }

    return <form onSubmit={handleSubmit}>
    <div>
        <label>Name <input type="text" defaultValue={editedIndividual?.name ?? ""} onChange={(event) => editedIndividual.name = event.target.value} /></label>
    </div>
    <div>
        <label>Species <input type="text" defaultValue={editedIndividual?.species ?? ""} onChange={(event) => editedIndividual.species = event.target.value} /></label>
    </div>
    <div>
        <label>Owner <input type="text" defaultValue={editedIndividual?.owner ?? ""} onChange={(event) => editedIndividual.owner = event.target.value}/></label>
    </div>
    <div>
        <button type="submit">{individual === undefined ? "Create" : "Edit"} individual</button>
    </div>
</form>
}