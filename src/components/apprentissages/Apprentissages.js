
import img1 from './attestation_suivi_securite.jpg';
import img2 from './certificat_comprendre_le_web.jpg';
import img3 from './certificat_wordpress.jpg';
import img4 from './certificat_html5_css3.jpg';
import img5 from './certificat_LeFonctionnementDesAlgorithmes.jpg';
import img6 from './certificat_ProgrammerAvecJavaScript.jpg';
import img7 from './certificat_EcrivezDuJavaScriptPourLeWeb.jpg';


function Apprentissages() {
    return(        
        <section>
            <p className="apprentissageP fs-5 mt-5">
                Liste des compétences et langages acquis au cours de ma formation de
                 développeur Web et Web mobile à l'AFPA de Rouen :
            </p>
            <div className="apprentissageDiv row mt-4">
                <div className="col-11 col-sm-6">
                    <ul className="fw-bolder fs-5 mb-5">
                        Versioning, testing et gestion de projet :
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="col-11 col-sm-6">
                    <ul className="fw-bolder fs-5 mb-5">
                        Outils utilisés :
                        <li>GIT / GitHub</li>
                        <li>REACT</li>
                        <li>Node.js</li>
                        <li>Symfony</li>
                        <li>MySQL</li>
                        <li>WordPress</li>
                    </ul>
                </div>
            </div>
            <p className="apprentissageP fs-5">
                Voici les certificats d'apprentissages complémentaires que j'ai obtenus en plus de ma 
                formation de developpeur Web et Web mobile.
            </p>
            <div id="carouselExampleInterval" className="carousel slide carousel-fade carousel-dark img-fluid" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={img1} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={img2} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img  src={img5} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={img6} className="d-block w-100" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img src={img7} className="d-block w-100" alt=""/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <p className="apprentissageP fs-5 mt-5 mb-5">
                Diplômes obtenus de formations antécédentes
            </p>
            <table className="fs-5 m-auto mt-5 mb-5">
                <tr className="">
                    <th>Date</th>
                    <th>Intitulé du diplôme</th>
                </tr>
                <tr>
                    <td>1999-2001</td>
                    <td>BEPA : Services, spécialités vente d'animaux</td>
                </tr>
                <tr>
                    <td>2001-2003</td>
                    <td>BAC Pro : Techninien conseil vente en animalerie</td>
                </tr>
                <tr>
                    <td>2006-2007</td>
                    <td>CAP Logistique</td>
                </tr>
                <tr>
                    <td>2018</td>
                    <td>Attestation de capacité professionnelle en transport routier</td>
                </tr>            
            </table>
        </section>
    );
}

export default Apprentissages;