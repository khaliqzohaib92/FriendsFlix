import React, { Component } from 'react';
import TopVideoContainer from './topvideo/top_video_container';
import CategoryContainer from './category/category_container';
import { findType } from '../../util/util';
import { TYPE_ALL } from '../../util/constants';
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {genre: undefined};
        this.type = findType(props.location.pathname);
        this.triggerRerender = this.triggerRerender.bind(this);
        this.fetchVideos = this.fetchVideos.bind(this);
    }

    

    componentDidMount(){
        if(this.props.genres.length==0)
            this.props.fetchGenres()
            .then(()=>{
                this.fetchVideos();
            });
        else{
                this.fetchVideos();
        }
        if(this.props.categories.length==0)
            this.props.fetchCategories(); 
    }

    fetchVideos(){
        let promise;
            const defaultGenre = this.props.genres[0];
            let type = findType(this.props.location.pathname);
            promise = this.props.fetchVideosByGenre(defaultGenre.id,
                type  == TYPE_ALL ? undefined : type );
            promise.then(
                ()=>{this.setState({genre: defaultGenre})}
            );
    }

    triggerRerender(id){
        const genres = this.props.genres;
        for (let index = 0; index < genres.length; index++) {
            if(genres[index].id == id){
                this.setState({genre: genres[index]});
                break;
            }
            
        }
    }

    render() {
        if(!this.state.genre) return  (
            <div className="placeholder"></div>
        );
        return (
            <div>
                <TopVideoContainer videos={this.props.videos} 
                genre={this.state.genre}
                triggerRerender={this.triggerRerender}
                />
                <div className="categories-videos-container">
                    {
                        this.props.categories.map((category)=>{
                            return(
                                <CategoryContainer 
                                videos={this.props.videos} 
                                genre={this.state.genre} 
                                category={category} key={category.id}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;