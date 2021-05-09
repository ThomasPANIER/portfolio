
import img1 from './attestation_suivi_securite.jpg';
import img2 from './certificat_comprendre_le_web.jpg';
import img3 from './certificat_wordpress.jpg';
import img4 from './certificat_html5_css3.jpg';
import img5 from './certificat_LeFonctionnementDesAlgorithmes.jpg';
import img6 from './certificat_ProgrammerAvecJavaScript.jpg';
import img7 from './certificat_EcrivezDuJavaScriptPourLeWeb.jpg';


function Apprentissages() {
    return(        
        <section classNameName="">
            <p>
                Voici des exemples d'apprentissages supplémentaires en parallèle de ma 
                formation de developpeur web et web mobile à l'afpa
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
            <p>
                Mes formations antécédentes à préciser.
            </p>
        </section>
    );
}

export default Apprentissages;