import React from "react";
const MenuCard=({menuData})=>{
    console.log(menuData)

    return(
        <>

        <section className="main-card--container">
        {menuData.map((CurEle)=>{

            const{id,category,name,description,image}=CurEle
            return (
                
                <>
          
             <div className="card-container" key={id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-auther subtle">{category}</span>
                    <h2 className="title">{name}</h2>
                    <span className="card-discribtion subtle">
                       {description}
                    </span>
                    <div className="card-read">Read</div>
                    <img src={image} alt="image" />
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