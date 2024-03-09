import React from 'react'
import { Form } from '../Form'
import './style.css'

export const Header = ({ setNumbers, setIsLoading, setError }) => {
  return (
    <div className="header">
      <h1 className="header__title">Please choose a file!</h1>
      <Form setNumbers={setNumbers} setIsLoading={setIsLoading} setError={setError} />
    </div>
  )
}
