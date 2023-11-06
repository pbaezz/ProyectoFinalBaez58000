import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink} from 'react-router-dom';


const NavBar = () =>{
    return (

        <nav className="navbar-mio" role="navigation" aria-label="main navigation">
            <div className="navbar-brand-mio">

                <div className="navbar-menu">
                    <div className="columns">
                        <div className="column">
                            <NavLink to={`/`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
                        </div>

                        <div className="column">
                            <NavLink to={`/category/Cdjs`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cdjs</NavLink>
                        </div>
                        <div className="column">
                            <NavLink to={`/category/Auriculares`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Auriculares</NavLink>
                        </div>
                        <div className="column">
                            <NavLink to={`/category/Bandejas Vinilos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bandejas Vinilos</NavLink>
                        </div>
                    </div>
                </div >

                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;