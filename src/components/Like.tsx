import { useState } from "react";
import { HiOutlineFire } from "react-icons/hi2";

interface likeProps {
    id: string;
    likes: number;
}

export const Like: React.FC<likeProps> = (props) => {
    const [like, setLike] = useState<number>(props.likes);

    const handleLike = async (id: string) => {
        try {
            const res = await fetch(`/ideahub/like/${id}`, {
                method: "PATCH",
                credentials: "include",
            });

            if (res.ok) {
                setLike(like + 1);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <HiOutlineFire
                onClick={() => handleLike(props.id)}
                className="text-2xl"
            />
            <span>{`${like}`}</span>
        </>
    );
};
