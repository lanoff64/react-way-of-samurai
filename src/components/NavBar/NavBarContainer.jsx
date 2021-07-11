import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return{
        state:state.navBar
    }
}

const mapDispatchToProps = () => {
    return{

    }
}
const NavBarContainer = connect(mapStateToProps,mapDispatchToProps)(NavBar)
export default NavBarContainer;