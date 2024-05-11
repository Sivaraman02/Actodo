function Todoitem(props){
    const ActivityArr = props.ActivityArr
    const setActivityArr = props.setActivityArr

    function handledelete(removeid){
     var temparr = ActivityArr.filter(function(item)
     
     {
       if(item.id===removeid)
        {
            return false
        }
        else{
            return true
        } 
    })
        setActivityArr(temparr)
   
    }


        
    



    return(<>
    <div className="flex justify-between">
    <p>{props.index+1}.{props.activity}</p>
<button className="text-yellow-400" onClick={()=>handledelete(props.id)} >Delete</button>
</div>
    </>

    )
}

export default Todoitem