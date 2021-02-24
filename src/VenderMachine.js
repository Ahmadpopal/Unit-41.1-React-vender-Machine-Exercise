import React from 'react'
import { NavLink } from 'react-router-dom'

import venderMachine from './images/vender-machine.png'
import cheetos from './images/cheetos.webp'
import lays from './images/lays.jpeg'
import mm from './images/m&m.jpg'
import nuts from './images/nuts.jpeg'
import snickers from './images/snickers.jpeg'


import './VenderMachine.css'




const VenderMachine = () => {
    return (
        <div className="VenderMachine">
        <div className="VenderMachine-nav-div">
      <NavLink  to="/cheetos">
          <img 
          className="VenderMachine-img"
          src={cheetos}
          />
          <p>Cheetos</p>
      </NavLink>
      <NavLink to="/lays">
          <img 
          className="VenderMachine-img"
          src={lays}
          />
          <p>Lays</p>
      </NavLink>
      <NavLink to="/mm">
          <img 
          className="VenderMachine-img"
          src={mm}
          />
          <p>M&M</p>
      </NavLink>
      <NavLink to="/nuts">
          <img
          className="VenderMachine-img" 
          src={nuts}
          />
          <p>Nuts</p>
      </NavLink>
      <NavLink to="/snickers">
          <img 
          className="VenderMachine-img"
          src={snickers}
          />
          <p>Snickers</p>
      </NavLink>
      </div>
        <div className="VenderMachine-machine-div">
            <h1>Vender Machine</h1>
            <img className="VenderMachine-machine-img" src={venderMachine}/>
        </div>
        <div className="VenderMachine-Welcome-div">
            <h1>Hello and Welcome to Vender Machine</h1>
            <h3>It is Time for some Snacks </h3>

        </div>
        </div>
    )
}


export default VenderMachine