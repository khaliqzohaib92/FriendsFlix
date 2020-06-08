import React, { Component } from 'react';

class Video extends Component {
    render() {
        debugger
        if(!this.props.video) return null;
        const {video} = this.props;
        const test = "https://i.pinimg.com/236x/98/a9/86/98a986ed1761a2b11990912fa1921983.jpg";
        return (
            <div className="video-container">
                <img className="video-thumbnail"  src={test}/>
            </div>
        );
    }
}

export default Video;