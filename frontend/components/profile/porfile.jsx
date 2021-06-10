import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='feed-main'>
                <div className='feed-greeting'>
                    <h3>Hello, {this.props.user.fname}</h3>
                    <h5>Your profile is coming soon.</h5>
                </div>
            </div>
        )


    //     return (
    //         <div className="profile-main">
    //             <div className="user-details">
    //                 <div className="user-image">
                                         
    //                 </div>

    //                 <div className="user-info">
    //                     <p className="user-name">{this.props.user.fname} {this.props.user.lname}</p>
    //                     <p className="user-title">Title: (ex: Soprano)</p>
    //                     <p className="user-affilates">Affilated Companies: (ex: SF Opera) </p>
    //                 </div>
    //             </div>

    //             <div className="user-content">
    //                 <div className="user-repertoire">
    //                     <div className="user-audio">
    //                         <p className="user-content-header">My Audio Files:</p>
    //                         <div className="user-audio-grid">
    //                             <p className="audio-file">Audio file will go here</p>
    //                             <p className="audio-file">Audio file will go here</p>
    //                             <p className="audio-file">Audio file will go here</p>
    //                             <p className="audio-file">Audio file will go here</p>
    //                             <p className="audio-file">Audio file will go here</p>
    //                             <p className="audio-file">Audio file will go here</p>
    //                             <p className="audio-file">Audio file will go here</p>
    //                             <p className="audio-file">Audio file will go here</p>
    //                             <p className="audio-file">Audio file will go here</p>
    //                         </div>
    //                     </div>
    //                     <div className="user-video">
    //                         <p className="user-content-header">My Videos:</p>
    //                         <div className="user-video-grid">
    //                             <p className="video-file">Video file will go here</p>
    //                             <p className="video-file">Video file will go here</p>
    //                             <p className="video-file">Video file will go here</p>
    //                             <p className="video-file">Video file will go here</p>
    //                             <p className="video-file">Video file will go here</p>
    //                             <p className="video-file">Video file will go here</p>
    //                             <p className="video-file">Video file will go here</p>
    //                             <p className="video-file">Video file will go here</p>
    //                             <p className="video-file">Video file will go here</p>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className="user-posts">
    //                     <p className="user-content-header">My Posts</p>
    //                     <div className="user-posts-grid">
    //                         <p className="post">A post will go here</p>
    //                         <p className="post">A post will go here</p>
    //                         <p className="post">A post will go here</p>
    //                         <p className="post">A post will go here</p>
    //                         <p className="post">A post will go here</p>
    //                         <p className="post">A post will go here</p>
    //                         <p className="post">A post will go here</p>
    //                         <p className="post">A post will go here</p>
    //                         <p className="post">A post will go here</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    }

}

export default Profile;