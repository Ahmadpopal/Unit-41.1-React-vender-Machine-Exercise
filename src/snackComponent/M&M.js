import React from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import mm from '../images/m&m.jpg'

import './Snacks.css'

const MandM = () => {
    
    return (
        <div className="Snacks">
            
            <h1>Snake: MM</h1>
            <h2>Type: Candy</h2>
            <div className="Snacks-Back-div">
            <NavLink to="/"><h3 className="Snacks-Back-h3" >GO Back To Vender Machine</h3></NavLink>
            </div>
            <img className="Snacks-img" src={mm}/>
        </div>
    )
}


export default MandM