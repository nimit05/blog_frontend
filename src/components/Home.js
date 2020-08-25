import React from 'react'
import {fetchData} from '../redux'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

class Home extends React.Component{
    // componentDidMount(){
    //     this.props.fetchData();
    // }
    render(){
        return(
            <div className = "home_page">
              <div className = "upper_head">
                <div className = "site_name">
                    <div className = "name">
                        thoughtLess
                    </div>
                    <div className = "moto">
                        Post your thoughts here and relax your mind..
                    </div>
                </div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        articles : state.article.articles,
        error : state.article.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData : bindActionCreators(fetchData , dispatch)
      };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Home)