import React from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import data from "./data"


export default function App(){
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })        
    return(
        <div className="body">
            <Navbar/>
            <Hero/>
            <section className="cards--list"></section>
            {cards}
        </div>
    )
}

/**
 How props work:
pass in a parameter in the function of the component,
in the placeholders for the subcomponents write 
props."name of sub-component"
To pass in data for the components:
<Name of component
"name of sub-component" = value/>
 */