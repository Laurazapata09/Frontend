import { useState } from "react"

function PeliculasForm ({onSubmit}) {

    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [genero, setGenero] = useState('')


    const handleIdChange = (event) => {
        setId(event.target.value)
    }

    const handleNombresChange = (event) => {
        setNombre(event.target.value)
    }

    const handleGenerosChange = (event) => {
        setGenero(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({nombre, id, genero})
        setId('')
        setNombre('')
        setGenero('')
    } 

    return(
        <form onSubmit={handleSubmit}>
             <input type="int" placeholder="Id" value={id} onChange={handleIdChange} required />
            <input type="text" placeholder="Nombre" value={nombre} onChange={handleNombresChange} required />
            <input type="text" placeholder="Genero" value={genero} onChange={handleGenerosChange} required />
            <button type="submit">Save</button>
        </form>
    )

}
export default PeliculasForm