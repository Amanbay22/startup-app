import React,{useState} from 'react';
import styles from './Navbar.module.css';
import {ReactComponent as Logo} from './Vector.svg';
import {ReactComponent as SearchIcon} from './image.svg';
const Navbar = ({setText, setInitial}) => {
	const [search, setSearch] = useState("");
	const onHandleSearch = (e)=>{
		setSearch(e.target.value);
	}
	const onHandleSubmit = (e)=>{
		e.preventDefault();
		setText(search);
		setInitial(false);
	}
	return(
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<Logo/>
				</div>
				<div className={styles.search}>
					<div className={styles.search__icons}>
						<SearchIcon/>
					</div>
					<form onSubmit={onHandleSubmit}>
						<input type="text" value={search} onChange={onHandleSearch}/>
					</form>
				</div>
			</nav>
		</header>
	);
}
export default Navbar;