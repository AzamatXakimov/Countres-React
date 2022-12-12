import React from "react";
import "./Main.css"
import Card from "./Card/Card"

const Main = () => {
    return <>
        <main className="site-main">
            <section className="hero">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <form className="search-form" action="#" method="post">
                            <input className="hero-search w-100 border-0" type="search" name="search_value" aria-label="Search" placeholder="Search for a country…"/>
                        </form>
                        <form className="region-form" action="#" method="post">
                            <select className="hero-select  w-100" aria-label="Choose Region">
                                <option className="hero-options" value="" selected>Filter by Region</option>
                                <option className="hero-options" value="africa">Africa</option>
                                <option className="hero-options" value="americas">Americas</option>
                                <option className="hero-options" value="asia">Asia</option>
                                <option className="hero-options" value="europe">Europe</option>
                                <option className="hero-options" value="oceania">Oceania</option>
                                <option className="hero-options" value="antarctic">Antarctic</option>
                            </select>
                        </form>
                    </div>

                    <ul className="countries-list row gy-5 list-unstyled">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </ul>
                </div>
            </section>
        </main>
    </>
}

export default Main;