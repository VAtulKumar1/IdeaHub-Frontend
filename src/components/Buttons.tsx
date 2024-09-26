import { useState } from "react"
import Ideas from "./Ideas";

const Buttons = () =>{

    const [activeButton,setActiveButton] = useState<string>("latest");
    return (
        <div className="">
            <div className=" mb-20 flex justify-center">
                <div className="
                p-2 
                flex 
                item-center
                justify-center
                gap-x-10 
                    w-2/4
                    h-16
                    
                    "
                    >
                     <button className="
                        flex justify-center items-center
                        pt-1
                        pb-2 
                        w-24
                        h-10
                        border-2
                        border-slate-400
                        bg-slate-900
                        text-white
                        shadow-slate-400
                        shadow-sm
                        rounded-full
                        text-center
                        font-bold
                        hover:bg-slate-800"
                        onClick= {()=>setActiveButton("latest")}
                        >
                        Latest
                    </button>
                    <button className="
                        flex justify-center items-center
                        pt-1
                        pb-2 
                        w-24
                        h-10
                        border-2
                        border-slate-400
                        bg-slate-900
                        text-white
                        shadow-slate-400
                        shadow-sm
                        rounded-full
                        text-center
                        font-bold
                        hover:bg-slate-800"
                        onClick= {()=>setActiveButton("oldest")}
                    >
                    Oldest  
                    </button>
                    <button className="
                        flex justify-center items-center
                        pt-1
                        pb-2 
                        w-24
                        h-10
                        border-2
                        border-slate-400
                        bg-slate-900
                        text-white
                        shadow-slate-400
                        shadow-sm
                        rounded-full
                        text-center
                        font-bold
                        hover:bg-slate-800"
                        onClick= {()=>setActiveButton("popular")}
                    >
                    Popular 
                    </button>
                   
                    
                </div>
            </div>
            <Ideas path={activeButton.toLowerCase()}/>
        </div>
       
       
    )
}

export default Buttons