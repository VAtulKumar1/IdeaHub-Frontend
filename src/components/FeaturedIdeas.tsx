import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Idea {
    title: string;
    description: string;
    tag: string;
    industry: string;
    createdAt: Date;
    likes: number;
    _id: string;
}
const FeaturedIdeas = () => {
    const [featuredIdeas, setFeaturedIdeas] = useState<Idea[]>([]);

    const fetchIdeas = async () => {
        const res = await fetch("/ideahub/ideas/popular", {
            method: "GET",
        });

        if (res.ok) {
            const { ideas } = await res.json();
            setFeaturedIdeas(ideas);
        }
    };

    useEffect(() => {
        fetchIdeas();
    }, []);

    return (
        <motion.div
            initial={{
                translateX: "-100%",
            }}
            animate={{
                translateX: "0",
            }}
            transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 60,
            }}
            className="mt-10 flex  gap-6 "
        >
            {[...featuredIdeas, ...featuredIdeas].map((idea) => (
                <div
                    key={idea._id}
                    className="flex flex-col gap-y-2 flex-none  w-72 h-auto border border-solid border-white/20  p-6 bg-gradient-to-bl  to-[#101820FF]/20 from-red-600/20 hover:to-[#101820FF]/50 hover:from-red-600/50 rounded-xl tracking-tight"
                >
                    <h3 className="text-white text-2xl font-semibold overflow-clip">
                        {idea.title}
                    </h3>
                    <h3 className="text-white/40">{idea.description}</h3>
                </div>
            ))}
        </motion.div>
    );
};

export default FeaturedIdeas;
