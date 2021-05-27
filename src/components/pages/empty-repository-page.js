import React from 'react';
import {ReactComponent as Empty} from './empty.svg';
import styles from './Pages.module.css';
const EmptyRepositoryPage = () =>{
	return(
		<div className={styles.empty}>
			<Empty/>
			<p className={styles.text}>Repository list is empty</p>
		</div>
	)
}
export default EmptyRepositoryPage;