import React from 'react';
import styles from './Pages.module.css';
import {ReactComponent as  Search} from './image.svg';

const InitialPage = () =>{
	return(
		<div className={styles.initial}>
			<Search/>
			<p className={styles.text}>Start with searching a GitHub user</p>
		</div>
	)
}
export default InitialPage;