
import React from "react";
import Projet from "./projet/Projet";


function Explore() {
    const items = [
        "chiffoumi",
        "chifoumi2",
        "JeuDesPaires",
        "JeuDuMorpion",
        "TerreDeGeek",
        "NorImmo",
        "Appli-banque",
        "FanSiteStarwars"
    ];

    let itemsList = items.map((item) =>
        <Projet content={item} />
    );

    return(
        <section className="project mt-5 mb-5">
            
        </section>
    );
}

export default Explore;