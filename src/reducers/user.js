const user = (user={found:true}, action) => {
	switch(action.type){
		 case 'FETCH_USER':
			  return  action.payload;
		 default:
			  return user;
	}
}
export default user;