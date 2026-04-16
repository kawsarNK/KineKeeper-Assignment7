import React, { use } from 'react';

const friendsPromise = fetch("/data.json").then((res) => res.json());

const AllFriends = () => {
    const data = use(friendsPromise);

    return (
        <div>
            <h2 className='ml-8 text-2xl font-bold text-gray-600'>Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

                {data.map((friend, index) => (
                    <div key={index} className="card bg-white p-8 rounded-2xl shadow-sm border border-slate-50 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-slate-50">
                            <img
                                src={friend.picture || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&fit=crop"}
                                alt={friend.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-[#1a2b3b] mb-1">{friend.name}</h3>
                        <p className="text-slate-400 text-sm mb-4 font-medium">{friend.lastContact}</p>
                        <div className='flex gap-1 w-full items-center justify-center'>
                            {friend.tags.map((tag, index) => (
                                <div key={index} className="px-2 py-1 rounded-full bg-[#D1FAE5] text-[#065F46] text-xs font-semibold uppercase tracking-wider w-fit">
                                    {tag}
                                </div>))}
                        </div>
                        <div className="flex flex-col gap-2 w-full items-center">

                            <span
                                className={`px-4 py-1 my-2 rounded-full text-white text-xs font-semibold w-fit shadow-sm ${friend.status === 'Overdue' ? 'bg-[#EF4444]' :
                                    friend.status === 'Almost Due' ? 'bg-[#F59E0B]' : 'bg-[#1D4D3F]'
                                    }`}
                            >
                                {friend.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllFriends;