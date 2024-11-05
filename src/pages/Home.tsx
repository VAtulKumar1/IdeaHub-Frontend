import AnimatedHeadLine from "../components/AnimatedHeadLine";
import { useNavigate } from "react-router-dom";
import FeaturedIdeas from "../components/FeaturedIdeas";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/explore-ideas");
    };
    return (
        <>
            <div className="z-1 mb-24">
                <AnimatedHeadLine />
            </div>
            <div className="flex flex-col justify-center">
                <button onClick={() => handleClick()}>
                    <span className="border border-solid border-white/30 text-white font-mono text-xl hover:text-2xl p-3 rounded-full bg-gradient-to-t from-black/40 to-red-600/40 tracking-tight transition-all duration-150">
                        Explore-Ideas
                    </span>
                </button>
            </div>

            <div className="flex flex-col">
                <h1 className="flex justify-center mt-28 text-white font-mono font-bold text-3xl">
                    <span>Featured Ideas</span>
                </h1>
                <FeaturedIdeas />
            </div>
            <div className=" mt-28 flex flex-col">
                <h1 className="flex justify-center text-white font-mono font-bold text-3xl">
                    How IdeaHub Works
                </h1>
                <div className="mt-10 flex flex-row justify-center gap-x-10">
                    <div className="flex items-center flex-none w-72 border border-solid border-white/20 text-white p-6 bg-gradient-to-tr from-black/20 to-red-600/20 hover:to-[#101820FF]/50 hover:from-red-600/50 rounded-xl">
                        <div className="flex flex-col">
                            <span className="font-semibold text-2xl">
                                Post an Idea
                            </span>
                            <span className="mt-2 text-white/50">
                                Got a problem that can be solved with a website?
                                Share it with the community and spark
                                innovation!
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center flex-none w-72 border border-solid border-white/20 text-white p-6 bg-gradient-to-tr from-black/20 to-red-600/20 hover:to-[#101820FF]/50 hover:from-red-600/50 rounded-xl">
                        <div className="flex flex-col">
                            <span className="font-semibold text-2xl">
                                Find Real World Ideas
                            </span>
                            <span className="mt-2 text-white/50">
                                Explore real-world problems posted by others and
                                turn them into exciting web solutions.
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center flex-none w-72 border border-solid border-white/20 text-white p-6 bg-gradient-to-tr from-black/20 to-red-600/20 hover:to-[#101820FF]/50 hover:from-red-600/50 rounded-xl">
                        <div className="flex flex-col">
                            <span className="font-semibold text-2xl">
                                Find Team Mates
                            </span>
                            <span className="mt-2 text-white/50">
                                Collaborate with fellow developers and build
                                projects together for a real impact.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
