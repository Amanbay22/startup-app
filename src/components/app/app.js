import React,{useState, useEffect} from 'react';
import Navbar from '../navbar';
import 'normalize.css';
import './app.css';
import UserDetails from '../user-details';
import UserRepositories from '../user-repositories';
import {useSelector, useDispatch} from 'react-redux';
import {InitialPage, UserNotFoundPage} from '../pages';
import {getUserRepositories, getUser} from '../../actions/github';

const App = ()=>{
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	const [initial, setInitial] = useState(true);
	const [loadingForUser, setLoadingForUser] = useState(true);
	const [loadingForRepos, setLoadingForRepos] = useState(true);

	const updateData = async(text)=>{
		setLoadingForUser(true);
		setLoadingForRepos(true);
		await dispatch(getUser(text));
		await dispatch(getUserRepositories(text,1,4));
		setLoadingForUser(false);
		setLoadingForRepos(false);
	}

	useEffect(()=>{
		if(text!==''){
			updateData(text);
		}
	}, [text]);

	const user = useSelector(state=>state.user);

	const handlePageClick = async(e)=>{
		const page = e.selected;
		setLoadingForRepos(true)
		await dispatch(getUserRepositories(user.login, page+1, 4));
		setLoadingForRepos(false);
	}

	let renderComponent;
	if(user.found){
		if(initial){
			renderComponent = () =>
			<main className="container initial">
				<InitialPage/>
			</main>
		}
		else {
			renderComponent = () => 
			<main className="container">
				<div className="left_side">
				<UserDetails loading={loadingForUser}/>
				</div>
				<div className="rigth_side">
					<UserRepositories loading={loadingForRepos} handlePageClick={handlePageClick}/>
				</div>
			</main>
		}
	}
	else {
		renderComponent = () => 	
		<main className="container initial">
			<UserNotFoundPage/>
		</main>
	}
	return(
		<>
		<Navbar setText={setText} setInitial={setInitial}/>
		{renderComponent()}
		</>
	)
}
export default App;