import React,{useState} from "react";
import classes from './ProfileStatus.module.css';


const ProfileStatusHooks = (props) => {

    let [editMode, seStatus] = useState(false)
    let [status,setStatus] = useState(props.status);

    const activeEditMode = () => {
        seStatus(true);
    }

    const deActiveEditMode = () => {
        seStatus(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    const handleFocus = (event) => event.target.select();

        return (
            <div>

                <div
                    onDoubleClick={activeEditMode}
                    className={classes.status}>
                    <div> Status:</div>
                    {!editMode &&
                    <div className={classes.status_span}>
                        <div>{props.status || '--------'}</div>
                    </div>
                    }

                    {editMode &&
                    <div className={classes.status_span}>
                        <input
                            maxLength="300"
                            size={58}
                            placeholder={'Ваш статус'}
                            onChange={onStatusChange}
                            autoFocus={true}
                            onFocus={handleFocus}
                            onBlur={deActiveEditMode}
                            value={status}
                        />
                    </div>
                    }
                </div>
            </div>
        );

}

export default ProfileStatusHooks;
