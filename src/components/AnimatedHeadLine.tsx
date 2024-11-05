const AnimatedHeadLine = () => {
    return (
        <div className=" pt-40 font-bold text-center">
            <h1 className="text-5xl text-white mb-4 font-mono animate-slidein opacity-0 [--slidein-delay:300ms] tracking-tighter">
                Ignite Your Imagination
            </h1>
            <h1 className="text-red-600/50 font-mono text-5xl animate-slidein opacity-0 [--slidein-delay:700ms] tracking-tighter">
                Endless Project Ideas to Explore
            </h1>
        </div>
    );
};

export default AnimatedHeadLine;
