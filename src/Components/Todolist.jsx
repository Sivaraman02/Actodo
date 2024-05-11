
import Todoitem from "./Todoitem"

function Todolist(props){
    const ActivityArr = props.ActivityArr
    const setActivityArr = props.setActivityArr
   
    return(
        <div className="bg-gray-500 p-3 flex-grow rounded-md">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        {ActivityArr.length===0?<p>You have not added any activity yet</p>:""}
        
        {
        ActivityArr.map(function(item,index){
          return  <Todoitem activity={item.activity} index = {index} ActivityArr={ActivityArr} setActivityArr={setActivityArr} id={item.id}/>
        }
    )
        }
        
                    </div>
    )
}
export default Todolist