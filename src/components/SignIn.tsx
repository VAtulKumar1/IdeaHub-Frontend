import { Navigate } from "react-router-dom";
import { Auth, UserContextType } from "../context/AuthProvider";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

interface User {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const { setAuth } = useAuth() as UserContextType;
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
    });

    const [toggle, setToggle] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser: User) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("/ideahub/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const data = await response.json();
            const auth: Auth = {
                email: user?.email as string,
                password: user?.password as string,
                accessToken: data?.accessToken as string,
            };
            setAuth(auth);
            setToggle(!toggle);
        } else {
        }
    };

    return (
        <div className="pt-20 h-full flex justify-center">
            <div className="w-2/6 h-auto self-center mt-24 p-10 bg-gradient-to-r from-slate-950 to-slate-800 rounded-xl">
                <form
                    className="flex flex-col gap-4 gap-y-8"
                    onSubmit={handleSubmit}
                >
                    <h1 className="flex justify-center font-mono text-white text-3xl font-md">
                        Sign-In
                    </h1>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-col jutify-center gap-2">
                            <input
                                className="input-class h-10 text-slate-400 rounded-md p-1 bg-slate-800 border-2 border-slate-950"
                                type="text"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="email"
                            />
                        </div>
                        <div className="flex flex-col jutify-center gap-2">
                            <input
                                className="input-class h-10 text-slate-400 rounded-md p-1 bg-slate-800 border-2 border-slate-950"
                                type="text"
                                id="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                placeholder="password"
                            />
                        </div>
                    </div>

                    <button
                        className="self-center
                                w-24
                                h-10
                                border-2
                                border-slate-400
                                bg-slate-900
                                text-white
                                shadow-slate-400
                                shadow-sm
                                rounded-md
                                text-center
                                font-bold
                                hover:bg-slate-800"
                    >
                        Sign-In
                    </button>
                </form>
                {toggle && <Navigate to="/home" />}
            </div>
        </div>
    );
};

export default SignIn;
