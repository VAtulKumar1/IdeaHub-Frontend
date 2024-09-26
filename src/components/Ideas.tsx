import { useEffect, useState } from "react";
import Icon from "./Icon";

interface Idea{
    title: string,
    description: string,
    tag: string,
    industry: string,
    createdAt: Date,
    likes : Number,
    _id:string 
}



const Ideas = ({path}:{path:string}) => {
    const [ideas,setIdeas] = useState<Idea[]>([]);


    const fetchIdeas = async ()=>{
        try{
            const response = await fetch(`/ideahub/ideas/${path}`,{
                method: 'GET'
            }
            );
            const data = await response.json();
            console.log(data);
            setIdeas(data);
        }
        catch(error){
            if(error instanceof Error){
                console.log(error.message);
            }
        }
    };

    useEffect(()=>{
           
            fetchIdeas();

    },[path]);

    return (
        <div>
            <div className="ml-52 mr-52 grid grid-cols-3 gap-10">
                {
                    ideas.map(idea=>(
                        <div className="
                        grid grid-col-1
                        w-80
                        h-80 
                        list-none
                        bg-slate-950
                        rounded-s-3xl
                        rounded-e-3xl
                        font-mono
                        hover:bg-slate-900
                        "  key={idea._id}>
                                <h1 className='
                                    pt-4
                                    pl-4
                                    pr-4
                                    text-start
                                    text-3xl
                                    font-bold
                                    font-mono
                                    text-gray-50
                                    '>
                                    {idea.title}
                                </h1>
                                <div className="flex justify-end items-end mr-4 mb-4">
                                    <Icon ideaDetails={idea}/>  
                                </div>
                                
                            
                        
                            
                        </div>
                    
                    ))
                }
            </div>
        </div>
    )

}


export default Ideas;