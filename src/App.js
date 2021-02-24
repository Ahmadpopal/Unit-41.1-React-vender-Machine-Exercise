import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom'

import venderMachine from './images/vender-machine.png'

import VenderMachine from './VenderMachine'
import Lays from './snackComponent/Lays'
import MM from './snackComponent/M&M'
import Cheetos from './snackComponent/Cheetos'
import Snickers from './snackComponent/Snickers'
import Nuts from './snackComponent/Nuts'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VenderMachine />
        </Route>
        <Route exact path="/lays">
          <Lays />
        </Route>
        <Route exact path="/cheetos">
          <Cheetos />
        </Route>
        <Route exact path="/mm">
          <MM />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
        <Route exact path="/nuts">
          <Nuts />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
