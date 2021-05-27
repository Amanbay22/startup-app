const repository = (repositories=[], action) => {
	switch(action.type){
		 case 'FETCH_ALL_REPOSITORIES':
			  return  action.payload;
		 default:
			  return repositories;
	}
}
export default repository;