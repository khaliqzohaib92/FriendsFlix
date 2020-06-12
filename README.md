# Friends Flix

------

## Introduction
Welcome to Freindsflix, signing up will take you to the home page having top movie along with the movies and TV shows sorted by categories. You can slide back and forth to find more movies related to a category. You can also use the search bar in the top navigation section to find movies by name or genre. Clicking on the movie will show you it's details.

## Demo
This app was built with Ruby on Rails and React Redux. Please checkout a working demo here: https://friendsflix.herokuapp.com/#/


## Built With
* Ruby on Rails
* Postgres
* React Redux
* AWS
* Heroku

## Interactions
Hover over each thumbnail to get a preview of the movie or click the down arrow to see more detail about the video. On the thumbnail, you can go directly to the movie's watch page with the play button. The details page will display a synopsis, content rating, movie rating, runtime and a clip playing in the background. 

You can look for movies that falls in paticular genre by selecting the genre from the top nav bar. 

Searching for movies is that simple click and start typing movie name or by genre.

## Features

<h1 align="center">
  <img src="" width="600" height="auto" align="center"/>
</h1>


### Movie List Carousel

The first challange started when making horizpntal scrolling with smooth transition after listing the movies in the by category. Also keeping track of how many movies can fit in to the screen or how much to scoll on each click to keep the transition smooth.

To solve this issue, I have added some proporties to keep track on the change in the values. Basic flow of the solution was:

* Count number of items that can be displayed(feasibleElements).
* Count number of left(elementsOnLeft) right(elementsOnRight) elements that are overflowed from the screen .
* When user click on the arrow translating x with a value found by multiplying the width of the element with the number of feasible items. 
* Updating the values with each click
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
  <img src="" width="600" height="auto" align="center"/>
</h1>

The next challange was to animate the scaling when movie item is hovered and also displaying some of the buttons and movie details. 

Approach to solve this was:

* Firslty scale the hovered item.
* Select all the items that are prior to the hovered on and translate them with -35% (moving them to the left).
* Then select element on the right and translated them to right with 35%

```css

// Thumbnail before the hovered item
.category-videos-container:hover .video-container {
  transform: translateX(-35%);
}

// Thumbnail after the hovered item
.video-container:hover ~ .video-container {
  transform: translateX(35%);
}

// The hovered item
.category-videos-container .video-container:hover {
  transform: scale(1.7);
  z-index: 1;
}
```


### Search Page

<h1 align="center">
  <img src="" width="600" height="auto" align="center"/>
</h1>


For the search, redirect user to search page as soon as user start typing and used debouncing to send the request when there is a pause of 2 secs or more in typing. Attaching the search word as query and passing it over to the videos controller to get a response build by jbuilder and rendring it to the view.  

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