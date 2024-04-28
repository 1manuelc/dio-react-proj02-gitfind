import './Input.css';
import PropTypes from 'prop-types';

export default function Input({ updateSearch }) {
	return (
		<div className='main__input'>
			<input
				type='text'
				name='user__search'
				placeholder='@usuario'
				onChange={(event) => {
					updateSearch(event.target.value);
				}}
			/>
		</div>
	);
}

Input.propTypes = {
	updateSearch: PropTypes.func,
};
