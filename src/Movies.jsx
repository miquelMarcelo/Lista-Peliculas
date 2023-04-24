export function Movies ({ movies }) {
  if (movies.length > 0) {
    console.log(movies.length)
    return (
      <ul className='movies'>
        {
          movies.map(movie => (
            <li className='movie' key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} />
            </li>
          ))
        }
      </ul>
    )
  } else return (<p style={{ color: 'red' }}>No hay peliculas que coincidan con esta búsqueda</p>)
}
