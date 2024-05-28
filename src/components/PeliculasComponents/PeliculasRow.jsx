const PeliculasRow = ({pelicula, onEdit, onDelete}) => {
    const handleEdit = () =>{
        onEdit(pelicula)
    }

    const handleDelete = () => {
        onDelete(pelicula.peliculaId)
    }

    return(
        <tr>
            <td>{pelicula.id}</td>
            <td>{pelicula.nombre}</td>
            <td>{pelicula.genero}</td>
            <td>
                <button onClick={handleEdit}>Edit </button>
                <button onClick={handleDelete}>Delete </button>
            </td>
        </tr>
    )
}
export default PeliculasRow