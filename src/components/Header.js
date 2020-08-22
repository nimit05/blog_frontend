import React from 'react'
import { PageLink } from '../redux'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
 class Header extends React.Component{
     
    render(){
    console.log(this.props.PageLink)
        return(
            <div className = "header">
                <div className = "in_header">
                    <div className = "name">
                        thought<span className = "light">Less</span>
                    </div>
                    <div className = "links">
                        <div className = "path" onClick = {() => this.props.PageLink('home')}>Home</div>
                        <div className = "path" onClick = {() =>this.props.PageLink('signup')}>SignUp</div>
                        <div className = "path" onClick = {() => this.props.PageLink('signin')}>SignIn</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        page : state.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        PageLink: bindActionCreators(PageLink, dispatch)
      };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Header)