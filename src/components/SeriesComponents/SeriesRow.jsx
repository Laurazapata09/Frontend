const SeriesRow = ({serie, onEdit, onDelete}) => {
    const handleEdit = () =>{
        onEdit(serie)
    }

    const handleDelete = () => {
        onDelete(serie.serieId)
    }

    return(
        <tr>
            <td>{serie.id}</td>
            <td>{serie.nombre}</td>
            <td>{serie.temporadas}</td>
            <td>
                <button onClick={handleEdit}>Edit </button>
                <button onClick={handleDelete}>Delete </button>
            </td>
        </tr>
    )
}
export default SeriesRow