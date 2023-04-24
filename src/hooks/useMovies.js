import { useState } from 'react'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])

  const getMovies = async ({ search }) => {
    const newMovie = await searchMovies({ search })
    setMovies(newMovie)
  }
  return { movies, getMovies }
}

async function searchMovies ({ search }) {
  try {
    const json = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1d6b7520&s=${search}`)
    const moviesToJson = await (json.json())
    const movies = moviesToJson.Search
    if (movies) {
      return movies.map(movie => (
        {
          id: movie.imdbID,
          title: movie.Title,
          poster: movie.Poster,
          year: movie.Year

        }))
    } else return []
  } catch (e) {
    throw new Error({ e })
  }
}
