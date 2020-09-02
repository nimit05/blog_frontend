import React from 'react'

export default class Settings extends React.Component{
    render(){
        return(
            <div className = "settings">
                <div className = "user_settings">
                    <h1>Your Settings</h1>
                    <div className = "user_set_div">
                        <input type = "text" placeholder = "URL of a profile picture" id = "img_url" />
                    </div>
                    <div className = "user_set_div">
                        <input type = "text" placeholder = "Username" id = "img_url" />
                    </div>
                    <div className = "user_set_div">
                        <textarea type = "text" placeholder = "Short bio about you" id = "img_url" />
                    </div>
                    <div className = "user_set_div">
                        <input type = "email" placeholder = "Email Id" id = "img_url" />
                    </div>
                    <div className = "user_set_div">
                        <input type = "password" placeholder = "New password" id = "img_url" />
                    </div>
                    <div className = "user_set_btn">
                        <button>Update Settings</button>
                    </div>
                </div>
            </div>
        )
    }
}