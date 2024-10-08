import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="fixed pt-20 pl-10  gap-2 flex flex-col justify-start items-start text-white  w-60 h-screen border-r-2 border-slate-600 font-mono font-bold text-xl">
            <Link
                className="h-12  p-4 flex justify-center items-center hover:bg-slate-700 rounded-full hover:text-red-600"
                to={"/Home"}
            >
                Home
            </Link>
            <button className="h-12  p-4 flex cursor-pointer justify-center items-center bg-green-400 shadow-md shadow-slate-700 border-2 border-slate-800 rounded-full hover:text-red-600">
                Trending
            </button>
            <button className=" h-12  p-4 flex cursor-pointer justify-center items-center hover:bg-slate-700 rounded-full hover:text-red-600">
                Latest
            </button>
            <button className="h-12  p-4 flex cursor-pointer justify-center items-center hover:bg-slate-700 rounded-full hover:text-red-600">
                Oldest
            </button>
            <button className="h-12  p-4 flex cursor-pointer justify-center items-center hover:bg-slate-700 rounded-full hover:text-red-600">
                Post
            </button>
        </div>
    );
};
