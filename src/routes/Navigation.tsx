import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

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
                            <NavLink to='/lazy1' className={({isActive}) => "" + (isActive ? "nav-active" : "")} >lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy2' className={({isActive}) => "" + (isActive ? "nav-active" : "")}>lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy3' className={({isActive}) => "" + (isActive ? "nav-active" : "")}>lazy3</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="lazy1" element={<LazyPage1 /> } />
                    <Route path="lazy2" element={<LazyPage2 /> } />
                    <Route path="lazy3" element={<LazyPage3 />  } />
                    <Route path="/*" element={<Navigate to='lazy1' replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
      </>
  )
};

export default Navigation;
