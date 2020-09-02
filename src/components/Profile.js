import React from 'react'

export default class Profile extends React.Component{
    render(){
        return(
            <div className = "profile">
                <div className = "profile_pic">
                    <div className = "info_bar">
                        <div className = "pic">nimit05</div>
                        <div className = "edit_pro">
                            <button>Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}