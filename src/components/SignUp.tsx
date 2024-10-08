import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

interface userDetails {
    userName?: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const [signUp, setSignUp] = useState<userDetails>({
        userName: "",
        email: "",
        password: "",
    });

    const [toggle, setToggle] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("/ideahub/user/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json;charset=UTF-8",
                },
                body: JSON.stringify(signUp),
            });

            const data = await response.json();

            if (response.ok) {
                setToggle(!toggle);
            } else {
                const message = data.message;
                {
                    message === "User already exists" &&
                        setInterval(() => {
                            setToggle(!toggle);
                        }, 2000);
                }
            }

            setSignUp({
                userName: "",
                email: "",
                password: "",
            });
        } catch (error) {}
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignUp((prevUserDetails: userDetails) => ({
            ...prevUserDetails,
            [name]: value,
        }));
    };

    return (
        <section>
            <div className="pt-20 flex justify-center items-center p-x-6 p-y-8 mx-auto h-screen">
                <form
                    className="w-96 h-6/6 flex flex-col p-11 gap-8 bg-slate-900 shadow-md shadow-slate-950 rounded-md border-1"
                    onSubmit={handleSubmit}
                >
                    <h1 className="flex justify-center font-mono text-red-600 text-4xl font-bold">
                        Welcome
                    </h1>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-col jutify-center gap-2">
                            <input
                                className="input-class text-slate-400 h-12 rounded-md p-1 bg-slate-800 border-2 border-slate-700 shadow-md shadow-slate-950"
                                type="text"
                                id="userName"
                                name="userName"
                                placeholder="userName"
                                value={signUp.userName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col jutify-center gap-2">
                            <input
                                className="input-class h-12 text-slate-400 rounded-md p-1 bg-slate-800 border-2 border-slate-700 shadow-md shadow-slate-950"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email"
                                value={signUp.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col jutify-center gap-2">
                            <input
                                className="input-class h-12 text-slate-400 rounded-md p-1 bg-slate-800 border-2 border-slate-700 shadow-md shadow-slate-950"
                                type="text"
                                id="password"
                                name="password"
                                placeholder="password"
                                value={signUp.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button
                        className="self-center
                                w-72
                                h-12
                                border-2
                                border-slate-800
                                bg-slate-900
                                text-red-600
                                shadow-slate-950
                                shadow-sm
                                rounded-md
                                text-center
                                font-bold
                                hover:bg-slate-800"
                    >
                        Sign-Up
                    </button>
                    <div>
                        <h6 className="text-white pt-4">Already signed up ?</h6>
                        <Link className="text-red-600 underline" to="/signin">
                            Sign-in
                        </Link>
                    </div>
                    {toggle && <Navigate to={"/signin"} />}
                </form>
            </div>
        </section>
    );
};

export default SignUp;
