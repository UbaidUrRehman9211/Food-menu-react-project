import React from "react";
const MenuCard=({menuData})=>{
    console.log(menuData)

    return(
        <>

        <section className="main-card--container">
        {menuData.map((CurEle)=>{
            return (
                
                <>
          
             <div className="card-container" key={CurEle.id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{CurEle.id}</span>
                    <span className="card-auther subtle">{CurEle.category}</span>
                    <h2 className="title">{CurEle.name}</h2>
                    <span className="card-discribtion subtle">
                       {CurEle.description}
                    </span>
                    <div className="card-read">Read</div>
                    <img src={CurEle.image} alt="image" />
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
        </div>
                </>

            )
            
                })}
             
                </section>
        </>
    )

}
export default MenuCard;