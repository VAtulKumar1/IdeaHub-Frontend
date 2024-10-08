import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { UserContextType } from "../context/AuthProvider";

const Navbar = () => {
    const { auth } = useAuth() as UserContextType;
    return (
        <nav>
            <div className="w-full fixed top-0 left-0 z-10 flex justify-between bg-slate-800 h-14">
                <h1 className="flex justify-start items-center pl-10 text-3xl text-white  hover:text-red-600 font-mono font-bold">
                    IdeaHub
                </h1>
                <div
                    className="flex 
                        items-center
                        gap-x-10
                        justify-start
                        list-none
                        text-white
                        text-lg
                        font-bold
                        font-mono
                        pr-10
                        "
                >
                    <li>
                        <Link className="hover:text-red-600" to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-red-600" to="/post">
                            Post
                        </Link>
                    </li>
                    <li>
                        {auth.email ? (
                            <Link to="/signup">
                                <button
                                    className="flex justify-center items-center
                                p-2
                            w-24
                            h-8
                            border-2
                            border-slate-600
                            text-white
                            shadow-slate-950
                            shadow-sm
                            rounded-full
                            text-center
                            font-bold
                            hover:text-red-600"
                                >
                                    Logout
                                </button>
                            </Link>
                        ) : (
                            <Link to="/signup">
                                <button
                                    className="flex justify-center items-center
                                p-2
                            w-24
                            h-8
                            border-2
                            border-slate-600
                            text-white
                            shadow-slate-950
                            shadow-sm
                            rounded-full
                            text-center
                            font-bold
                            hover:text-red-600"
                                >
                                    Sign-Up
                                </button>
                            </Link>
                        )}
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
