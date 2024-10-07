import { useState } from "react";
import { HiOutlineFire } from "react-icons/hi2";

interface likeProps {
    id: string;
    likes: number;
}

export const Like: React.FC<likeProps> = (props) => {
    const [likes, setLikes] = useState<number>(props.likes);
    const [liked, setLiked] = useState<boolean>(true);

    const handleLike = async (id: string) => {
        try {
            if (liked) {
                const res = await fetch(`/ideahub/like/${id}`, {
                    method: "PATCH",
                    credentials: "include",
                });

                if (res.ok) {
                    setLiked(!liked);
                    setLikes(likes + 1);
                }
            } else {
                const res = await fetch(`/ideahub/dislike/${id}`, {
                    method: "PATCH",
                    credentials: "include",
                });

                if (res.ok) {
                    setLiked(!liked);
                    if (likes > 0) setLikes(likes - 1);
                }
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
            <span>{`${likes}`}</span>
        </>
    );
};
