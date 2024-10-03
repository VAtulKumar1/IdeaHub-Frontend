import {  useState } from "react";


interface Idea{
    title: string,
    description: string,
    tag: string,
    industry: string,
    createdAt: Date,
    likes : Number
}

const AddIdea  = ()=>{

    const [idea,setIdea] = useState<Idea>({
        title: '',
        description: '',
        tag: '',
        industry: '',
        createdAt: new Date(),
        likes: 0,
    });

   
    

        const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
            const {name,value}=e.target;
            setIdea((prevIdea:Idea)=>({
                ...prevIdea,
                [name]:value,          
            }))

        }

        const handleSubmit = async (e: React.FormEvent)=>{
            e.preventDefault();
            try{
                await fetch("/ideahub/post",{
                        method:"POST",
                        headers: {
                            'content-type': 'application/json;charset=UTF-8',
                        },
                        body:JSON.stringify(idea),
                    })
            }finally{
                const currentIdea:Idea = {
                    title: '',
                    description: '',
                    tag: '',
                    industry: '',
                    createdAt: new Date(),
                    likes: 0,
                }

                setIdea(()=>({
                    ...currentIdea,
                }))
            }
        }
        

    return(
        <div className="flex flex-col">
            <div className="flex flex-col mt-24 gap-4">
                <h1 className="flex justify-center p-2 font-mono text-white text-5xl font-bold">Share Your Vision</h1>
                <h2 className="flex justify-center p-2 text-3xl gap-4 text-red-600 font-bold font-mono">An Idea Can Shape the Future – Submit and Inspire Change</h2>
            </div>
            <div className="w-2/4 h-auto self-center mt-24 p-10 bg-gradient-to-r from-slate-950 to-slate-800 rounded-2xl">
    
                        <form className="mt-10 flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col jutify-center gap-2">
                                <label className="px-2 font-mono font-bold text-xl text-white"htmlFor="Title">Title</label>
                                <input  className="input-class text-slate-400 rounded-xl p-1 bg-slate-800 border-2 border-slate-950" type="text" id="title" name="title" value={idea.title} onChange={handleChange} placeholder="title" />
                            </div>
                            <div className="flex flex-col jutify-center gap-2">
                                <label className="px-2 font-mono font-bold text-xl text-white"htmlFor="Description">Description</label>
                                <input className="input-class text-slate-400 rounded-xl p-1 bg-slate-800 border-2 border-slate-950" type="text" id="description" name="description" value={idea.description} onChange={handleChange}  placeholder="Description" />
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label className="px-2 font-mono font-bold text-xl text-white"htmlFor="Industry">Industry</label>
                                <input className="input-class text-slate-400 rounded-xl p-1 bg-slate-800 border-2 border-slate-950" type="text" id="tag" name="tag" value={idea.tag} onChange={handleChange} placeholder="Tag" />
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label className="px-2 font-mono font-bold text-xl text-white"htmlFor="Industry">Industry</label>
                                <input className="input-class text-slate-400 rounded-xl p-1 bg-slate-800 border-2 border-slate-950" type="text" id="industry" name="industry" value={idea.industry} onChange={handleChange} placeholder="Industry" />
                            </div>
                            <button className="self-center mt-10 pt-1
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
                            >
                                Submit
                            </button>
                        </form>
                        
                    
            </div>
           
        </div>
    )
}

export default AddIdea;