import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';

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
      <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React logo' />
                    <ul>
                        {
                            routes.map(({to, name}) => (
                                <li key={to}>
                                    <NavLink to={to} className={({isActive}) => "" + (isActive ? "nav-active" : "")} > {name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(route => (
                            <Route key={route.to} path={route.path} element={<route.Component /> } />
                        ))
                    }
                    <Route path="/*" element={<Navigate to={routes[0].to} replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
      </Suspense>
  )
};

export default Navigation;
