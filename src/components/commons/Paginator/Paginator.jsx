import React, {useState} from "react";
import classes from './Paginator.module.css'


const Paginator = ({totalItemsCount,pagesSize,currentPage,onPageClick,portionSize = 20}) => {

    let pagesCount = Math.ceil(totalItemsCount / pagesSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div>


        <div className={classes.pages}>

            {pages
                .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map((p) => {
                return <span className={currentPage === p ? classes.selectedPage : undefined}
                             key={p.toString()}
                             onClick={(event) => {
                                 onPageClick(p);
                             }}>{p}</span>
            })}

        </div>
            <div>
                {portionNumber > 1 ?
                    <button className={classes.prevBTN} onClick={()=> {setPortionNumber(portionNumber - 1)}}>PREV</button> :
                    <button disabled>PREV</button>}

                {portionCount > portionNumber ?
                    <button className={classes.nextBTN} onClick={() => {setPortionNumber(portionNumber + 1) } }>NEXT</button>:
                    <button disabled>NEXT</button>}

            </div>
        </div>
    );
}

export default Paginator;