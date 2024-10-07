import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="w-full fixed top-0 left-0 z-10 flex justify-between bg-slate-950 h-14">
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
                            Post An Idea
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-red-600" to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-red-600" to="/Contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            <button
                                className="flex justify-center items-center
                            w-20
                            h-8
                            border-2
                            border-slate-400
                            bg-slate-900
                            text-white
                            shadow-slate-400
                            shadow-sm
                            rounded-md
                            text-center
                            font-bold
                            hover:text-red-600"
                            >
                                Sign-Up
                            </button>
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
