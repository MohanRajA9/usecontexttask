import { Link } from "react-router-dom";
function NavBar({ handleToNav, toAdd }) {
    let totalCount = 0
    if (toAdd.length !== 0) {
        totalCount = toAdd.reduce((accum, current) => accum + current.count, 0)

    } else {
        console.log("add to cart");
    }
    return (
        <>
            <nav style={{ position: "sticky", top: "0", zIndex: "9000" }} className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul style={{ display: "flex" }} className="navbar-nav">
                            <li className="nav-item ">
                               <Link className="nav-link" to={"/"}>Home</Link>
                            </li>
                            
                            <li className="nav-item ">
                                <button onClick={handleToNav} type="button" className="nav-link" href="#"><i class="bi bi-basket"></i><span className="badge badge-light">{totalCount
                                }</span></button>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default NavBar;