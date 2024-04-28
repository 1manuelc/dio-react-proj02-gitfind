import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ type, text, clickFn }) {
	return (
		<button onClick={clickFn} type={type}>
			{text}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	clickFn: PropTypes.func,
};
