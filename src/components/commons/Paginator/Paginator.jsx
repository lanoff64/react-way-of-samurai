import React from "react";
import classes from './Paginator.module.css'


const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.pages}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : undefined}
                             key={p.toString()}
                             onClick={(event) => {
                                 props.onPageClick(p);
                             }}>{p}</span>
            })}
        </div>
    );
}

export default Paginator;
