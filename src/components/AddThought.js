import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {PostArticle , PageLink} from '../redux'

class AddThought extends React.Component{
    render(){
        return(
            <div className = "add_thought">
                <div className = "article_fields">
                    <div className = "fields">
                        <input type = "text" placeholder = "Thought Title" id = "article_title" />
                    </div>
                    <div className = "fields_comp">
                        <input type = "text" placeholder = "What your thought about ?" id = "article_sub" />
                     </div>
                     <div className = "fields">
                        <textarea type = "text" placeholder = "Write your thought" id = "article_body" />
                    </div>
                    <div className = "fields_comp">
                        <input type = "text" placeholder = "Enter tags" id = "article_tags" />
                    </div>
                    <div className = "post_article">
                        <button className = "post_btn" onClick = {async() => {
                            let data = {
                                title : document.getElementById('article_title').value,
                                description : document.getElementById('article_sub').value,
                                body : document.getElementById('article_body').value,
                                tagList : document.getElementById('article_tags').value,
                            }
                            await this.props.PostArticle(data)
                            if(this.props.posted){
                                this.props.PageLink('home')
                            }else{
                                alert('error occured')
                            }
                        }}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        posted : state.PostArticle.posted,
        loading : state.PostArticle.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        PostArticle : bindActionCreators(PostArticle , dispatch),
        PageLink : bindActionCreators(PageLink , dispatch)
      };
}

export default connect(mapStateToProps ,mapDispatchToProps)(AddThought)