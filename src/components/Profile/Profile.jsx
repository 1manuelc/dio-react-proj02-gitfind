import './Profile.css';
import PropTypes from 'prop-types';

import React from 'react';

export default function Profile({ photoUrl, name, username, description }) {
	return (
		<div className='main__profile'>
			<img
				src={photoUrl}
				alt={`${username}'s profile photo`}
				className='profile__photo'
			/>

			<div className='profile__infos'>
				<div className='profile__header'>
					<h3>{name}</h3>
					<h4>{'@' + username}</h4>
				</div>
				<p className='profile__description'>{description}</p>
			</div>
		</div>
	);
}

Profile.propTypes = {
	photoUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
