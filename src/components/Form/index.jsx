import React, { useRef, useState } from 'react'
import './style.css'

export const Form = ({ setNumbers, setIsLoading, setError }) => {
  const [file, setFile] = useState()
  const inputRef = useRef(null)

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleClearFile = () => {
    setNumbers([])
    setError('')

    setFile()
    inputRef.current.value = null
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')
    setIsLoading(true)

    const file = inputRef.current.files[0]
    const reader = new FileReader()

    reader.onload = (event) => {
      const data = event.target.result
      const numbers = data.split('\n').map(Number)

      setNumbers(numbers)
      setIsLoading(false)
    }

    reader.onerror = (event) => {
      setError('Ocurred error:', event.target.error)
      setIsLoading(false)
    }

    reader.readAsText(file)
  }

  return (
    <form className="form">
      <label htmlFor="file-upload" className="custom-file-upload">
        Choose file
      </label>
      <input ref={inputRef} id="file-upload" type="file" onChange={handleFileChange} />
      <div>{file && `${file.name} - ${file.type}`}</div>
      <div className="form__buttons">
        <button onClick={handleSubmit} disabled={!file} type="submit">
          Calculate
        </button>
        <button onClick={handleClearFile} disabled={!file}>
          Clear
        </button>
      </div>
    </form>
  )
}
