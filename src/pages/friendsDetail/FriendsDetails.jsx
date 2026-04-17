import { useLoaderData, useParams } from 'react-router';
import { FaArchive } from "react-icons/fa";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md"; import { CiVideoOn } from "react-icons/ci";
import { MdOutlineTextsms } from "react-icons/md";
import { useContext } from 'react';
import { FriendContext } from '../../context/FriendContextProvider';
import toast from 'react-hot-toast';


const FriendsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    if (!data) {
        return <div>Loading details...</div>;
    }



    const expectedFriend = data.find(friend => String(friend.id) === String(id));

    const { addActivity } = useContext(FriendContext);

    return (
        <div className='bg-slate-50'>
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6  min-h-screen mb-10">

                {/* LEFT SIDEBAR */}
                <div className="md:col-span-4 space-y-6">
                    {/* Profile Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <img
                            src={expectedFriend.picture}
                            alt={expectedFriend.name}
                            className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-slate-50"
                        />
                        <h2 className="text-2xl font-bold text-[#1a2b3b]">{expectedFriend.name}</h2>
                        <div className="flex flex-col gap-2 w-full items-center">

                            <span
                                className={`px-4 py-1 my-2 rounded-full text-white text-xs font-semibold w-fit shadow-sm ${expectedFriend.status === 'Overdue' ? 'bg-[#EF4444]' :
                                    expectedFriend.status === 'Almost Due' ? 'bg-[#F59E0B]' : 'bg-[#1D4D3F]'
                                    }`}
                            >
                                {expectedFriend.status}
                            </span>
                        </div>

                        <div className='flex gap-1 w-full items-center justify-center'>
                            {expectedFriend.tags.map((tag, index) => (
                                <div key={index} className="px-2.5 py-1.5 mx-1.5 mt-2 rounded-full bg-[#D1FAE5] text-[#065F46] text-xs font-semibold uppercase tracking-wider w-fit">
                                    {tag}
                                </div>))}
                        </div>

                        <p className="italic text-slate-400 mt-4 text-sm">{expectedFriend.bio}</p>
                        <p className="text-slate-400 text-xs mt-2 font-medium">Preferred: {expectedFriend.email}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition-all"><RiNotificationSnoozeLine />
                            Snooze 2 Weeks
                        </button>
                        <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition-all"><FaArchive />
                            Archive
                        </button>
                        <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 rounded-xl text-red-500 font-semibold hover:bg-red-50 transition-all"><FaRegTrashCan />
                            Delete
                        </button>
                    </div>
                </div>

                {/* RIGHT CONTENT AREA */}
                <div className="md:col-span-8 space-y-6">

                    {/* Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                            <h4 className="text-3xl font-bold text-[#1D4D3F]">{expectedFriend.days_since_contact}</h4>
                            <p className="text-slate-400 text-sm font-medium mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                            <h4 className="text-3xl font-bold text-[#1D4D3F]">{expectedFriend.goal}</h4>
                            <p className="text-slate-400 text-sm font-medium mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                            <h4 className="text-3xl font-bold text-[#1a2b3b]">{expectedFriend.next_due_date}</h4>
                            <p className="text-slate-400 text-sm font-medium mt-1">Next Due Date</p>
                        </div>
                    </div>

                    {/* Relationship Goal Card */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative">
                        <button className="absolute top-6 right-6 px-4 py-1 bg-slate-50 border border-slate-200 rounded text-slate-600 text-xs font-bold hover:bg-slate-100">Edit</button>
                        <h3 className="text-lg font-bold text-[#1D4D3F] mb-4">Relationship Goal</h3>
                        <p className="text-slate-400 font-medium">Connect every <span className="text-[#1a2b3b] font-bold">30 days</span></p>
                    </div>

                    {/* Quick Check-In Card */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                        <h3 className="text-lg font-bold text-[#1D4D3F] mb-6">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex flex-col items-center gap-2 p-6 bg-slate-50 hover:bg-slate-300 rounded-xl transition-all border border-slate-100" onClick={() => {
                                addActivity('call', expectedFriend.name);
                                toast.success(`Call with ${expectedFriend.name}`);
                            }} >

                                <span className="text-sm font-semibold text-slate-600">
                                    <MdOutlineWifiCalling3 />Call</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-6 bg-slate-50 hover:bg-slate-300 rounded-xl transition-all border border-slate-100" onClick={() => {
                                addActivity('text', expectedFriend.name);
                                toast.success(`Text with ${expectedFriend.name}`);
                            }} >

                                <span className="text-sm font-semibold text-slate-600"><MdOutlineTextsms />Text</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-6 bg-slate-50 hover:bg-slate-300 rounded-xl transition-all border border-slate-100" onClick={() => {
                                addActivity('video', expectedFriend.name);
                                toast.success(`Video  with ${expectedFriend.name}`);
                            }} >

                                <span className="text-sm font-semibold text-slate-600"><CiVideoOn />Video</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default FriendsDetails;