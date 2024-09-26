import AnimatedHeadLine from "./AnimatedHeadLine";
import Navbar from "./Navbar";
import Buttons from "./Buttons";


const Home = () => {
    return(
        <div>
            <Navbar/>
            <div className="mb-24">
                <AnimatedHeadLine/>
            </div>
            <Buttons/>
        </div>
    );


}

export default Home;