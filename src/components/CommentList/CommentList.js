import React, {Component} from 'react';
import './CommentList.css';
import {Comment} from '../';

class CommentList extends Component {

	commentList () {
		this.props.comments.map(
			(comment, index) => (
				<Comment
					name={comment.name}
					body={comment.body}
					key={index}
				/>
			)
		);
	}

	render () {
		return (
			<ul className ='CommentList'>
				{/*this.commentList*/ /*또는 아래와같이 씀.*/}
				{this.props.comments.map(
					(comment, index) => (
						<Comment
							name={comment.name}
							body={comment.body}
							key={index}
						/>
					)
				)}
			</ul>
		)
	}
}
/*

const CommentList = ({comments}) => { //props.attr를 받아 올때 {comments}와 같이 표기하는듯?

    // map data to components
    const commentList = comments.map(
        (comment, index)=>(
            <Comment
                name={comment.name}
                body={comment.body}
                key={index}
            />
        )
    );

    return (
        <ul className="CommentList">
            {commentList}
        </ul>
    );
};
*/

export default CommentList;