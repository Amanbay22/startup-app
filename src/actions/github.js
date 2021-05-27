import * as api from '../api';

export const getUser = (userName) => async(dispatch)=> {

	try{
		 const {data} = await api.fetchUser(userName);
		 data.found = true;
		 dispatch( {type: 'FETCH_USER', payload: data});

	} catch(error){
		dispatch( {type: 'FETCH_USER', payload: {found:false}});
	}

}


export const getUserRepositories = (userName,page,per_page) => async(dispatch)=> {

	try{
		 const {data} = await api.fetchRepositories(userName, page, per_page);
		 dispatch( {type: 'FETCH_ALL_REPOSITORIES', payload: data});
		 dispatch({type:'PAGE_NUMBER', payload:page});
	} catch(error){
		dispatch( {type: 'FETCH_ALL_REPOSITORIES', payload: []});
	}

}

