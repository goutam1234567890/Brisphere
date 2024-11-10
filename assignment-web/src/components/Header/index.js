import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppProvider'
import './index.css'

const Header = () => {

    return (
        <AppContext.Consumer>
            {({ resetForm }) => {
                return (
                    <nav>
                        <div className='nav-container'>
                            <Link to="/" onClick={resetForm}>
                                <h1 className='nav-heading'>Brisphere</h1>
                            </Link>
                            <ul className='nav-ul'>
                                <li className='nav-li'>
                                    <a href="/#mango" className="nav-list">Discover</a>
                                </li>
                                <li className='nav-li'>
                                    <a href="/#service" className="nav-list">Services</a>
                                </li>
                                <li className='nav-li'>
                                    <a href='/#about' className="nav-list">About Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                )
            }}
        </AppContext.Consumer>

    )
}

export default Header
