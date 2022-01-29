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