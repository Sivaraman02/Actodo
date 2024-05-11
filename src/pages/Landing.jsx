import Header from "../Components/Header"
import Card from "../Components/Card"
import Todocontainer from "../Components/Todocontainer"
import { useLocation } from "react-router-dom"



function Landing(){
    const data = useLocation()
    return(
        <>
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
    <Header name={data.state.user}/>
    <div className="flex justify-between gap-7 flex-wrap my-5">
    <Card bgcolor={"#00B1E1"} title={"23"} subtitle={"Chennai"}/>
    <Card bgcolor={"#FF5349"} title={"December"} subtitle={"14:03:34"}/>
    <Card bgcolor={"violet"} title={"Built Using"} subtitle={"React"}/>
    </div>
    
    <Todocontainer/>
    </div>
    </div>
    </>
    
    )
}
export default Landing