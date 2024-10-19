import AnimatedHeadLine from "./AnimatedHeadLine";
import { useNavigate } from "react-router-dom";

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
                    <span className="border border-solid border-white/30 text-red-600 font-mono text-xl p-2 rounded-2xl bg-black/20 hover:bg-black tracking-tight transition-all duration-150">
                        Explore-Ideas
                    </span>
                </button>
            </div>
        </>
    );
};

export default Home;
