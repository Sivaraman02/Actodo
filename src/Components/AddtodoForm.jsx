import { useState } from "react"

function Addtodoform(props){
    const ActivityArr = props.ActivityArr
    const setActivityArr = props.setActivityArr

    const [newActivity,setnewActivity]= useState("")

    function handlechange(evt){
setnewActivity(evt.target.value)
    }


    function addActivity(){
    setActivityArr([...ActivityArr,{id:ActivityArr.length+1,activity:newActivity}])
        setnewActivity("")
    }


    return(
        <div className="flex flex-col gap-3">

            
        <h1 className="font-medium text-2xl">Manage Activities</h1>
        <div>
        <input value={newActivity} type="text" className="border border-black bg-transparent p-1" onChange={handlechange} placeholder="Next Activity"></input>
        <button className="bg-black text-white border border-black p-1" onClick={addActivity} >Add</button>
    
        </div>
      
    
    
                </div>
    )
}
export default Addtodoform