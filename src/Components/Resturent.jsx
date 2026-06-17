import React, { useState } from "react";
import "./style.css"
import Menu from "./Api/MenuApi";
import MenuCard from "./MenuCard";


const Resturent =()=>{
    const[menuData,setMenuData]=useState(Menu)

    const filterItem=(category)=>{
        const updatelist=Menu.filter((CurElem)=>{
            return CurElem.category===category;
        })
        setMenuData(updatelist);
    }


    return(
        <>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__iteam" onClick={()=>filterItem("Breakfast")}>BreakFast</button>
                <button className="btn-group__iteam" onClick={()=>filterItem("Lunch")}>Lunch</button>
                <button className="btn-group__iteam"onClick={()=>filterItem("Dinner")}>Dinner</button>
                <button className="btn-group__iteam" onClick={()=>setMenuData(Menu)}>All</button>
            </div>
        </nav>




        <MenuCard menuData={menuData} />
                   
        </>
    )
}
export default Resturent;