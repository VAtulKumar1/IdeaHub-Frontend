import { useEffect, useState } from "react";
import Icon from "./Icon";
import { Like } from "./Like";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

interface Idea {
    title: string;
    description: string;
    tag: string;
    industry: string;
    createdAt: Date;
    likes: number;
    _id: string;
}

const Ideas = ({ path }: { path: string }) => {
    const [ideas, setIdeas] = useState<Idea[]>([]);

    const fetchIdeas = async () => {
        try {
            const response = await fetch(`/ideahub/ideas/${path}`, {
                method: "GET",
                credentials: "include",
            });
            const data = await response.json();
            setIdeas(data);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    };

    useEffect(() => {
        fetchIdeas();
    }, [path]);

    return (
        <div>
            <div className="pl-20 grid gird-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-10 lg:grid-cols-3 gap-x-10 gap-y-10">
                {ideas.map((idea) => (
                    <div
                        className="
                        w-80
                        h-80 
                        list-none
                        bg-slate-950
                        rounded-s-md
                        rounded-e-md
                        font-mono
                        hover:bg-slate-900
                        "
                        key={idea._id}
                    >
                        <div className="m-4 border-2 border-slate-800 rounded-md w-72 h-60">
                            <h1
                                className="flex justify-between items-center
                                    pt-4
                                    pl-4
                                    pr-4
                                    text-start
                                    text-2xl
                                    font-bold
                                    font-mono
                                    text-red-600
                                    "
                            >
                                {idea.title}
                            </h1>
                        </div>

                        <div className="flex flex-row gap-x-4 justify-between items-center mb-4 ml-6 mr-4">
                            <div className="flex flex-row items-center gap-x-2 text-slate-700 hover:text-green-600">
                                <HiOutlineChatBubbleOvalLeft className="text-2xl" />
                                <span>40</span>
                            </div>
                            <div className="flex flex-row items-center gap-x-2 text-slate-700 hover:text-red-600">
                                <Like id={idea._id} likes={idea.likes} />
                            </div>

                            <Icon ideaDetails={idea} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ideas;
