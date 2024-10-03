import {  Component, useState } from "react";
import { Navigate } from "react-router-dom";



interface userDetails{
    userName?:string,
    email:string,
    password:string
}

const SignUp = ()=>{

    const [signUp, setSignUp] = useState<userDetails>({
        userName:'',
        email:'',
        password:''
    })


    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const response  = await fetch("/ideahub/user/register",{
                method:"POST",
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(signUp)
              
            })

            if(response.ok){
                console.log("sign-up successfully");
                {Component:()=><Navigate to="/signin"/>}
            }

           
        

        }catch(error){
            console.log(error);
        }
        finally{

            const currentUserDetails:userDetails = {
                userName:'',
                email:'',
                password:''
            };

            setSignUp(()=>({
                ...currentUserDetails
            }))

        }

    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
       const {name,value} = e.target;
       setSignUp((prevUserDetails:userDetails)=>({
                ...prevUserDetails,
                [name]:value,

        }))

    }


return(
    <div className="pt-20  flex justify-center">
            <div className="w-2/6 self-center mt-24 p-10 bg-gradient-to-r from-slate-950 to-slate-800 rounded-xl">
    
                        <form className="h-auto flex flex-col gap-4 gap-y-8 " onSubmit={handleSubmit} >
                            <h1 className="flex justify-center font-mono text-white text-3xl font-md">Sign-Up</h1>
                            <div className="flex flex-col gap-y-6">
                                <div className="flex flex-col jutify-center gap-2">
                                    <input  className="input-class text-white h-10 rounded-md p-1 bg-slate-800 border-2 border-slate-950" type="text" id="userName" name="userName" placeholder="userName" value={signUp.userName} onChange={handleChange} />
                                </div>
                                <div className="flex flex-col jutify-center gap-2">
                                    <input  className="input-class h-10 text-white rounded-md p-1 bg-slate-800 border-2 border-slate-950" type="text" id="email" name="email" placeholder="email" value={signUp.email} onChange={handleChange}  />
                                </div>
                                <div className="flex flex-col jutify-center gap-2">
                                    <input  className="input-class h-10 text-white rounded-md p-1 bg-slate-800 border-2 border-slate-950" type="text" id="password" name="password" placeholder="password"  value={signUp.password} onChange={handleChange}/>
                                </div>
                            </div>
                           
                           
                            <button className="self-center
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
                                Sign-Up
                            </button>
                        </form>
                    
            </div>
           
        </div>
)

}

export default SignUp;