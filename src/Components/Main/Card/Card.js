import React from "react";
import "./Card.css";
import Germany from "../../../assets/images/Germany.svg"

const Card = () => {
    return <>
        <li className="col-3 d-flex align-items-stretch ">
            <div className="hero-card w-100 d-flex flex-column justify-content-between">
                <img className="hero-img js-country-flag img-fluid" src={Germany} alt="Germany Flag"/>
                <div className="hero-card-box">
                    <div>
                        <h3 className="hero-country-title js-country-name">
                            Germany
                        </h3>
                        <p className="hero-country-desc mb-0">Population: <span className="hero-country-desc-text js-country-population">81,770,900</span></p>
                        <p className="hero-country-desc my-2">Region: <span className="hero-country-desc-text js-country-region">Europe</span></p>
                        <p className="hero-country-desc mb-0">Capital: <span className="hero-country-desc-text js-country-capital">Berlin</span></p>
                    </div>
                    
                    <button className="btn btn-outline-success mt-3" type="button">
                        More info
                    </button>
                </div>
            </div>
        </li>
    </>
}

export default Card;