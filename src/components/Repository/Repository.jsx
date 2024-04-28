import './Repository.css';
import PropTypes from 'prop-types';

import React from 'react';

export default function Repository({ name, description, url }) {
	return (
		<div className='repository__item'>
			<a href={url} target='_blank' rel='noreferrer'>
				{name}
			</a>
			<p>{description}</p>
		</div>
	);
}

Repository.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	url: PropTypes.string.isRequired,
};
