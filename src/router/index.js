import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Home from '../component/Home';

const App = () => (
	<Router>
		<div>
		  <Route exact path="/" component={Home}/>
		</div>
	</Router>
)
export default App