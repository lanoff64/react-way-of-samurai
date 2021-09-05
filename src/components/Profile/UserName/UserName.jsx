import classes from "../Description/Disc.module.css";
import React from "react";



const UserName = ({profile}) => {
    return (
        <div className={classes.userDecsName} >
            {profile.fullName}
            <div className={classes.divDescLabelName}>
                id:{profile.userId}
            </div>
        </div>
    )
}
export default UserName;