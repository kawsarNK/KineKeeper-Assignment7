import React, { useContext } from 'react';
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FriendContext } from '../../context/FriendContextProvider';

const TimeLine = () => {

    const { activities } = useContext(FriendContext);

    const getIcon = (type) => {
        if (type === 'call') return <MdOutlineWifiCalling3 />;
        if (type === 'text') return <MdOutlineTextsms />;
        if (type === 'video') return <CiVideoOn />;
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <select className="mb-6 px-6 py-2 pl-2 border rounded-lg">
                <option>All</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
            </select>

            <h1 className="text-3xl font-bold mb-6">Timeline</h1>

            <div className="space-y-4">

                {activities.length === 0 ? (
                    <p className="text-gray-400">No activity yet</p>
                ) : (
                    activities.map((item) => (
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
