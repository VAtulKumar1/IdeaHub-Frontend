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
                        <a className="hover:text-red-600" href="/home">Home</a>
                    </li>
                    <li>
                        <a className="hover:text-red-600" href="/post">Post An Idea</a>
                    </li>
                    <li>
                        <a className="hover:text-red-600" href="/about">About</a>
                    </li>
                    <li>
                        <a className="hover:text-red-600" href="/Contact">Contact</a>
                    </li>
                </div>

            </nav>
        </>
    )
}

export default Navbar;