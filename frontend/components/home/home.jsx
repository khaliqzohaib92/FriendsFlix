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
        this.props.fetchGenres()
        .then(()=>{
            let type = findType(this.props.location.pathname);
            promise = this.props.fetchVideosByGenre(this.props.genres[0].id,
               type  == TYPE_ALL ? undefined : type );
            promise.then(
                ()=>{this.setState({update: true})}
            );
        });
        
        this.props.fetchCategories(); 
    }


    render() {
        if(!this.state.update) return null;
        return (
            <div>
                <TopVideoContainer videos={this.props.videos} update={this.state.update} genre={this.props.genres[0]}/>
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