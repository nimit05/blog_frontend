import React from 'react'
import Header from '../components/Header'
import { PageLink } from '../redux'
import {connect} from 'react-redux'
import Home from '../components/Home'
import SignUp from '../components/SignUp'

class App extends React.Component{
  render(){
    let page = this.props.page
    console.log(page)
    return(
        <div>
          <div><Header /></div> 
              {page === 'signup' && <SignUp />}
              {page === 'home' && <Home />}
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
  return{
      PageLink : () => dispatch(PageLink())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App)