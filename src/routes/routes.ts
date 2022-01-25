import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/';

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
const lazy1 = lazy(()=>import( /* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'));
const lazy2 = lazy(()=>import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'));
const lazy3 = lazy(()=>import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {to: '/lazy1', path: 'lazy1', name:'lazy-1', Component: lazy1 },
    {to: '/lazy2', path: 'lazy2', name:'lazy-2', Component: lazy2 },
    {to: '/lazy3', path: 'lazy3', name:'lazy-3', Component: lazy3 },
]