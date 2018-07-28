import React, {Component} from 'react';
import { PostWrapper, Navigator, Post } from '../../components';
import * as service from '../../services/post';
import Warning from "../../components/Warning/Warning"; // post.js에서 export하는 모든 객체들을 service의 프로퍼티로 import함.


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
			comments : [],
			warningVisibility : false
		}
	}

	showWarning = () => {
		this.setState({
			warningVisibility: true
		});

        // after 1.5 sec

        setTimeout(
            () => {
                this.setState({
                    warningVisibility: false
                });
            }, 1500
        );
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

		try {
			const info = await Promise.all([
				service.getPost(postId),
				service.getComments(postId)
			]);
			console.log(info);

			const {title, body} = info[0].data;

			const comments = info[1].data;

			this.setState({
				postId,
				post: {
					title,
					body
				},
				comments,
				fetching: false //change fetching status after request done
			})
		}
		catch(e){
			//if err, stop
			this.setState({
				fetching : false
			});
			this.showWarning();
			console.log('error occurred', e);
		}



	};

	handleNavigatoeClick = (type) => {
		const postId = this.state.postId;
		if (type === 'NEXT') {
			this.fetchPostInfo(postId + 1);
		}
		else {
			this.fetchPostInfo(postId - 1);
		}
	};

	render() {
		const {postId, fetching, post, comments, warningVisibility} = this.state;
		//하위 컴포넌트에 전달할 props들을 state에서 대입

		return (
			<PostWrapper>
				<Navigator
					postId={postId}
					disabled={fetching} //데이터를 불러오는 동안 비활성화함.
					onClick={this.handleNavigatoeClick}
				/>
				<Post
					title={post.title}
					body={post.body}
					comments={comments}
				/>
				<Warning visible={warningVisibility} message="That message doesn't exist"/>
			</PostWrapper>
		)
	}

	componentDidMount(){
		this.fetchPostInfo(1);
	}
}

export default PostContainer
