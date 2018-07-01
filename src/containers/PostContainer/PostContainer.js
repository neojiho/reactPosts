import React, {Component} from 'react';
import { PostWrapper, Navigator, Post } from '../../components';
import * as service from '../../services/post'; // post.js에서 export하는 모든 객체들을 service의 프로퍼티로 import함.


class PostContainer extends Component {

	constructor(props) {
		super();//initialize component state

		this.state = {
			postId : 1,
			fetching : false, //result of request
			post : {
				title : null,
				body : null
			},
			comments : []
		}
	}

	fetchPostInfo = async (postId) => {
		/*const post = await service.getPost(postId);
		console.log(post);
		const comments = await service.getComments(postId);
		console.log(comments);
		*/
		this.setState({
			fetching : true
		});

		const info = await Promise.all([
			service.getPost(postId),
			service.getComments(postId)
		]);
		console.log(info);

		const {title, body} = info[0].data;

		const comments = info[1].data;

		this.setState({
			postId,
			post : {
				title,
				body
			},
			comments,
			fetching: false //change fetching status after request done
		})


	};

	render() {
		const {postId, fetching, post, comments} = this.state;
		//하위 컴포넌트에 전달할 props들을 state에서 대입

		return (
			<PostWrapper>
				<Navigator
					postId={postId}
					disabled={fetching} //데이터를 불러오는 동안 비활성화함.
				/>
				<Post
					title={post.title}
					body={post.body}
					comments={comments}
				/>
			</PostWrapper>
		)
	}

	componentDidMount(){
		this.fetchPostInfo(1);
	}
}

export default PostContainer
