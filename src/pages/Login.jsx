import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props){
    const users = props.users
    var navigate = useNavigate()
  

    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()

    const [ruser,setRuser] =  useState(true)

    



    function handlePinput(event){
        setepassword(event.target.value)

    }
    function handleUinput(event){
        seteusername(event.target.value)

    }
    function checkUser(){
       var userfound = false
       console.log(users)


        users.forEach(item => {
            if(item.username === eusername && item.password === epassword)
                {
                    console.log("Login Successfull")
                    userfound=true
                    navigate("/landing",{state:{user:eusername}})

                }
             
        });


        if(userfound===false)
            {
                console.log("Login Failed")
                setRuser(false)
            }
    }



    return( 
        <div className="bg-black p-10">
        <div className="bg-white p-5 border rounded-md">
            <h1 className="text-2xl font-semibold">Hey Hi</h1>
            {ruser? <p>I help you manage your activities after you login</p> : <p className="text-red-600">Please signup before you login</p>}
            
            <div className="flex flex-col gap-2 my-2">  
            <input type="text" onChange={handleUinput} placeholder="username" className="border rounded border-black p-1 bg-transparent w-52"></input>
            <input type="text" onChange={handlePinput} placeholder="password" className="border rounded border-black p-1 bg-transparent w-52"></input>
            
            </div>
          
            <button className="bg-blue-700 w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
            
            <p>Dont have an account ? <Link to={"/signup"} className="underline">Signup </Link> </p>
        </div>
        </div>
        
    )
}


export default Login