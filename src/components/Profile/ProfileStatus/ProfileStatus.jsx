import React from "react";
import classes from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }


    activeEditMode = () => {

        this.setState(
            {editMode: true}
        )
    }

    deActiveEditMode = () => {
        this.setState(
            {editMode: false}
        );
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) =>{
       this.setState(
           {
               status: e.target.value
           }
       )
    }
    handleFocus = (event) => event.target.select()

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            });
        }
    }

    render() {
        return (
            <div>

                <div onDoubleClick={this.activeEditMode} className={classes.status}>
                    <div> Status:</div>
                    {!this.state.editMode &&
                    <div className={classes.status_span}>
                        <span onDoubleClick={this.activeEditMode} >{this.props.status || '--------'}</span>
                    </div>
                    }

                    {this.state.editMode &&
                    <div className={classes.status_span}>
                        <input
                            maxLength="300"
                            size={58}
                            placeholder={'Ваш статус'}
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onFocus={this.handleFocus}
                            onBlur={this.deActiveEditMode}
                            value={this.state.status}
                        />
                    </div>
                    }

                </div>

            </div>
        );
    }

}

export default ProfileStatus;

