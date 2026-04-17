import React, { useContext, useState } from 'react';
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FriendContext } from '../../context/FriendContextProvider';




const TimeLine = () => {

    const [filter, setFilter] = useState('all');
    const { activities } = useContext(FriendContext);
    const filteredActivities = activities.filter(item => {
        if (filter === 'all') return true;
        return item.type.toLowerCase() === filter;
    });

    const getIcon = (type) => {
        if (type === 'call') return <MdOutlineWifiCalling3 />;
        if (type === 'text') return <MdOutlineTextsms />;
        if (type === 'video') return <CiVideoOn />;
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="mb-6 px-4 py-2 border rounded-lg"
            >
                <option value="all">All</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select>

            <h1 className="text-3xl font-bold mb-6">Timeline</h1>

            <div className="space-y-4">

                {filteredActivities.length === 0 ? (
                    <p className="text-gray-400">No activity found</p>
                ) : (
                    filteredActivities.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border">

                            <div className="text-xl bg-yellow-100 p-3 rounded-full">
                                {getIcon(item.type)}
                            </div>

                            <div>
                                <p className="font-semibold text-gray-700 capitalize">
                                    {item.type} with <span className="text-blue-600">{item.name}</span>
                                </p>
                                <p className="text-sm text-gray-400">{item.date}</p>
                            </div>

                        </div>
                    ))
                )}

            </div>
        </div>
    );
};

export default TimeLine;
