import React, { Component } from 'react';
import Content from './Content.jsx';

class App extends Component{
	render(){
		return(
			<div>
				<h1>Parent JSX File</h1>
				<Content />
			</div>
		);
	}
}

export default App;