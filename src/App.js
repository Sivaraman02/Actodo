
import Header from "./Components/Header";
import Card from "./Components/Card";
import Todocontainer from "./Components/Todocontainer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";
import { Routes,Route,BrowserRouter } from "react-router-dom";

function App(){
 
  const [users,setusers] = useState([{
    username:"siva",
    password: "123"
  },{
    username:"dhoni",
    password:"777"
  }
  
  ])
  
  return(
   
      <div>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login users={users} setusers={setusers}/>}>  </Route>
            <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}>  </Route>
            <Route path="/landing" element={<Landing />}></Route>
         </Routes>
       </BrowserRouter>
    
      </div>
    )
  }
    
export default App;
