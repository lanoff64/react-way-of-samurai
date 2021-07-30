import React from "react";
import classes from "../../ProfileStatus/ProfileStatus.module.css";




class AboutMe extends React.Component {


    state = {
        editMode: false,
        aboutMe: this.props.about
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
        //санка о себе
        this.props.updateUserAbout(this.state.aboutMe,'Ruslan','Frontend-developer',true);
    }

    onAboutChange = (e) =>{
        this.setState(
            {
                aboutMe: e.target.value
            }
        )
    }
    handleFocus = (event) => event.target.select()

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.aboutMe !== this.props.aboutMe){
            this.setState({
                aboutMe:this.props.aboutMe
            });
        }
    }

    render() {
        return (
            <div>

                <div onDoubleClick={this.activeEditMode} className={classes.status}>
                    {!this.state.editMode &&
                    <div className={classes.status_span}>
                        <div>{this.props.aboutMe || '--------'}</div>
                    </div>
                    }

                    {this.state.editMode &&
                    <div className={classes.status_span}>
                        <input

                            placeholder={'О себе'}
                            onChange={this.onAboutChange}
                            autoFocus={true}
                            onFocus={this.handleFocus}
                            onBlur={this.deActiveEditMode}
                            value={this.state.aboutMe}
                        />
                    </div>
                    }

                </div>


            </div>
        );
    }


}

export default AboutMe;

