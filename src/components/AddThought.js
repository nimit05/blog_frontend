import React from 'react'

class AddThought extends React.Component{
    render(){
        return(
            <div className = "add_thought">
                <div className = "article_fields">
                    <div className = "fields">
                        <input type = "text" placeholder = "Thought Title" />
                    </div>
                    <div className = "fields_comp">
                        <input type = "text" placeholder = "What your thought about ?" />
                     </div>
                     <div className = "fields">
                        <textarea type = "text" placeholder = "Write your thought" />
                    </div>
                    <div className = "fields_comp">
                        <input type = "text" placeholder = "Enter tags" />
                    </div>
                    <div className = "post_article">
                        <button className = "post_btn">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddThought