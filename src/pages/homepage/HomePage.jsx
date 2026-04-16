import React from 'react';
import Banner from './banner/Banner';
import Friends from './friends/AllFriends';
import AllFriends from './friends/AllFriends';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <AllFriends/>
        </div>
    );
};

export default HomePage;