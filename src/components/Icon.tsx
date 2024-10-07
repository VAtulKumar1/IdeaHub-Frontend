import { useState } from "react";
import { HiOutlinePlus, HiMiniXMark } from "react-icons/hi2";

interface Idea {
    title: string;
    description: string;
    tag: string;
    industry: string;
    createdAt: Date;
    likes: Number;
    _id: string;
}

const Icon = ({ ideaDetails }: { ideaDetails: Idea }) => {
    const [toggle, setToggle] = useState<boolean>(true);
    return (
        <div>
            {toggle ? (
                <div
                    className="
                  border-slate-800
                    p-2
                    border-2
                    rounded-full 
                    text-white 
                    hover:text-emerald-500
                    cursor-pointer
                    hover:bg-slate-800"
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    <HiOutlinePlus />
                </div>
            ) : (
                <div
                    key={ideaDetails._id}
                    className="overflow-hidden pt-40 fixed inset-0 backdrop-blur-sm bg-slate-900/10  w-screen h-screen flex justify-center"
                >
                    <div className="p-6 rounded-lg m-10  flex flex-col w-2/4 h-full bg-gradient-to-r from-slate-950 to-slate-800  text-white">
                        <div
                            className="flex justify-end items-center
                                "
                        >
                            <div
                                className=" border-2
                                    p-2

                                border-slate-800
                                rounded-full
                                hover:bg-slate-800
                                hover:text-red-600
                                "
                                onClick={() => setToggle(!toggle)}
                            >
                                <HiMiniXMark />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <span>
                                <span className="text-red-600 text-xl font-bold font-mono">
                                    Description:{" "}
                                </span>
                                {ideaDetails.description}
                            </span>
                            <span>
                                <span className="text-red-600 text-xl font-bold font-mono">
                                    Industry:{" "}
                                </span>
                                {ideaDetails.industry}
                            </span>
                            <span>
                                <span className="text-red-600 text-xl font-bold font-mono">
                                    Likes:{" "}
                                </span>
                                {`${ideaDetails.likes}`}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Icon;
