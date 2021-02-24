import React from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import nuts from '../images/nuts.jpeg'

import './Snacks.css'


const Nuts = () => {
    
    return (
        <div className="Snacks">
            <h1>Snake: Nuts</h1>
            <h2>Type: Nuts</h2>
            <div className="Snacks-Back-div">
            <NavLink to="/"><h3 className="Snacks-Back-h3" >GO Back To Vender Machine</h3></NavLink>
            </div>
            <img className="Snacks-img" src={nuts}/>

        </div>
    )
}


export default Nuts