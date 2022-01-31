## proyecto base para proyectos react con router 

## component-compound

sirve para crear estructuras reutilizable,
para esta seccion se crea un estructura de componente tipo card html, con sus diferentes partes,

inicialmente se creo todo en un solo componente, y cada seccion 'Image','Title','Buttons' era un simple div, luego en ese mismo archivo se crearon componentes que tuvieran cada una de las secciones, y que recibiera como parametros las propiedas que necesita, ejemplo el titulo y demas, con esto se logra que el componente funcione de esta manera

        <ProductCard product={product}>
            <ProductImage img={product.img'} />
            <ProductTitle title={product.title} />
            <ProductButtons/>
          </ProductCard>

al notar que el componente ProductCard recibe toda la data, y que la misma podria entonces, ser accedida por sus componentes hijos, se creo un context, para hacer esta tarea y se ajusto para que los parametros fueran opcionales, en caso de que no se quiera, por ejemplo el titulo que viene en product, si no uno personalizado, ejemplo  <ProductTitle title={`${product.title} mundo`} /> si el titulo dice hola, entonces el resultado seria 'hola mundo'


sabiendo que existe una forma de manejar este tipo de componente como lo hace datatable, ejemplo <componente.propieda> se le agrego al componente padres, los componentes hijos, para este momento se habia organizado cada compoente como archivo independiente, en el archivo index se importo todo, y se compartaron los componentes, donde quedaria ProductCard como padre, y las demas como hijas

        export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardComponent, {
            Title: ProductTitle,
            Image: ProductImage,
            Buttons: ProductButtons
        });


todo este proceso ayudo a que nuestro componente pueda ser utilizado de diferentes formas, por ejemplo:

        <ProductCard product={product}>
            <ProductImage img={product.img'} />
            <ProductTitle title={product.title} />
            <ProductButtons/>
        </ProductCard>

          o

        <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title title={'titulo sobreescrito'} />
            <ProductCard.Buttons/>
        </ProductCard>

        o

        <ProductCard product={product}>
            <ProductButtons/>
            <ProductTitle />
            <ProductImage  />
        </ProductCard>

        o

        <ProductCard product={product}>
            <ProductImage  />
            <ProductTitle />
            <ProductButtons/>
        </ProductCard>

en este ultimo caso, como no se le pasan parametros, los componentes hijos toman los valores que necesitan desde su componente padre


nota: los hijos los podemos ordenar de la forma que queramos, esto no influye en su funcionamiento


# component-compound props

    en esta rama se permitio que a nuestro componente le podamos agregar caracteristicas que le podriamos colocar a una etiqueta html, como por ejemplo, que reciba css, que tenga evento onchange, esto es para hacer reutilizable el componente, asi mismo tener un contro dentro o fuera del mismo componente, este agrega productos a un carrito de compra, teniendo botones para agregar 1 o restar 1, si le agregamos el onchange, nuestro componente, solo retornara 1 o -1 segun esta aumentando o decrementando, si no le colocamos el onchange, nuestro componente asume que nosotros queremos que el controle todo, e internamente nos hara el contador de productos

<b> Esta version es mas mantenible, cada area o hook controla su tarea y no centraliza todo en una sola area </b>


# pasos para subir nuestro paquete a npm

NPM Deploy
1. Paso #0:

    Pulir el código lo más posible, prepararlo para la migración, asegúrate de nombres, css, casos
    extremos, etc.
    
    Usualmente cuando nos damos cuenta que un código puede convertirse en un paquete de NPM por si solo, es porque ya lo creamos en una aplicación, ahí es donde me refiero a realizar la pulida inicial.

2. Paso #1: Crear paquete

    npx tsdx create <b>nombre_de_mi_paquete_a_crear</b>
    ejemplo <b>npx tsdx create jp_product-cad</b>
    
    Si les pregunta, React + TypeScript, posiblemente la primera vez les pida instalar de forma global TSDX (aceptar)
    
    Dejar todo lo que formará parte del paquete en la carpeta SRC
    tsdx.io - JavaScript y React


3. Paso #2: Optimizar index.tsx
    El archivo src/index.tsx, es el punto de entrada de todas las importaciones, por lo que ahí debe de tener las exportaciones que las personas u otros desarrolladores importarán.
    
    Podemos crear exportaciones de esta forma para no perder nuestra estructura.
    
        export * from './components';

4. Paso #3: ( Opcional ) Módulos
    Si tu código que estás creando tiene imágenes importadas de esta forma y/o CSS modularizado de esta forma:

        import noImage from ‘../assets/no-image.jpg';
        import styles from ‘../styles/styles.module.css';

    Necesitaremos crear un archivo de configuración de TSDX “tsdx.config.js” en la raíz que nos ayudará en el proceso de construcción de nuestro paquete.

    Ver ejemplo del archivo tsdx.config.js en la siguiente página:
    
    <b>tsdx.config.js</b>


        const postcss = require('rollup-plugin-postcss');
        const images = require('@rollup/plugin-image');
        module.exports = {
            rollup(config, options) {
            config.plugins = [
                postcss({ modules: true }),
                images({ incude: ['**/*.png', '**/*.jpg'] }),
                ...config.plugins,
            ];
            return config;
            },
        };

    
    Realizar las instalaciones respectivas:
    <b>yarn add -D rollup-plugin-postcss
    yarn add -D @rollup/plugin-image</b>
    
    Mas información sobre tsdx.config.js aquí
    <https://tsdx.io/customization#rollup>


5. Paso #4: Build
    Ejecutar el comando

    <b>yarn build</b>
    o 
    <b>npm build</b>
    
    Corregir cualquier error que aquí aparezca.

6. Paso #5: Example

    Crear un ejemplo de cómo se usa el código, usualmente personas que tengan curiosidad y necesidad de un ejemplo, irán a verlo.

7.  Paso #6: GitHub Repo
    Este paso aunque suene opcional, es importante para la longevidad del proyecto, puede que eventualmente decidas dejarlo y heredarlo a otra persona que lo continuará o invitar colaboradores que puedan realizar actualizaciones o bien aceptar mejoras que otras personas puedan hacer a tu paquete.
    
    Adicionalmente tratar de mantener release tags acorde a la versión del paquete que puedes observar en el package.json
    
    Colocar la referencia de tu repositorio en el package.json que se encuentra en el root del proyecto.
    

        "repository": {
            "url": "https://github.com/<tu repositorio>",
            "type": "git"
        }
    

    <h2>Homepage - Opcional:</h2>
    
    De tener un sitio web personal (puede ser GitHub Pages), agregar la llave homepage, en el package.json
    "homepage": "https://josueperezf.com"
    
    <h3>Keywords - Opcional:</h3>
    
    Si quieres hacer un paquete que pueda ser fácilmente visible por la comunidad y que sea indexado por los bots de Google (y otros), añadir la llave keywords dentro del package.json


        "keywords": [
            "product",
            "card",
            "josue",
            "perez",
        ]


8. Paso #7: Pruebas automáticas
    Es importante asegurarnos que nuestro paquete tenga pruebas automáticas para asegurarnos que funciona como esperamos el día de mañana, esto no asegura que el paquete funcionará sin errores, pero por lo menos tendremos la seguridad de que las funcionalidades principales están probadas y siguen funcionando en cada Release. Esto reduce enormemente el estrés de que nuevas versiones puedan tener breaking changes no intencionales.


    Preferencia personal: <b>Jest</b>
    
    * 1 Instalar las dependencias:

        <b> yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer </b>

    * 2 Instalar la contraparte de TypeScript
    
        <b>yarn add @types/react @types/react-dom @types/react-test-renderer</b>
    
        Ignorar imágenes y css cargados como módulos de JavaScript que darán error. <b>Añadir la siguiente configuración en el package.json </b>


            "jest":{
                "moduleNameMapper": {
                    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|
                    m4a|aac|oga)$": "identity-obj-proxy",
                    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
                }
            }


    * 3- Preferencia personal, configurar modo observador de cambios en testing, crear el siguiente script en el <b>package.json:</b>

        "test:watch": "tsdx test --watch",

9. Paso #8: Publicar

    * 1- Crear una cuenta en NPM

    * 2- Realizar el login en la consola o terminal (Colocar toda la información solicitada)
        <h3>npm login</h3>

    * 3- Ejecutar el siguiente comando para publicar la aplicación:
        <h3>yarn publish </h3>

10. para hacer actualizaciones de nuestro proyecto en NPM "NPM Update - Actualización"
    Una actualización se resume:
    * 1- Actualizar la carpeta SRC - Si aplica

    * 2- Actualizar el example - Si aplica

    * 3- Subir la versión en el package.json

    * 4- Realizar la actualización en el repositorio local y remoto

    * 5- Se recomienda crear un nuevo release tag

    * 6- Ejecutar nuevamente el yarn publish
