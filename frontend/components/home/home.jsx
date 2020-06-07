import React, { Component } from 'react';

class Home extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchVideos();
        this.props.fetchCategories();
    }

    render() {
        const url  = (this.props.videos[0] && this.props.videos[0].video_url) ? this.props.videos[0].video_url : ""
        // const url = "https://media.w3.org/2010/05/sintel/trailer_hd.ogv";
        return (
            <div>
                <p>Top Video:</p>

                {/* <video src={url} width="500" height="281"  controls="controls" autoPlay="autoplay">
                </video> */}

                {/* <img src={img}/> */}
                <br/>
                <p>Categoreis: {JSON.stringify(this.props.categories)}</p>
                <br/>
                <p>Videos: {JSON.stringify(this.props.videos)}</p>
            </div>
        );
    }
}

export default Home;