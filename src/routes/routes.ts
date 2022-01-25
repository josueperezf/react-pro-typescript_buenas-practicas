import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/';
import {NoLazyload} from '../01-lazyload/pages';

// el componente debe llamarse con la letra 'c' en mayuscula 'C', ya que los componentes de React se deben llamar con la primera letra Mayuscula

type JSXComponent = ()=> JSX.Element;
interface Route {
    to: string,
    path: string,
    name: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}


/**
 * IMPORTANTE
 * 
 * el texto que esta comentado en las constante lazy1, lazy2, lazy3 es para que al nosotros ver el inspector de elementos,
 * en red, podamos ver el nombre de nuestro modulo cargandose, con el texto que nosotros le indiquemos,
 * si no le colocamos el webpackChunkName entonces el colocara un nombre extraño el cual al nosotros revisar el inspector de elementos,
 * no podremos saber cual fue el componente que se cargo
 */
const LazyLayout = lazy(()=>import( /* webpackChunkName: "LazyPage1" */ '../01-lazyload/layout/LazyLayout'));
// const lazy1 = lazy(()=>import( /* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
// const lazy2 = lazy(()=>import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
// const lazy3 = lazy(()=>import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));


// para las rutas
export const routes: Route[] = [
    {path: 'no-lazy', to: '/no-lazy', name:'Carga normal', Component: NoLazyload }, // carga normal
    {path: '/LazyLayout/*', to: '/lazyLayout/',  name:'LazyLayout - Dashboard - Carga perezosa', Component: LazyLayout }, // carga  perezosa
]