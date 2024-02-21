import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <header className="app-header">
            <div className="logo-container">
                <img src={LOGO_URL}
                    className="app-logo" alt="logo" />
            </div>
            <ul className="nav-items">
                <li>Offers</li>
                <li>Help</li>
                <li>Sign In</li>
                <li>Cart</li>
            </ul>
        </header>
    )
}

export default Header;