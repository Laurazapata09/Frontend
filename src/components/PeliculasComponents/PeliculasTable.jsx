function PeliculasTable({peliculas, onEdit, onDelete}){


    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRES</th>
                    <th>GENEROS</th>
                    
                </tr>
            </thead>
            <tbody>
                {peliculas.map((pelicula) => (
                    <PeliculasRow
                        key={pelicula.peliculaId} 
                        pelicula={pelicula}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default PeliculasTable