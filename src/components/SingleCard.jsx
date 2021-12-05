import React from 'react'
import "./SingleCard.css"

function SingleCard({card, handleChoice, flipped, disabled}) {

    const handleClick = () =>{
        if(!disabled) handleChoice(card)
    }

    return (
        <div className="card">
            <div className ={flipped ? "flipped":""}>
                <img className="front" src={card.src} alt={card.src} />
                <img className="back" onClick={()=>handleClick()} src="/img/cover.png" alt="./img/cover.png" />
            </div>
        </div>
    )
}

export default SingleCard
