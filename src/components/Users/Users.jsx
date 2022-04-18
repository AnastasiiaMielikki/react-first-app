import axios from "axios";
import React from "react";
import styles from './users.module.css';

class Users extends React.Component {
    
   componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)  
    }); 
   }

   onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)  
    }); 
   }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i<= pagesCount; i++) {
            if (i <= 5 || i == pagesCount) //для скрытия промежуточных страниц
            pages.push(i);
        }

        return <div>
            <div className={styles.usersPagination}>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage} 
                    onClick={(e)=> {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
        {
            this.props.users.map ( u => <div key={u.id} className={styles.userContainer}>
                <div className={styles.leftBlock}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small :"http://placekitten.com/100/100" } alt="" />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {this.props.unfollow(u.id)}}>follow</button> 
                        : <button onClick={() => {this.props.follow(u.id)}}>unfollow</button>}
                        
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
                </div> )
        }
    </div>
    }
}

export default Users;
