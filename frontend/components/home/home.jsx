import React, { Component } from 'react';
import TopVideoContainer from './topvideo/top_video_container';
import { TYPE_MOVIES } from '../../util/constants';
import CategoryContainer from './category/category_container';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {update: false};

    }

    componentDidMount(){
        this.props.fetchVideos().then(
            ()=>{this.setState({update: true})}
        );
        this.props.fetchCategories();
    }

    render() {
        return (
            <div>
                <TopVideoContainer type={TYPE_MOVIES} update={this.state.update}/>
                <div className="categories-videos-container">
                    {
                        this.props.categories.map((category)=>{
                            return(
                                <CategoryContainer category={category} key={category.id}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;