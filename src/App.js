import React, { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Loader } from './components/Loader'
import { Error } from './components/Error'

function App() {
  const [numbers, setNumbers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <div className="container">
      <Header setNumbers={setNumbers} setIsLoading={setIsLoading} setError={setError} />
      {numbers.length !== 0 && <Main numbers={numbers} />}
      {isLoading && <Loader />}
      {error && <Error error={error} />}
    </div>
  )
}

export default App
