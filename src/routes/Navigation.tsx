import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import ShoppingPage from '../02-patron-de-diseno-component-patterns/pages/ShoppingPage';
import logo from '../logo.svg';

const Navigation = () => {
    /**
     * Link es como un ancla normarl <a>
     * NavLink hace lo mismo que Link pero nos da informacion si estamos en la url dependiendo del path del link para clases css
     * 
     * <Route path="/*" element={<Navigate to='home' replace /> } />
     * nos permite de que si trata de navegar a una pagina que no existe, lo lleva al home, 
     * pero al mismo tiempo evita que al darle atras, lo redireccione a la pagina erronea que por url intento llegar
     * ejemplo /kajsdlkhjasd, lo llevara al /home
     */
  return (
      <>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React logo' />
                    <ul>
                        <li>
                            <NavLink to='/' className={({isActive}) => "" + (isActive ? "nav-active" : "")} >Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({isActive}) => "" + (isActive ? "nav-active" : "")}>about</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={({isActive}) => "" + (isActive ? "nav-active" : "")}>users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="about" element={<h1> Desde About </h1>} />
                    <Route path="users" element={<h1> Desde Users </h1>} />
                    <Route path="/" element={<ShoppingPage />  } />
                </Routes>
            </div>
        </BrowserRouter>
      </>
  )
};

export default Navigation;
