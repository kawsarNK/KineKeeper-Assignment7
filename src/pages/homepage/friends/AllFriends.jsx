import React, { use } from 'react';
import FriendsCard from '../../friendsDetail/FriendsCard';

const friendsPromise = fetch("/data.json").then((res) => res.json());

const AllFriends = () => {
    const data = use(friendsPromise);

    return (
        <div>
            <h2 className='ml-8 text-2xl font-bold text-gray-600'>Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">


                {data.map((friend, index) => (<FriendsCard key={index} friend={friend}></FriendsCard>

                ))}
            </div>

        </div>
    );
};

export default AllFriends;