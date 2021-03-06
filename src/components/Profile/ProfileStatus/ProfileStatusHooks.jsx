import React, {useEffect, useState} from "react";
import classes from './ProfileStatus.module.css';


const ProfileStatusHooks = ({isOwner, ...props}) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true);
    }

    const deActiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    const handleFocus = (event) => event.target.select();
    return (

        <div className={classes.profileStatusHooks}>
            {isOwner ?
                <div
                    onDoubleClick={activeEditMode}
                    className={classes.status}>
                    {!editMode &&
                    <div className={classes.statusGrid}>
                        <div className={classes.statusArea}>
                            {props.status || '----'}
                        </div>

                        <div className={classes.profileStatusHooksBtn}>
                            <button onClick={activeEditMode}>Смена статуса</button>
                        </div>

                    </div>

                    }

                    {editMode &&
                    <div className={classes.textArea}>
                        <textarea
                            maxLength="300"
                            cols="60" rows="5"
                            placeholder={'Ваш статус'}
                            onChange={onStatusChange}
                            autoFocus={true}
                            onFocus={handleFocus}
                            onBlur={deActiveEditMode}
                            value={status}
                        />
                        <div>
                            <button onClick={deActiveEditMode}>Сохранить</button>
                        </div>

                    </div>
                    }
                </div>
                :
                <div className={classes.statusArea}>
                    {props.status || '----'}
                </div>}

        </div>
    );

}

export default ProfileStatusHooks;

