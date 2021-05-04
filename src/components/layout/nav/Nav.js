
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link" to="#fat">@fat</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#mdo">@mdo</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Dropdown</Link>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><Link className="dropdown-item" to="#one">one</Link></li>
                        <li><Link className="dropdown-item" to="#two">two</Link></li>
                        <li><hr> className="dropdown-divider"></li>
                        <li><Link className="dropdown-item" to="#three">three</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabindex="0">
            <h4 id="fat">@fat</h4>
            <p>...</p>
            <h4 id="mdo">@mdo</h4>
            <p>...</p>
            <h4 id="one">one</h4>
            <p>...</p>
            <h4 id="two">two</h4>
            <p>...</p>
            <h4 id="three">three</h4>
            <p>...</p>
        </div>

    );
}

export default Nav;