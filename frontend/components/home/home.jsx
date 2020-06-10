import React, { Component } from 'react';
import TopVideoContainer from './topvideo/top_video_container';
import CategoryContainer from './category/category_container';
import { findType } from '../../util/util';
import { TYPE_ALL } from '../../util/constants';
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {update: false};
        this.type = findType(props.location.pathname);

    }

    

    componentDidMount(){
        let promise;

        //no videos in state have to fetch from
        // if(this.type == TYPE_ALL){
            //all type of videos
            promise = this.props.fetchVideos();
        // }else {
        //     //videos of type movies or tvshows
        //     promise = this.props.fetchVideosByType(this.type);
        // }
        promise.then(
            ()=>{this.setState({update: true})}
        );
        

        if(this.props.categories.length ==0){
            this.props.fetchCategories();
        }
    }


    render() {
        if(!this.state.update) return null;
        return (
            <div>
                <TopVideoContainer videos={this.props.videos} update={this.state.update}/>
                <div className="categories-videos-container">
                    {
                        this.props.categories.map((category)=>{
                            return(
                                <CategoryContainer videos={this.props.videos} update={this.state.update} category={category} key={category.id}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;