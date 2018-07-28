import React from 'react';
import './Navigator.css';

const Navigator = ({onClick, postId, disabled}) => (
	<div className='Navigate'>
		<button type='button'
			className='ui button'
	        onClick={
	        	() => {
	        		//if (postId === 1) return;
	        		onClick('PREV')
	        	}
	        }
	        disabled={disabled}
		><span>&lt;- </span>Previous</button>
		<div className='Navigate-page-num'>
			{postId}
		</div>
		<button type='button'
	        className='ui button Navigate-right-button'
	        onClick={() => onClick('NEXT')}
	        disabled={disabled}
		>Next<span> -&gt;</span></button>

	</div>
);

export default Navigator;

