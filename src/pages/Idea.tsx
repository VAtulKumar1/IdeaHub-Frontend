import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Idea {
    title: string;
    description: string;
    tag: string;
    industry: string;
    createdAt: Date;
    likes: number;
}

const Idea = () => {
    const [idea, setIdea] = useState<Idea>({
        title: "",
        description: "",
        tag: "",
        industry: "",
        createdAt: new Date(),
        likes: 0,
    });
    const location = useLocation();
    const ideaId = location.state;
    console.log(`id-------` + ideaId.key);
    const fetchIdea = async () => {
        try {
            const response = await fetch(`/ideahub/ideas/idea/${ideaId}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setIdea(data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchIdea();
    }, []);

    return (
        <div className="h-[800px] mt-52 border border-solid border-white/30 mx-52 rounded-2xl bg-gradient-to-t from-black/30 to-red-600/30">
            <h1 className="text-white">{idea.title}</h1>
        </div>
    );
};

export default Idea;
