import React from 'react';
import ReactDOM from 'react-dom'
// add DOMContentLoaded Listener to render, when html finish loading
document.addEventListener("DOMContentLoaded", ()=>{
    //load success

    const rootElemenet = document.getElementById('root');

    //render content to dom
    ReactDOM.render(<h1>Welcome to FriendsFlix</h1>, rootElemenet);
});