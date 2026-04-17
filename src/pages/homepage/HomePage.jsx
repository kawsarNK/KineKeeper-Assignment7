import Banner from './banner/Banner';
import AllFriends from './friends/AllFriends';
import FriendsDetails from '../friendsDetail/FriendsDetails';
import { Suspense } from 'react';

const HomePage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <Suspense fallback={
                <div className="flex justify-center items-center min-h-[300px]">
                    <span className="loading loading-spinner loading-lg text-green-700"></span>
                </div>
            }>
                <AllFriends />
            </Suspense>
            <FriendsDetails></FriendsDetails>

        </div>
    );
};

export default HomePage;