import Addtodoform from "./AddtodoForm"
import Todolist from "./Todolist"
import { useState } from "react"



function Todocontainer(){
    const [ActivityArr,setActivityArr]=useState([
        {id:1,activity:"Go for a Walk"},
        {id:2,activity:"Drink 4L of Water"}
    
    
    ])

    return(
        <div>

            <div className="flex gap-5 flex-wrap">
           <Addtodoform ActivityArr={ActivityArr} setActivityArr={setActivityArr}/>
           <Todolist ActivityArr={ActivityArr} setActivityArr={setActivityArr}/>

           </div>

        </div>
    )
}
export default Todocontainer