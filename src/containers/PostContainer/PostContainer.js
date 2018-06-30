import React, {Component} from 'react';
import { PostWrapper, Navigator } from '../../components';

class PostContainer extends Component {
	render() {
		return (
			<PostWrapper>
				<Navigator />
				Hello, Post
			</PostWrapper>
		)
	}
}

export default PostContainer
