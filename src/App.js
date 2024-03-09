import React, { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [numbers, setNumbers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error</h1>
  }
  console.log('Numbers is', numbers)
  return (
    <div className="container">
      <Header setNumbers={setNumbers} setIsLoading={setIsLoading} setError={setError} />
    </div>
  )
}

export default App
