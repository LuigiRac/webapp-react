import { NavLink } from "react-router-dom"

export default function HeaderContent() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
                        </li>


                    </ul>
                </div>
            </nav>

        </header >
    )
}