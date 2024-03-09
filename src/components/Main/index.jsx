import React from 'react'
import { Info } from '../Info'
import "./style.css";

export const Main = ({numbers}) => {
  return (
    <div className='main'>
        <h1 className='main__title'>Result</h1>
        <Info numbers={numbers}/>
    </div>
    
  )
}
