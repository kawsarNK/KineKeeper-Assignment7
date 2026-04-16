import { useLoaderData, useParams } from 'react-router';

const FriendsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    if (!data) {
        return <div>Loading details...</div>;
    }

    const expectedFriend = data.find(friend => String(friend.id) === String(id));
    return (
        <div className="p-10 text-center">
            <h1 className="text-2xl font-bold">{expectedFriend.name}</h1>
            <p>Status: {expectedFriend.status}</p>
            <p>Last Contact: {expectedFriend.lastContact}</p>
        </div>
    );
};

export default FriendsDetails;