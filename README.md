## proyecto base para proyectos react con router 

## lazyload 

sirve para cargar solo el modulo que el usuario necesita, haciendo el proceso mas rapido, para ello se debe utilizar el metodo lazy de react

para trabajar con layload, los componentes deben ser exportados por default, asi mismo se debe utilizar el suspense, este debe envolver todo el router, y dentro de la propiedad 'fallback' debemos agregar lo queremos que se enseñe mientras se carga el modulo, ejemplo: fallback={<span>Cargando...</span>} 