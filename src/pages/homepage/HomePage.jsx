import Banner from './banner/Banner';
import AllFriends from './friends/AllFriends';
import FriendsDetails from '../friendsDetail/FriendsDetails';

const HomePage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <AllFriends />
            <FriendsDetails></FriendsDetails>

        </div>
    );
};

export default HomePage;