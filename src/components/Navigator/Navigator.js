import React from 'react';
import './Navigator.css';

const Navigator = () => (
	<div className='Navigate'>
		<button type='button'
			className='ui button'
		>Previous</button>
		<div className='Navigate-page-num'>
			1
		</div>
		<button type='button'
		        className='ui button Navigate-right-button'
		>Next</button>

	</div>
);

export default Navigator;