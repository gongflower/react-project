import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Home from '../component/Home';
import Pcenter from '../component/Pcenter';
import Login from '../component/Login';
import Regist from '../component/Regist';

const App = () => (
	<Router>
		<div>
		  <Route exact path="/" component={Home}/>
		  <Route path="/Pcenter" component={Pcenter}/>
		  <Route path="/Login" component={Login}/>
		  <Route path="/Regist" component={Regist}/>
		</div>
	</Router>
)
export default App