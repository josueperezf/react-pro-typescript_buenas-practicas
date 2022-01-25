## proyecto base para proyectos react con router 

## lazyload de react-router-dom v6

las cargas perezosas, preferiblemente deben ser manejadas por modulo, para que el usuario no vea un parpadeo en la pantalla mientras se hace la carga, si hacemos esto por modulo, ejemplo productos, cuando entre a algo que tenga que ver con productos, cargamos esa seccion y y no lo hacemos pagina por pagina

lazyload sirve para cargar solo el modulo que el usuario necesita, haciendo el proceso mas rapido, para ello se debe utilizar el metodo lazy de react

para trabajar con layload, los componentes deben ser exportados por default, asi mismo se debe utilizar el suspense, este debe envolver todo el router, y dentro de la propiedad 'fallback' debemos agregar lo queremos que se enseñe mientras se carga el modulo, ejemplo: fallback={<span>Cargando...</span>} 

### lazyload => Rutas anidadas nested routes

<https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes>

para esto el path debe ser diferente, ahora no puede ser una ruta fija, si no con el comodin de '*',
ejemplo  {to: '/lazyLayout/', path: '/LazyLayout/*', name:'LazyLayout - Dashboard', Component: LazyLayout }
con esto le decimos que cuando cargue a cualquier url que lleve '/lazyLayout/*' va a ser cargado con 'Lazyload' o cargas perezosas