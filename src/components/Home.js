import React from 'react'
import {fetchData , feedType ,getArticles} from '../redux'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import ArticleCont from './Article_Cont';

class Home extends React.Component{
    componentDidMount(){
        this.props.fetchData();
        this.props.getArticles('nimit05');

        console.log(this.props.myarticles)
    }
    render(){
        return(
            <div className = "home_page">
              {!this.props.loggedin ? (
              <div className = "upper_head">
                <div className = "site_name">
                    <div className = "name">
                        thoughtLess
                    </div>
                    <div className = "moto">
                        Post your thoughts here and relax your mind..
                    </div>
                </div>
                <div className = "feed_head_out">
                    <div className = "head_name">
                        Global Feed
                    </div>
                </div>
                <ArticleCont 
                articles = {this.props.articles} />
              </div>
              ) : (
                  <div className = "feed_slider">
                    <div className = "feed_head">
                        <div className = "head_name" onClick = {() => {
                            this.props.feedType('your')
                        }}>
                            Your Feed
                        </div>
                        <div className = "head_name" onClick = {() => {
                            this.props.feedType('global')
                        }}>
                            Global Feed
                        </div>
                    </div>
                    {this.props.feed === 'your' ? (
                     <ArticleCont articles = {this.props.articles} />
                    ) : (<ArticleCont articles = {this.props.articles} />)}
                  </div>
              )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        articles : state.articles.articles,
        error : state.articles.error,
        loggedin : state.login.loggedin,
        feed : state.page.feed,
        myarticles : state.MyArticles.articles,
        username : state.login.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData : bindActionCreators(fetchData , dispatch),
        feedType : bindActionCreators(feedType , dispatch),
        getArticles : bindActionCreators(getArticles , dispatch)
      };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Home)