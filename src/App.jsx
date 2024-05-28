import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SeriesForm from './components/SeriesComponents/SeriesForm'

function App() {
  const [peliculas, setPeliculas] = useState([])
  const [editingPelicula, setEditingPelicula] = useState(null)

  const [series, setSeries] = useState([])
  const [editingSeries, setEditingSerie] = useState(null)

  useEffect(()=>{
    fetchPeliculas()
  }, [])

  const handleCreateOrUpdatePelicula = async (peliculaData) => {
    if (editingPelicula) {
      await axios.put(`http://localhost:8080/apiRest/peliculas/${editingPelicula.peliculaId}`, peliculaData)
    } else {
      await axios.post(`http://localhost:8080/apiRest/peliculas`, peliculaData)
    }
  }

  const fetchPeliculas = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/apiRest/peliculas`)
      setPeliculas(response.data)
    } catch (error) {
      console.log('Error al cargar las peliculas: ' , error)
    }
  }

  const handleEditPelicula = (pelicula) => {
    setEditingPelicula(pelicula)
  }

  const handleDeletePelicula = async(peliculaId) => {
    await axios.delete(`http://localhost:8080/apiRest/peliculas/${peliculaId}`)
    fetchPeliculas()
  }

  useEffect(() => {
    fetch(`http://localhost:8080/apiRest/series`)
        .then(response => response.json())
        .then(data => {
          console.log("Datos recibidos:", data);  
          if (Array.isArray(data)) {
            setSeries(data);
          } else {
            console.error("La respuesta de la API no es un arreglo:", data);
          }
        })
        .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

  const handleCreateOrUpdateSerie = async (serieData) => {
    if (editingSerie) {
      await axios.put(`http://localhost:8080/apiRest/series/${editingSerie.id}`, serieData)
    } else {
      await axios.post(`http://localhost:8080/apiRest/series`, serieData)
    }
  }

  const handleEditSerie = (serie) => {
    setEditingSerie(serie)
  }

  const handleDeleteSerie = async(id) => {
    await axios.delete(`http://localhost:8080/apiRest/series/${id}`)
    fetch()
  }

  

  return (
      <div className='App'>
          <h1>Api Peliculas</h1>
          <br/>
          <h2>Lista Peliculas</h2>
          <PeliculasTable peliculas={peliculas} onEdit={handleEditPelicula} onDelete={handleDeletePelicula}/>
          <h2>{editingPelicula ? 'editar pelicula' : 'crear pelicula'}</h2>
          <PeliculasForm onSubmit={handleCreateOrUpdatePelicula} initialPeliculas={editingPelicula}/>
          <br/>
          <h2>Lista Serie</h2>
          <SeriesTable series={series} onEdit={handleEditSerie} onDelete={handleDeleteSerie}/>
          <h2>{editingSerie ? 'editar serie' : 'crear serie'}</h2>
          <SeriesForm onSubmit={handleCreateOrUpdateSerie} initialSerie={editingSerie}/>
          <br/>

      </div>
  )
}

export default App