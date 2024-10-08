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
        e.preventDefault();
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
        }

        setUser({
            email: "",
            password: "",
        });
    };

    return (
        <section>
            <div className="pt-20 flex justify-center items-center px-6 py-8 mx-auto h-screen">
                <form
                    className="w-96 h-3/4 p-11 flex flex-col gap-8 shadow-md shadow-slate-950 border-1 bg-slate-900 rounded-md"
                    onSubmit={handleSubmit}
                >
                    <h1 className="flex justify-center font-mono text-red-600 text-4xl font-bold">
                        Welcome
                    </h1>

                    <div className="flex flex-col jutify-center">
                        <input
                            className="input-class h-12 text-slate-400 rounded-md p-2 shadow-md shadow-slate-950 bg-slate-800 border-2 border-slate-700"
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="email"
                        />
                    </div>
                    <div className="flex flex-col jutify-center gap-2">
                        <input
                            className="input-class h-12 text-slate-400 rounded-md shadow-md shadow-slate-950 p-2 bg-slate-800 border-2 border-slate-700"
                            type="password"
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="password"
                        />
                    </div>

                    <button
                        className="self-center
                                p-x-10
                                w-72
                                h-12
                                border-2
                                border-slate-800
                                bg-slate-900
                                text-white
                                shadow-slate-950
                                shadow-sm
                                rounded-md
                                text-center
                                font-bold
                               
                                hover:text-red-600"
                    >
                        Sign-In
                    </button>
                </form>
                {toggle && <Navigate to="/home" />}
            </div>
        </section>
    );
};

export default SignIn;
