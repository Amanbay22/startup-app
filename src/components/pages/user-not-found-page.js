import React from 'react';
import {ReactComponent as  Union} from './Union.svg';
import styles from './Pages.module.css';

const UserNotFoundPage = ()=>{
	return(
		<div className={styles.user}>
			<Union/>
			<p className={styles.text}>User not found</p>
		</div>
	)
}
export default UserNotFoundPage;