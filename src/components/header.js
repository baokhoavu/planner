// Imported Components and built in React/library functionality
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import home from '../pages/home';

// Creating the 'Header' Class/Component
export default class Header extends Component {

	render() {
		return (
	        <header className="App-header">
	        	<Router>										
					<Route exact path="/" component={home} />
				</Router>		        
      		</header>
		)
	}	
}