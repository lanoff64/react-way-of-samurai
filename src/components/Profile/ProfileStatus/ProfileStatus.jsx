import React from "react";
import classes from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        value: this.props.status
    };

    activeEditMode = () => {
        debugger
        this.setState(
            {editMode: true}
        )
    }
    deActiveEditMode = () => {
        this.setState(
            {editMode: false}
        )
    }
    textChange = (e) => {
        this.setState(
            {
                value: e.target.value
            }
        )
    }

    handleFocus = (event) => event.target.select()

    render() {
        return (
            <div>

                <div  onDoubleClick={this.activeEditMode} className={classes.status}>
                   <div> Status: </div>
                    {!this.state.editMode &&
                    <div className={classes.status_span}>
                        <div >{this.state.value}</div>
                    </div>
                    }

                    {this.state.editMode &&
                    <div className={classes.status_span}>
                        <input
                            maxLength="100"
                            size={58}
                            placeholder={'Ваш статус'}
                            onChange={this.textChange}
                            autoFocus={true}
                            onFocus={this.handleFocus}
                            onBlur={this.deActiveEditMode}
                            value={this.state.value}
                           />
                    </div>
                    }

                </div>


            </div>
        );
    }


}

export default ProfileStatus;

