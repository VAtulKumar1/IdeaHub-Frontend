import { useEffect, useState } from "react";
import Icon from "./Icon";
import { Like } from "./Like";

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
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const fetchIdeas = async () => {
        try {
            const response = await fetch(
                `/ideahub/ideas/${path}?skip=${page * 9 - 9}&limit=${9}`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );
            const { ideas, totalIdeas } = await response.json();
            setIdeas(ideas);
            setTotalPages(totalIdeas);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    };

    useEffect(() => {
        fetchIdeas();
    }, [path, page]);

    return (
        <div>
            {/* <h1 className="text-white font-mono font-bold text-5xl">
                More Than 500 <span className="text-red-600">Ideas</span>
            </h1> */}
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
            {ideas.length > 0 && (
                <div className="pt-10 text-white font-bold font-mono flex flex-row justify-center gap-x-4">
                    {page > 1 && (
                        <span
                            className="p-2 border-2 border-slate-400 rounded-md hover:text-red-600 "
                            onClick={() => setPage(page - 1)}
                        >
                            prev
                        </span>
                    )}
                    {[...Array(Math.ceil(totalPages / 9))].map((_, i) => {
                        return (
                            <span
                                onClick={() => setPage(i + 1)}
                                className="p-2 border-2 border-slate-400 rounded-md hover:text-red-600 "
                            >
                                {i + 1}
                            </span>
                        );
                    })}
                    {page < Math.ceil(totalPages / 9) && (
                        <span
                            className="p-2 border-2 border-slate-400 rounded-md hover:text-red-600 "
                            onClick={() => setPage(page + 1)}
                        >
                            next
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default Ideas;
