const page = (page = 1, action) => {
	switch(action.type){
		case 'PAGE_NUMBER':
			return action.payload;
		default:
			return page;
	}
}
export default page;