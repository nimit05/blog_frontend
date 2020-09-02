import React from 'react'
import Header from '../components/Header'
import { PageLink } from '../redux'
import {connect} from 'react-redux'
import Home from '../components/Home'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import AddThought from '../components/AddThought'
import Settings from '../components/Settings'
import Profile from '../components/Profile'

class App extends React.Component{

  componentDidMount(){
    fetch('/api/login/session')
    .then((res) => res.json())
    .then((data) => {
      if(!data.token){
        localStorage.clear()
      }
    })
  }

  render(){
    let page = this.props.page
    return(
        <div>
          <div><Header /></div> 
              {page === 'signup' && <SignUp />}
              {page === 'home' && <Home />}
              {page === 'signin' && <SignIn />}
              {page === 'add_thought' && <AddThought />}
              {page === 'settings' && <Settings />}
              {page === 'profile' && <Profile />}
        </div>
    )
  }
}

const mapStateToProps = state => {
  return{
      page : state.page.page
     }
}

const mapDispatchToProps = dispatch => {
  return{
      PageLink : () => dispatch(PageLink())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App)