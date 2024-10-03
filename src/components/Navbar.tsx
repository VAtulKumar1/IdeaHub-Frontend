import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        
            <nav>
                <div className="w-full fixed top-0 flex justify-end bg-slate-950 h-14">
                    <div className="flex 
                        items-center
                        gap-x-10
                        justify-start
                        list-none
                        text-white
                        text-lg
                        font-bold
                        font-mono
                        ">
                        <li>
                            <Link className="hover:text-red-600" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="hover:text-red-600" to="/post">Post An Idea</Link>
                        </li>
                        <li>
                            <Link className="hover:text-red-600" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="hover:text-red-600" to="/Contact">Contact</Link>
                        </li>
                    </div>
                    <div className="pl-10 gap-x-4 flex justify-end items-center text-white pr-10">
                        <Link to="/signup">
                            <button className="flex justify-center items-center
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
                            hover:bg-slate-800">
                            Sign-Up   
                            </button>
                        </Link>
                        <Link to="/signin">
                            <button className=" 
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
                            hover:bg-slate-800">
                                Sign-In
                            </button>
                        </Link>
                       
                      
                    </div>
                </div>
               

            </nav>
    )
}

export default Navbar;