import { useState } from "react";

interface Idea {
    title: string;
    description: string;
    tag: string;
    industry: string;
    createdAt: Date;
    likes: Number;
}

const AddIdea = () => {
    const [idea, setIdea] = useState<Idea>({
        title: "",
        description: "",
        tag: "",
        industry: "",
        createdAt: new Date(),
        likes: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setIdea((prevIdea: Idea) => ({
            ...prevIdea,
            [name]: value,
        }));
    };

    const handleTextAreaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setIdea((prevIdea: Idea) => ({
            ...prevIdea,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch("/ideahub/post", {
                method: "POST",
                headers: {
                    "content-type": "application/json;charset=UTF-8",
                },
                body: JSON.stringify(idea),
            });
        } finally {
            const currentIdea: Idea = {
                title: "",
                description: "",
                tag: "",
                industry: "",
                createdAt: new Date(),
                likes: 0,
            };

            setIdea(() => ({
                ...currentIdea,
            }));
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col mt-24">
                <h1 className="flex justify-center p-2 font-mono text-white text-4xl font-semibold tracking-tighter">
                    Share Your Ideas on IdeaHub
                </h1>
                <h2 className="flex justify-center p-2 text-3xl  text-red-600/50 font-bold font-mono tracking-tighter">
                    An Idea Can Shape the Future – Submit and Inspire Change
                </h2>
            </div>
            <div className="w-2/4 h-auto self-center mt-24 p-10 bg-gradient-to-t from-black/30 to-red-600/30 border border-solid border-white/20 rounded-2xl">
                <form
                    className="mt-10 flex flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-row justify-between">
                        <label
                            className="px-2 font-mono font-bold text-xl text-white"
                            htmlFor="Title"
                        >
                            Title
                        </label>
                        <input
                            className="flex justify-start items-start w-72 text-white/50 rounded-md p-2 bg-inherit border-2 border border-solid border-white/20"
                            type="text"
                            id="title"
                            name="title"
                            value={idea.title}
                            onChange={handleChange}
                            placeholder="title"
                            required
                        />
                    </div>
                    <div className="flex flex-row justify-between gap-2">
                        <label
                            className="px-2 font-mono font-bold text-xl text-white"
                            htmlFor="Description"
                        >
                            Description
                        </label>
                        <textarea
                            className="peer h-full   border border-solid border-white/30 bg-inherit text-white/50 rounded-md scrollbar-none w-72"
                            id="description"
                            name="description"
                            value={idea.description}
                            onChange={handleTextAreaChange}
                            placeholder="Description"
                            required
                        />
                    </div>
                    <div className=" flex flex-row  justify-between gap-2">
                        <label
                            className="px-2 font-mono font-bold text-xl text-white"
                            htmlFor="Industry"
                        >
                            Industry
                        </label>
                        <input
                            className="input-class w-72 text-slate-400 rounded-md p-2 bg-inherit border border-solid border-white/20"
                            type="text"
                            id="tag"
                            name="tag"
                            value={idea.tag}
                            onChange={handleChange}
                            placeholder="Tag"
                            required
                        />
                    </div>
                    <div className=" flex flex-row justify-between gap-2">
                        <label
                            className="px-2 font-mono font-bold text-xl text-white"
                            htmlFor="Industry"
                        >
                            Industry
                        </label>
                        <input
                            className="input-class text-slate-400 w-72 rounded-md p-2 bg-inherit border border-solid border-white/20"
                            type="text"
                            id="industry"
                            name="industry"
                            value={idea.industry}
                            onChange={handleChange}
                            placeholder="Industry"
                            required
                        />
                    </div>
                    <button
                        className="self-center mt-10 pt-1
                                pb-2 
                                w-24
                                h-10
                                border-2
                                border-solid
                                border-white/20
                                text-white
                                rounded-full
                                text-center
                                font-bold
                                "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddIdea;
