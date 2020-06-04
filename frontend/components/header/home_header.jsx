import React from 'react';

const HomeHeader = (props)=>{
        return (
            <header>
                <nav className="splash-nav">
                        <a href="#">
                            <img className="splash-nav-logo" src={window.logo} alt="FriendsFlix logo"/>
                        </a>
                    </nav>
            </header>
        );
}

export default HomeHeader;