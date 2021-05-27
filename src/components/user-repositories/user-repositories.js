import React from 'react';
import styles from './UserRepositories.module.css';
import ReactPaginate from 'react-paginate';
import {useSelector} from 'react-redux';
import {EmptyRepositoryPage} from '../pages';

import Spiner from '../spiner';

const UserRepositories = ({handlePageClick, loading})=>{

	const {public_repos} = useSelector(state=>state.user);
	const repositories = useSelector(state=>state.repository);
	const reposClass = public_repos>0?styles.repositories:`${styles.repositories} ${styles.empty}`;
	const page = useSelector(state=>state.page);
	return(
		<section className={reposClass}>
			{!loading?public_repos!==0?(<>
			<h1>Repositories ({public_repos})</h1>
			<div className={styles.repositories_list}>
				{
					repositories.map(({id,description, name, html_url})=>{
						return(
							<div key ={id}className={styles.repositories_item}>
								<a href={html_url}>{name}</a>
								<p>{description}</p>
							</div>
							)
					})
				}
				
			</div>
			
			<div className={styles.pagination_block}>
				<p>{4*(page-1)+1}-{4*(page-1) + repositories.length} of {public_repos} items</p>
				<ReactPaginate
				previousLabel={"<"}
				nextLabel={">"}
				pageCount={Math.ceil(public_repos/4)}
				marginPagesDisplayed={1}
				pageRangeDisplayed={2}
				containerClassName={styles.pagination}
				activeClassName={styles.active}
				onPageChange={handlePageClick}
				forcePage={page-1}
				/>
			 </div></>):<EmptyRepositoryPage/>:<Spiner/>}
		</section>)

}
export default UserRepositories;