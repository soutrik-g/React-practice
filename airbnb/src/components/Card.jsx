import React from "react";
export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.openSpots === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className = "card--badge">SOLD-OUT heheheh BADGE</div>}
            <img src = {props.coverImg} className = "card--image"/>
            <div className="card--stats">
                <span><img src = "/images/Star.png" width = "20px" className="card--star"/></span>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p> <span className="bold">From {props.price} per person</span></p>
        </div>
    )
}
