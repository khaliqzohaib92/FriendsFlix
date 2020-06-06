import React, { Component } from 'react';

class Home extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchCategories();
        this.props.fetchVideos();
    }

    render() {
        return (
            <div>
                <p>Categoreis: {JSON.stringify(this.props.categories)}</p>
                <br/>
                <p>Videos: {JSON.stringify(this.props.videos)}</p>
            </div>
        );
    }
}

export default Home;