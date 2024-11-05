import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        return navigate("/post");
    };
    return (
        <nav>
            <div className="w-full fixed top-0 left-0 z-10 flex justify-between h-14 backdrop-blur-md bg-gradient-to-b from-black/20 to-red-600/20">
                <h1 className="flex justify-start items-center pl-10 text-3xl text-white  hover:text-red-600 font-mono font-bold">
                    IdeaHub
                </h1>
                <div
                    onClick={() => {
                        handleClick();
                    }}
                    className="pr-10 flex items-center"
                >
                    <button className="p-2 border border-solid border-white/20 text-white/70 w-28 rounded-full bg-gradient-to-t from-black to-red-600/40">
                        PostIdea
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
