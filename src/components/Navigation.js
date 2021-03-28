import {Link} from 'react-router-dom'

const Navigation = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mb-0 h1" href="/">My Blog</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav justify-content-end">
                    <li className="nav-item active">
                     <Link className="nav-link" to="/">Home</Link>
                     </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">View Blog</Link>
                     </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/addblog">Add Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/favourites">Favourites</Link>
                     </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Navigation