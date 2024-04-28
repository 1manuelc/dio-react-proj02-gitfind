import './Search.css';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import PropTypes from 'prop-types';

export default function Search({ updateSearchFn, btnClickFn }) {
	return (
		<div className='main__searchbar'>
			<Input updateSearch={updateSearchFn}></Input>
			<Button type='submit' text='Buscar' clickFn={btnClickFn}></Button>
		</div>
	);
}

Search.propTypes = {
	updateSearchFn: PropTypes.func,
	btnClickFn: PropTypes.func,
};
