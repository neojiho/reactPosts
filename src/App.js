import React, { Component } from 'react';
import { Header } from './components'; //Header를 components에서 불러오는대 component/index.js는 해당 폴더 내부에서 설정되어있는
// component들에 대한 진입점 역할을 한다.
import { PostContainer } from './containers' //components와 마찬가지로 containers/index.js가 진입점 역할을 한다.
import './App.css';

class App extends Component {

	render(){
		return (
			<div>
				<Header />
				<PostContainer />
			</div>
		);
	}
}

export default App;