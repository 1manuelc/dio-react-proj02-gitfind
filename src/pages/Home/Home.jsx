import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header.jsx';
import Search from '../../components/Search/Search.jsx';
import Profile from '../../components/Profile/Profile.jsx';
import Repository from '../../components/Repository/Repository.jsx';

import User from '../../utils/classes/User.jsx';
import Repo from '../../utils/classes/Repo.jsx';

import background from '../../../public/background.png';

import './Home.css';

const Home = () => {
	const [search, setSearch] = useState('');
	const [currentUser, setCurrentUser] = useState(null);
	const [repos, setRepos] = useState(null);

	const handleGetUser = async () => {
		if (search) {
			const response = await fetch(`https://api.github.com/users/${search}`);
			const jsonUser = await response.json();

			if (!response.ok) setCurrentUser(null);
			else {
				const user = new User(
					jsonUser.name,
					jsonUser.bio,
					jsonUser.login,
					jsonUser.avatar_url,
					jsonUser.html_url
				);

				setCurrentUser(user);
			}
		} else setCurrentUser(null);
	};

	const handlePutUser = () => {
		return currentUser?.name ? (
			<Profile {...currentUser}></Profile>
		) : (
			<p>Usuário inexistente ou limite de solicitações á API excedido.</p>
		);
	};

	const handleGetRepos = async () => {
		if (currentUser) {
			const response = await fetch(
				`https://api.github.com/users/${currentUser.username}/repos`
			);

			if (!response.ok) setRepos(null);
			else {
				const repos = await response.json();

				const reposArray = repos.map((repo) => {
					return new Repo(repo.name, repo.description, repo.html_url);
				});

				setRepos(reposArray);
			}
		} else setRepos(null);
	};

	const handlePutRepos = () => {
		if (repos?.length > 0) {
			return repos.map((r, i) => (
				<li key={i}>
					<Repository
						name={r.name}
						description={r.description}
						url={r.url}
					></Repository>
				</li>
			));
		} else return <p>Sem repositórios para mostrar</p>;
	};

	useEffect(() => {
		if (currentUser) {
			handleGetRepos(currentUser.username);
			handlePutRepos();
		} else {
			setRepos(null);
			handlePutRepos();
		}
	}, [currentUser]);

	return (
		<div className='Home'>
			<Header></Header>

			<main>
				<img
					src={background}
					className='main__background'
					alt='GitHub icon overlay'
				/>
				<div className='main__content'>
					<Search
						className='main__search'
						updateSearchFn={setSearch}
						btnClickFn={handleGetUser}
					></Search>

					{handlePutUser()}

					<h3>
						Repositórios
						{repos ? ` (${repos.length} público(s) encontrado(s)):` : ''}
					</h3>
					<ul className='main__repositories'>{handlePutRepos()}</ul>
				</div>
			</main>
		</div>
	);
};

export default Home;
