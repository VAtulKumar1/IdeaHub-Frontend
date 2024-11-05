import { HiOutlineHeart } from "react-icons/hi2";

const Footer = () => {
    return (
        <div className="mt-40 h-48 border-t-2  border-solid border-white/20  bg-gradient-to-t from-black/20 to-red-600/20 text-white/60">
            <div className="mt-10 flex flex-col justify-center items-center gap-2">
                <h1 className="flex gap-x-2 items-center">
                    Made with <HiOutlineHeart className="hover:text-2xl" /> in
                    Noida
                </h1>
                <ul className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl">Socials</h1>
                    <li>
                        <a
                            className="hover:text-2xl"
                            href="https://x.com/VAtulKumar1"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-2xl"
                            href="https://github.com/VAtulKumar1"
                        >
                            Github
                        </a>
                    </li>

                    <li>
                        <a
                            className="hover:text-2xl"
                            href="https://www.linkedin.com/in/vatulkumar/"
                        >
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
