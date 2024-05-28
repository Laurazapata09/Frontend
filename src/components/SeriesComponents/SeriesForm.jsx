function SeriesForm ({onSubmit}) {

    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [temporadas, setTemporadas] = useState('')


    const handleIdChange = (event) => {
        setId(event.target.value)
    }

    const handleNombresChange = (event) => {
        setNombre(event.target.value)
    }

    const handleTemporadasChange = (event) => {
        setTemporadas(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({nombre, id, temporadas})
        setId('')
        setNombre('')
        setTemporadas('')
    } 

    return(
        <form onSubmit={handleSubmit}>
             <input type="int" placeholder="Id" value={id} onChange={handleIdChange} required />
            <input type="text" placeholder="Nombre" value={nombre} onChange={handleNombresChange} required />
            <input type="int" placeholder="Temporadas" value={genero} onChange={handleTemporadasChange} required />
            <button type="submit">Save</button>
        </form>
    )

}
export default SeriesForm