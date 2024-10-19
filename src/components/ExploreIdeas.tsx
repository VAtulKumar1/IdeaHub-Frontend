import { useEffect, useState } from "react";

interface Idea {
    title: string;
    description: string;
    tag: string;
    industry: string;
    createdAt: Date;
    likes: number;
    _id: string;
}

interface IdeaResponse {
    ideas: Idea[];
    totalIdeas: number;
}

export const ExploreIdeas = () => {
    const [currentBtnName, setCurrentbtnName] = useState<string>("");
    const [ideas, setIdeas] = useState<Idea[]>([]);

    const handleClick = async (nameOfBtn: string) => {
        try {
            setCurrentbtnName(nameOfBtn);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchIdeas = async (name: string) => {
        try {
            const response = await fetch(
                `/ideahub/ideas/${name.toLowerCase()}`,
                {
                    method: "GET",
                }
            );
            if (response.ok) {
                const { ideas, totalIdeas }: IdeaResponse =
                    await response.json();
                setIdeas(ideas);
            }
        } catch (Err) {
            console.log(Err);
        }
    };

    useEffect(() => {
        try {
            fetchIdeas(currentBtnName);
        } catch (Err) {
            console.log(Err);
        }
    }, [currentBtnName]);

    return (
        <div className="relative mt-[120px] z-[5] md:mt-[159px] flex flex-col jusitfy-center items-center w-full">
            <div className="border max-md:relative rounded-xl border-solid border-white/20 w-[90%] lg:w-[95%] flex flex-row justify-between items-center max-w-[1296px] h-[886px] lg:gap-x-5 lg:p-5 bg-black/20">
                <div className="underlay hidden md:hidden h-full w-full bg-black opacity-40 z-[3]"></div>
                <div className="h-full lg:w-fit absolute lg:relative overflow-y-scroll scrollbar-none flex flex-col justify-start items-center max-lg:w-0 max-lg:hidden transition-all duration-300 ">
                    <div className="h-[68px] w-full max-lg:flex max;lg:flex-row max-lg:justify-between max-lg:items-center text-left p-5 text-[#F9F9F9] font-inter tracking-tight text-[20px] border-b-[1px] border-b-white/20 mb-5">
                        <p>Ideas</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <button
                            onClick={() => handleClick("All Ideas")}
                            className="h-[48px] w-[251px] cursor-pointer p-5 flex flex-row justify-center items-center gap-3 mb-[2px] hover:bg-gradient-to-r hover:from-white/20 hover:via-[#B388F0]/20 hover:to-white/20 rounded-md border border-solid border-white/20 transition-all duration-150"
                        >
                            <span className="font-mono text-neutral-50 tracking-tight text-[15px]">
                                All Ideas
                            </span>
                        </button>
                        <button
                            onClick={() => handleClick("Popular")}
                            className="h-[48px] w-[251px] cursor-pointer p-5 flex flex-row justify-center items-center gap-3 mb-[2px] bg-gradient-to-r from-white/20 via-[#B388F0]/20 to-white/20 rounded-md border border-solid border-white/20 transition-all duration-150"
                        >
                            <span className="font-mono hover:underline text-neutral-50 tracking-tight text-[15px]">
                                Popular
                            </span>
                        </button>
                        <button
                            onClick={() => handleClick("Latest")}
                            className="h-[48px] w-[251px] cursor-pointer p-5 flex flex-row justify-center items-center gap-3 mb-[2px] bg-gradient-to-r from-white/20 via-[#B388F0]/20 to-white/20 rounded-md border border-solid border-white/20 transition-all duration-150"
                        >
                            <span className="font-mono hover:underline text-neutral-50 tracking-tight text-[15px]">
                                Latest
                            </span>
                        </button>
                        <button
                            onClick={() => handleClick("Oldest")}
                            className="h-[48px] w-[251px] cursor-pointer p-5 flex flex-row justify-center items-center gap-3 mb-[2px] bg-gradient-to-r from-white/20 via-[#B388F0]/20 to-white/20 rounded-md border border-solid border-white/20 transition-all duration-150"
                        >
                            <span className="font-mono hover:underline text-neutral-50 tracking-tight text-[15px]">
                                Oldest
                            </span>
                        </button>
                    </div>
                </div>
                <div className="w-full relative flex-1 h-full border border-solid rounded-xl bg-[#351689]/20 lg:rounded-md border-white/20 p-5 flex flex-col justify-start items-center gap-y-10 overflow-y-hidden">
                    <div className="flex flex-row justify-between w-full items-start h-[53px] sticky border-b-[1px] border-b-white/20">
                        <div className="flex flex-row justify-start items-center w-fit h-fit max-lg:pt-1 pb-4 gap-x-1 md:gap-x-3">
                            <span className="font-mono line-clamp-1 font-semibold text-neutral-50 text-[4px] md:text-[16px] lg:text-[20px] tracking-tight">
                                {currentBtnName}
                            </span>
                        </div>
                        <div className="flex relative flex-col justify-start w-fit h-full overflow-visible z-10">
                            <button className="text-[10px] text-white relative z-[99] md:text-[14px] py-2 px-3 md:py-2 md;px-4 gap-2 rounded-full border border-solid  border-white/20 bg-white/10 font-inter flex flex-row justify-center items-center">
                                <b className="max-md:hidden md:hidden">Sort:</b>
                                <p className="max-md:hidden md:hidden">
                                    Beginer
                                </p>
                                <p className="max-md:hidden md:hidden">
                                    Intermediate
                                </p>
                                <p className="max-md:hidden">Advanced</p>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-fit grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-5 overflow-y-scroll scrollbar-none">
                        {ideas.map((idea: Idea) => (
                            <div className="w-full cursor-pointer h-[216px] p-5 flex flex-col justify-between items-start border border-solid border-white/20 rounded-xl ">
                                <p className="text-white font-mono text-2xl">
                                    {idea.title}
                                </p>
                                <p className="text-white/20 font-mono">
                                    {idea.description}
                                </p>
                                <p className="text-white/20 font-mono">
                                    {idea.likes}
                                </p>
                                <p className="text-white/20 font-mono">
                                    {idea.tag}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
