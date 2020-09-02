import React from 'react';
import user from '../img/user.svg'
import c_heart from '../img/c_heart.svg';
import heart from '../img/heart.svg'

class ArticleCont extends React.Component{
    render(){
        return(
            this.props.articles.map((e) => {
                return(
            <div className = "article_cont">
                    <div className = "name_det">
                    <div className = "user_det">
                        <img src = {user} alt = '' />
                        <div className = "det">
                            <div className = "name">{e.author.username}</div>
                            <div className = "date">{e.createdAt.slice(0,10)}</div>
                        </div>
                    </div>
                    <div className = "like_art">
                        <div className = "img">
                            <img src = {heart} />
                        </div>
                    </div>
                </div>
                <div className = "article_det">
                    <div className = "title">
                        {e.title}
                    </div>
                    <div className = "des">
                        {e.description}
                    </div>
                    <div className = "lowe_art_cont">
                        <div className = "read">
                            Read more ...
                        </div>
                        <div className = "tags">
                            {e.tagList}
                        </div>
                    </div>
                </div>
            </div>)})
        )
    }
}

export default ArticleCont