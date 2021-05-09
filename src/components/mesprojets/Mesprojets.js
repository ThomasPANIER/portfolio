
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
            <p className="text-center text-white fs-6 fw-bolder">
                Voici certaines de mes applications (jeux et sites web) developpées pendant ma formation.<br/>
            </p>
            <p className="">
            En cliquant sur chaque projet vous accèderez à une version en ligne de celui-ci.<br/>
            </p>
            <p className="">
                Pour avoir accès à la chronologie de production de ces applications et<br/>
                pour plus d'informations techniques vous pouvez cliquez
                <a
                    className="liens"
                    href={'https://github.com/ThomasPANIER'}
                    target="_blank"
                    rel="noopener noreferrer"> [ici]
                </a>.            
            </p>    
            <div className="row mt-5">
                {itemsList}
            </div>
        </section>
    );
}

export default Explore;