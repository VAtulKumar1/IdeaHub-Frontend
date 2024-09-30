import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <>
            <nav>
                <div className="relative w-full flex 
                    items-center
                    space-x-10
                    justify-center
                    list-none
                    text-white
                    h-14
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

            </nav>
        </>
    )
}

export default Navbar;