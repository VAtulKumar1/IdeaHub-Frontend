const Navbar = () => {
    return (
        <nav>
            <div className="w-full fixed top-0 left-0 z-10 flex justify-between h-14 backdrop-blur-md">
                <h1 className="flex justify-start items-center pl-10 text-3xl text-white  hover:text-red-600 font-mono font-bold">
                    IdeaHub
                </h1>
            </div>
        </nav>
    );
};

export default Navbar;
