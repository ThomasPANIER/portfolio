
import {Link} from "react-router-dom";

function Nav() {
    return(
        <div>
            <header>

            </header>
            <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
                <Link className="navbar-brand" to="#">Accueil</Link>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="#Biographie">Biographie</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#Tutoriels">Tutoriels</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#Mes projets" role="button" aria-expanded="false">Mes projets</Link>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><Link className="dropdown-item" to="#one">one</Link></li>
                            <li><Link className="dropdown-item" to="#two">two</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="#three">three</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            
        </div>    
            
    );
}

export default Nav;
