import React from 'react'
import { PageLink  , fetchData ,SignOut} from '../redux'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

 class Header extends React.Component{
     
    render(){
        return(
            <div className = "header">
                <div className = "in_header">
                    <div className = "name" onClick = {() => this.props.PageLink('home')} >
                        thought<span className = "light">Less</span>
                    </div>
                    {!this.props.loggedin ? (
                    <div className = "links">
                        <div className = {this.props.page == 'home' ? 'current' : 'path'}
                         onClick = {() => this.props.PageLink('home')}>Home</div>
                        <div className = {this.props.page == 'signup' ? 'current' : 'path'}
                         onClick = {() =>this.props.PageLink('signup')}>SignUp</div>
                        <div className = {this.props.page == 'signin' ? 'current' : 'path'}
                         onClick = {() => this.props.PageLink('signin')}>SignIn</div>
                    </div>
                    ) : 
                    ( 
                    <div className = "links">
                        <div className = {this.props.page == 'home' ? 'current' : 'path'} 
                        onClick = {() => this.props.PageLink('home')}>Home</div>
                        <div className = {this.props.page == 'add_thought' ? 'current' : 'path'} 
                        onClick = {() => this.props.PageLink('add_thought')}>New Thought</div>
                        <div className = {this.props.page == 'signin' ? 'current' : 'path'} 
                         >{this.props.username}</div>
                        <div className = {this.props.page == 'signup' ? 'current' : 'path'} 
                        onClick = {() =>this.props.SignOut()}>Log Out</div>
                    </div>
                )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        page : state.page.page,
        loading : state.article.loading,
        loggedin : state.login.loggedin,
        username : state.login.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        PageLink: bindActionCreators(PageLink, dispatch),
        fetchData : bindActionCreators(fetchData , dispatch),
        SignOut : bindActionCreators(SignOut , dispatch)
      };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Header)