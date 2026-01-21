import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom pb-3 pt-3">
            <div className="container " style={{fontSize:25}}>
                <Link className="navbar-brand" to="/"><img src="media/logo.svg"  alt="not found" style={{width:155}}/></Link>
                <hr/>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link " style={{fontSize:15}} to="/">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{fontSize:15}}  to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{fontSize:15}}  to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " style={{fontSize:15}} to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{fontSize:15}}  to="/support">Support</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
