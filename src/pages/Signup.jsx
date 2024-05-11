import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props)
{
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()


    function handlePinput(event){
        setepassword(event.target.value)

    }
    function handleUinput(event){
        seteusername(event.target.value)

    }
    function addUser(){
        setusers([ ...users,{
            username:eusername,
            password:epassword
        }])
        navigate("/landing",{state:{user:eusername}})
        
    }


    return ( 
    <div className="bg-black p-10">
    <div className="bg-white p-5 border rounded-md">
        <h1 className="text-2xl font-semibold">Hey Hi</h1>
        <p>You can Signup here :)</p>
        <div className="flex flex-col gap-2 my-2">  
        <input type="text" onChange={handleUinput} placeholder="username" className="border rounded border-black p-1 bg-transparent w-52"></input>
        <input type="text" onChange={handlePinput} placeholder="password" className="border rounded border-black p-1 bg-transparent w-52"></input>
        <input type="text"  placeholder="confirm password" className="border rounded border-black p-1 bg-transparent w-52"></input>
        </div>
      
        <button className="bg-yellow-500 w-24 p-1 rounded-md" onClick={addUser}>Signup</button>
        <p>Already have an account ? <Link to={"/"} className="underline">Login </Link> </p>
    </div>
    </div>
    )
}


export default Signup