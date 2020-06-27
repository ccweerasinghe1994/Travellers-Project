import React from "react";

const Card =({title,days,people,tourGuide,accommodation,difficulty,price,cardNo})=>{
    return(
        <div className="card">
            <div className="card__side card__side--front ">
                <div className={`card__picture card__picture--${cardNo}`}/>
                <h4 className="card__header">
                                    <span className={`card__header-span card__header-span--${cardNo}`}>
                                        {title}
                                    </span>
                </h4>
                <div className="card__details">
                    <ul>
                        <li>{days} day tours</li>
                        <li>up to {people} people</li>
                        <li>{tourGuide} tour guides</li>
                        <li>{accommodation}</li>
                        <li>Difficulty {difficulty}</li>
                    </ul>
                </div>
            </div>
            <div className={`card__side card__side--back card__side--back-${cardNo}`}>
                <div className="card__cta">
                    <div className="card__price-box">
                        <div className="card__price-only">only</div>
                        <div className="card__price-value">${price}</div>
                    </div>
                    <a href="#" className='btn btn--animated btn--white' >Book Now</a>
                </div>

            </div>
        </div>
    )
}
export default Card;