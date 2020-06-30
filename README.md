# Friends Flix

## Version 1.0.0 - [Live](https://friendsflix.herokuapp.com/#/)

## Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Setup](#setup)
- [Interactions](#interactions)
- [Features](#features)
  - [Movie List Carousel](#movie-list-carousel)
  - [Movies Hover and Details Page Animation](#movies-hover-and-details-page-animation)
  - [Search Movies](#search-movies)

## Introduction
Welcome to Freindsflix, it is a single page web application that is based on movies/tvshows streaming app [NetFlix](https://www.netflix.com/). FriendsFlix was built using Ruby on Rails, PostgreSQL, React and Redux. Please checkout live link here: [Live](https://friendsflix.herokuapp.com/#/)

## Technologies
* Ruby on Rails: 2.5.1, 5.2.3 
* Postgresql: 12.2
* React / Redux: ^16.13.1, ^4.0.5
* AWS S3
* Heroku

## Setup
To run this project, clone it to your local machine and then run:
```
npm install
```
Tt will install all the front end dependencies. Then run:
```
bunlde install
```
This will install all the back end dependencies. Make sure PostgreSQL is runing in backgorund and run:
```
bundle exec rails db:setup
```
This will create the database, run migration and seed it with the data. Now run:
```
rails s
```
This will run the rails server and you can navigate to http://localhost:3000/ to view the web application locally.

## Interactions
Hover over each thumbnail to get a preview of the movie or click the down arrow to see more detail about the video. On the thumbnail, you can go directly to the movie's watch page with the play button. The details page will display a synopsis, content rating, movie rating, runtime and a clip playing in the background. You can look for movies that falls in paticular genre by selecting the genre from the top nav bar. Searching for movies is that simple click and start typing movie name or by genre.

## Features

### Movie List Carousel

<h1 align="center">
  <img src="https://github.com/khaliqzohaib92/FriendsFlix/blob/master/app/assets/demoGif/scroll.gif" width="600" height="auto" align="center"/>
</h1>

First challange started when making horizontal scrolling with smooth transition after listing the movies in by category. Also keeping track of how many movies can fit in to the screen or how much to scoll on each click to keep the transition smooth.

Basic flow of the solution:

* Count number of items that can be displayed.
* Count number of left and right elements that are overflowed from the screen .
* When user click on the arrow either on the left or right, translating x with a value found by multiplying the width of the element with the number of feasible items. 
* Updating the values on each click
* Lastly setting the state(translateX) value to trigger render. 

```javascript

class Category extends Component {

    constructor(props){
      super(props);
      
      this.state={tranlateX: 0};

      this.elementsOnRight = 0;
      this.elementsOnLeft = 0;
      this.elements = null;
      this.totalElements = null;
      this.feasibleElments = null;
      this.elementWidth = 0;
    }

    componentDidMount(){
      initDefaultValues();
    }

    initDefaultValues(){
      if(!this.elements){
          //initialize with default values
          this.elements = document.getElementById(this.props.category.title+"main").childNodes;
          this.totalElements = this.elements.length;
          this.elementWidth = this.elements[0].offsetWidth
          this.feasibleElments = Math.floor(screen.availWidth/this.elementWidth);
          this.elementsOnLeft = this.totalElements - this.feasibleElments - this.elementsOnRight;
      }
    }

    scrollRight(e){
      //return if nothing left to scroll on left
      if(this.elementsOnRight+this.feasibleElments>= this.totalElements){
            return null;
      }
      this.elementsOnLeft = this.totalElements - this.feasibleElments - this.elementsOnRight;
      
      let tranlationX = 0;
      if(this.elementsOnLeft >= this.feasibleElments){
          //have to scroll all the feasible items
          tranlationX = this.feasibleElments*this.elementWidth;
          this.elementsOnRight += this.feasibleElments;
      }else
      {
          //have to scorll what left on left side of screen
          tranlationX = this.elementsOnLeft *this.elementWidth;
          this.elementsOnRight += this.elementsOnLeft;
          this.elementsOnLeft = 0;
      }

      //set state with updated translation.
      this.setState({tranlateX: ((this.state.tranlateX-tranlationX))});
    }

    
    scrollLeft(e){
      //return if nothing left to scroll on right
      if(this.elementsOnLeft+this.feasibleElments>= this.totalElements){
            return null;
      }
      this.elementsOnRight = this.totalElements - this.feasibleElments - this.elementsOnLeft;
      
      let tranlationX = 0;
      if(this.elementsOnRight >= this.feasibleElments){
          //have to scroll all the feasible items
          tranlationX = this.feasibleElments*this.elementWidth;
          this.elementsOnLeft += this.feasibleElments;
      }else{
          //have to scorll what left on right side of screen
          tranlationX = this.elementsOnRight *this.elementWidth;
          this.elementsOnLeft += this.elementsOnRight;
          this.elementsOnRight = 0;
      }
      //set state with updated translation.
      this.setState({tranlateX: ((this.state.tranlateX+tranlationX))});
    }
}
```


### Movies Hover and Details Page Animation
<h1 align="center">
  <img src="https://github.com/khaliqzohaib92/FriendsFlix/blob/master/app/assets/demoGif/hover.gif" width="600" height="auto" align="center"/>
</h1>

The next challange was to animate the scaling when movie item is hovered. 

Approach to solve this was:

* Firslty scale the hovered item.
* Select all the items that are prior to the hovered one and translate them with -35%.
* Then select element on the right and translated them to right with 35%

```css

// Thumbnails before the hovered item
.category-videos-container:hover .video-container {
  transform: translateX(-35%);
}

// Thumbnails after the hovered item
.video-container:hover ~ .video-container {
  transform: translateX(35%);
}

// The hovered item
.category-videos-container .video-container:hover {
  transform: scale(1.7);
  z-index: 1;
}
```


### Search Movies

<h1 align="center">
  <img src="https://github.com/khaliqzohaib92/FriendsFlix/blob/master/app/assets/demoGif/search.gif" width="600" height="auto" align="center"/>
</h1>


For the search, redirect user to search page as soon as user start typing and used debouncing to send the request when there is a pause of 2 secs or more in typing. Attaching the search word as query and passing it over to the videos controller to get a response build by jbuilder.  

```javascript
class Search extends Component {
   
  constructor(props){
    super(props);

    this.debounceTimer =undefined;
    this.debounce = this.debounce.bind(this);
  }

  componentDidUpdate(prevState){
    const query = this.props.query; 
    if(prevState.query != query){
        this.debounce(()=>{
            if(query.length > 0)
                this.props.searchByName(query)
        }, 2000)();
    }
  }

  debounce(func, delay){ 
    return ()=> { 
        if(this.debounceTimer)
            clearTimeout(this.debounceTimer) 
        this.debounceTimer  = setTimeout(func, delay) 
  } 
}
```