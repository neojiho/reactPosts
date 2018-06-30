import React from 'react';
import './Navigator.css';

const Navigator = () => (
	<div className='Navigate'>
		<button type='button'
			className='ui button'
		><span>&lt;- </span>Previous</button>
		<div className='Navigate-page-num'>
			1
		</div>
		<button type='button'
		        className='ui button Navigate-right-button'
		>Next<span> -&gt;</span></button>

	</div>
);

export default Navigator;

