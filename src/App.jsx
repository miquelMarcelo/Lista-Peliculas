import { useCallback } from 'react'
import { Movies } from './Movies'
import { useSearch } from './hooks/useSearch.js'
import { useMovies } from './hooks/useMovies.js'
import debounce from 'just-debounce-it'
import './App.css'

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log(search)
      getMovies({ search })
    },
    300), [])

  const handlerSubmit = (event) => {
    event.preventDefault()
    debounceGetMovies(search)
  }

  const handlerChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }
  return (
    <div className='page'>
      <h1> Buscador Peliculas</h1>
      <form className='form' onSubmit={handlerSubmit}>
        <input onChange={handlerChange} value={search} name='input' placeholder='Busca Pelicula' />
        <button>Enviar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Movies movies={movies} />
    </div>
  )
}

export default App
