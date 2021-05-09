
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className="nav sticky-top nav-pills flex-column flex-sm-row">
            <Link className="flex-sm-fill text-sm-center nav-link" aria-current="page" to='/'>Accueil</Link>
            <Link className="flex-sm-fill text-sm-center nav-link" to='/biographie'>Biographie</Link>
            <Link className="flex-sm-fill text-sm-center nav-link" to='/apprentissages'>Mes apprentissages</Link>
            <Link className="flex-sm-fill text-sm-center nav-link" to='/mesprojets'>Mes projets</Link>
            {/* <Link className="flex-sm-fill text-sm-center nav-link disabled" to='#'>En attente ... Mon CV</Link> */}
        </nav>
    );
}

export default Nav;