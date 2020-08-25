import React from 'react'
import { CreateUser , PageLink } from '../redux'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import lod from '../img/loading.svg'

 class SignUp extends React.Component{
    render(){
        return(
            <div className = "signUp">
                <div className = "signup_head">
                    Sign Up
                </div>
                <div className = "su_ques">
                    <a href = "#" onClick = {() => {
                        this.props.PageLink('signin')
                    }}>
                        Have an account ?
                    </a>
                </div>
                <div className = "fill_info">
                    <input type = "text" placeholder = "Username" id = "su_username" />    
                </div>
                <div className = "fill_info">
                    <input type = "email" placeholder = "Email" id = "su_email" />    
                </div>
                <div className = "fill_info">
                    <input type = "password" placeholder = "Password" id = "su_pass" />    
                </div>
                <div className = "sub_btn">
                    <button onClick = {async() => {
                        let data  = {
                            username : document.getElementById('su_username').value,
                            email : document.getElementById('su_email').value,
                            password : document.getElementById('su_pass').value
                        }
                        await this.props.CreateUser(data);
                        if(this.props.loggedin){
                            await this.props.PageLink('home')
                        }

                    }}>{this.props.loading ? <img src = {lod} /> : 'SignUp'}</button>
                </div>
            </div>
        )
    }
}
  
const mapStateToProps = state => {
    return{
        loading : state.signup.loading,
        loggedin : state.login.loggedin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        CreateUser: bindActionCreators(CreateUser, dispatch),
        PageLink: bindActionCreators(PageLink, dispatch)
      };
}
  
  export default connect(mapStateToProps , mapDispatchToProps)(SignUp)