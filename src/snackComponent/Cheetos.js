import React from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import cheetos from '../images/cheetos.webp'

import './Snacks.css'

const Cheetos = () => {
    
    return (
        <div className="Snacks">
            <h1>Snake: Cheetos</h1>
            <h2>Type: Chips</h2>
            <div className="Snacks-Back-div">
            <NavLink to="/"><h3 className="Snacks-Back-h3" >GO Back To Vender Machine</h3></NavLink>
            </div>
            <img className="Snacks-img" src={cheetos}/>
        </div>
    )
}


export default Cheetos