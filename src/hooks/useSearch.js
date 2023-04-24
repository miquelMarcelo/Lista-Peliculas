import { useState, useEffect } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
