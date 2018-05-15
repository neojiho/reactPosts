import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Counter extends Component {

	constructor(props){
		super(props);
		this.state = {
			value : 0
		};
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState({
			value : this.state.value + 1
		})
		// this.state.value = this.state.value + 1;
		// this.forceUpdate();
	}

	render(){
		return (
			<div>
				<h2>{this.state.value}</h2>
				<button onClick = {this.handleClick}>Press me</button>
			</div>

		)
	}
}



class App extends Component {
  render() {
    return (
      <div className="App">
	      {this.props.name}
	      <div className="anotherApp">
		      <Counter></Counter>
	      </div>
      </div>
    );
  }
}

export default App;
