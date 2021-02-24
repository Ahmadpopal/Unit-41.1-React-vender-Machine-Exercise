import React from 'react'
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import snickers from '../images/snickers.jpeg'


const Snicker = () => {
    
    return (
        <div className="Snacks"> 
            <h1>Snake: Snicker</h1>
            <h2>Type: Candy</h2>
            <div className="Snacks-Back-div">
            <NavLink to="/"><h3 className="Snacks-Back-h3" >GO Back To Vender Machine</h3></NavLink>
            </div>
            <img className="Snacks-img" src={snickers}/>
        </div>
    )
}


export default Snicker 