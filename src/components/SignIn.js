import React from 'react';
import { login , PageLink } from '../redux'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import lod from '../img/loading.svg'

 class SignIn extends React.Component{
    render(){
        return(
            <div className = "signUp">
                <div className = "signup_head">
                    Sign In
                </div>
                <div className = "su_ques">
                    <a href = "#" onClick = {() => {
                        this.props.PageLink('signup')
                    }}>
                        Need an account ?
                    </a>
                </div>
                <div className = "fill_info">
                    <input type = "text" placeholder = "Username" id = "si_username" />    
                </div>
                <div className = "fill_info">
                    <input type = "password" placeholder = "Password" id = "si_pass" />    
                </div>
                <div className = "sub_btn">
                    <button onClick = {async() => {
                        let data  = {
                            username : document.getElementById('si_username').value,
                            password : document.getElementById('si_pass').value
                        }
                        await this.props.login(data) 
                        if(this.props.loggedin == true){
                            this.props.PageLink('home')
                        }else{
                            alert('error occured')
                        }
                    }}>{this.props.loading ? <img src = {lod} /> : 'SignIn'}</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        loading : state.login.loading,
        loggedin : state.login.loggedin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: bindActionCreators(login, dispatch),
        PageLink: bindActionCreators(PageLink, dispatch),
      };
}
  
  export default connect(mapStateToProps , mapDispatchToProps)(SignIn)