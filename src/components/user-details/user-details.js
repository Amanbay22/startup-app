import React from 'react';
import styles from './UserDetails.module.css';
import {ReactComponent as Group} from './shared.svg';
import {ReactComponent as Person} from './provate.svg';
import {useSelector} from 'react-redux';
import Spiner from '../spiner';
const UserDetails = ({loading})=>{

	const formatFollowers=(number)=>{
		if(number<1000){
			return number;
		}
		else {
			return `${Math.round(number/1000)}.${Math.round(number%100/100)}k`;
		}
	}

	const {login,avatar_url, name, following, followers, html_url} = useSelector(state=>state.user);

	return(
	<section className={styles.user_details}>
		{!loading?(<>
		<img src={avatar_url} alt="profile img" width= "280px" height= "280px"/>
		<p>{name}</p>
		<a href={html_url}>{login}</a>
		<div className={styles.profile_fol}>
			<Group/>
			<p>{formatFollowers(followers)} followers</p>		
			<Person/>
			<p>{following} following</p>
		</div></>):<Spiner/>}
	</section>
	)
}

export default UserDetails;