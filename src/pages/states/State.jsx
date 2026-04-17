import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContextProvider';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const State = () => {

    const { activities } = useContext(FriendContext);

    const counts = {
        call: 0,
        text: 0,
        video: 0
    };

    activities.forEach(item => {
        const type = item.type.toLowerCase();
        if (counts[type] !== undefined) {
            counts[type]++;
        }
    });


    const data = [
        { name: 'Call', value: counts.call },
        { name: 'Text', value: counts.text },
        { name: 'Video', value: counts.video }
    ];

    const COLORS = ['#34D399', '#60A5FA', '#FBBF24']; // green, blue, yellow

    return (
        <div className="max-w-4xl mx-auto p-6">

            <h2 className="text-3xl font-bold text-center mb-8">
                Friendship Analytics
            </h2>


            {activities.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 text-center p-6">

                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        No Activity Found
                    </h2>

                    <p className="text-gray-400 text-sm max-w-xs">
                        You haven’t interacted with any friends yet. Start by making a call, sending a text, or video chatting.
                    </p>

                </div>
            ) : (
                <div className="bg-white p-6 rounded-2xl shadow-sm border">
                    <p className='text-md font-semibold'>By Interaction Type</p>
                    <ResponsiveContainer width="100%" height={350}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                dataKey="value"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>

                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default State;