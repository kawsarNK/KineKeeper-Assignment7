import React from 'react';
import Banner from './banner/Banner';
import Friends from './friends/AllFriends';
import AllFriends from './friends/AllFriends';

const HomePage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <AllFriends />
        </div>
    );
};

export default HomePage;