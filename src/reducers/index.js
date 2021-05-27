import { combineReducers } from 'redux';
import user from './user';
import repository from './repository';
import page from './page';
export default combineReducers({
	repository,
   user,
	page
});