# ***Front End***

<br>

## **Issues**

<br>

> ### #1 - Implementación template general responsive
> ---
>    - **Header:**
>
>        1. Creación de un header al 100% de la pantalla y de posición fija al tope de la página que, se verá en todas las pantallas de la aplicación, siguiendo el modelo de referencia.
>        2. Dentro del header armar un bloque alineado a la izquierda que incluya el logotipo y el lema de la empresa. Ambos deben ser clickeables por las personas usuarias y dirigir a la Home del sitio.
>        3. Dentro del header armar un bloque alineado a la derecha que contenga (según el caso) un botón de inicio de sesión y/o un botón de registro en el caso de que el usuario no esté logueado y de caso contrario mostrar el nombre de usuario, un avatar de letras con las iniciales del nombre de usuario y un link de cierre de sesión.
>
>    - **Body:** Representar un body general con el color de background elegido que ocupe el 100% del alto de la pantalla.
>
>    - **Footer:**
>
>        1. Creación de un footer al 100% del ancho de la pantalla y al pie de la misma que, se verá en todas las pantallas de la aplicación, siguiendo el modelo de referencia.
>        2. Dentro del footer armar un bloque alineado a la izquierda que incluya el isologotipo, el año y el copyright.
>        3. Dentro del footer armar un bloque alineado a la derecha que incluya íconos de redes sociales. Los íconos no necesitan ser vinculados a ninguna página.


> ### #2 - Implementación template Login y registro
> ---
>    - **Bloque general:** Creación de un bloque que se muestre a pantalla completa sin scroll, dejando visible en la parte superior de la pantalla sólo el header y el bloque de búsqueda. Que pueda contener en su centro un formulario. Además debe incluir en su extremo superior derecho un ícono para cerrar el bloque.
>
>    - **Login:** Creación de un formulario de inicio de sesión que contenga los siguientes inputs y labels:
>
>       - Email (de type=”email”)
>       - Password (de type=”Password”)
>       - Además debe tener un botón que debe decir "Iniciar sesión".
>       - Debajo del botón debe haber un texto que redireccione al registro.
>
>   - **Registro:** Creación de un formulario de registro que contenga los siguientes inputs:
>
> # Según GitLab
>       - Nombre (de type=”text”)
>       - Apellido (de type=”text”)
>       - Email (de type=”email”)
>       - Repetir email (de type=”email”) 
>       - Password (de type=”password”)
>       - Además debe tener un botón que debe decir "Registro".
> # Según PlayGround
>       - Nombre (de type=”text”)
>       - Apellido (de type=”text”)
>       - Email (de type=”email”)
>       - Password (de type=”password”)
>       - Repetir Password (de type=”password”)
>       - Además debe tener un botón que debe decir "Crear Cuenta / Registro".
> ---
>       - Debajo del botón debe haber un texto que redireccione al login.
>


> ### #3 - Implementación template bloque categorías
> ---
>    - **Categorías:** Creación de un bloque que incluya un heading < h2 / > cómo título, un párrafo < p / > y debajo 4 imágenes con sus correspondientes captions. Deben respetarse los efectos visuales tales como bordes, sombras, etc.


> ### #4 - Implementación template bloque listado
> ---
>   - Cards: 
>       1. **Card:** Creación de una card en la que se representará cada producto.
>       2. **Card:** Dentro de la card incluir un bloque alineado a la izquierda que incluya una imagen centrada.
>       3. **Card:** Dentro de la card incluir un bloque alineado a la derecha que incluya la categoría del producto, el nombre, ubicación, la descripción. Y un botón que diga "Ver detalle".
>
>   - Listas:
>       1. **Lista:** Crear un JSON con un array que contenga 8 elementos. Estos serán objetos con los siguientes atributos:
>           - **img:** (string) que contenga una dirección a una imagen de banco de fotos.
>           - **category:** (string) con una de las 4 categorías brindadas por backend deben ser incluídas al menos 2 veces cada categoría en el Json.
>           - **title:** (string) Título del producto a elegir.
>           - **Location:** (string) Ciudad.
>           - **Description:** (string) Ver catipsum.com.
>       2. **Lista:** Crear una función map que permita iterar el JSON y representar 8 cards. Una por cada objeto del JSON.
>       3. **Lista:** Retornar la función en un bloque debajo del bloque de categorías.


> ### #5 - Implementación template bloque buscador
> ---
>
> # Según GitLab
>   - **Buscador 1:** Creación de un bloque que incluya un heading < h1 / > cómo título, un párrafo < p / >.
>
> # Según PlayGorund
>   - **Buscador 1:** Creación de un bloque que incluya un heading < h1 / > cómo título.
> ---
>   - **Buscador 2:** Creación de un formulario que incluya:
>       - Select: Ciudad
>       - Fecha de inicia y fin: Doble calendar
>       - Botón


> ### #6 - Evento de Header
> ---
>
> # Según PlayGorund
> En el caso de mobile estos botones serán accesibles cuando el usuario haga click en el burguer.
>
>   - **Clic Botón de ir a Login:** Deberá mostrarse el header, el buscador y el bloque de login en la pantalla.
>   - **Clic Botón de ir a Registro:** Deberá mostrarse el header, el buscador y el bloque de registro en la pantalla.


> ### #7 - Evento de login de usuario
> ---
>   - **Validaciones en inputs:** El formulario debe validar que el campo de email sea un email válido y que la password tenga más de 6 caracteres.
>   - **Botón:** Al dar click que funcione la validación de ser correcta que compare los datos con un email y una password de prueba creadas en un objeto.
>   - **Credenciales inválidas:** El formulario indique “Por favor, vuelva a intentarlo sus credenciales son inválidas”.
>   - **Credenciales válidas:** Se simulará que el usuario está logueado desaparecerá el formulario de login volveremos a la Home inicial pero en el header a la derecha, en vez de ver los botones de inicio de sesión y registro veremos: Hola [ nombre_de_usuario ], un link de cerrar sesión y un avatar circular con las iniciales del usuario.


> ### #27 - Crear las rutas para la página principal y el detalle de producto:
> ---
>   - **Página de inicio**.
>   - **Detalle de producto**. Ésta última estará asociada al id de cada producto (producto/{identificador_de_producto}).
>


> ### #28 - Crear la página de detalle de producto:
> ---
>   La página deberá seguir la estructura definida el los diseños y deberá incluir los datos relevantes del producto:
>   
>   - Título y Categoría
>   - Ubicación, Imágenes, Descripción, Características
>   - Disponibilidad
>   - Política
>   
>   - **Contenedor**: Esta página debe tener como contenedor el componente template general creado durante el primer sprint.
>   
>   - **Bloque Heading**: 
>
>			- Debe cubrir el 100% del ancho de la pantalla.
>			- Incluir alineado a la izquierda dentro del área de contenido:
>
>				- Categoría del producto
>				- Título del producto
>
>			- Incluir alineado a la derecha dentro del área de contenido:
>
>				- Flecha volver atrás: Implementar un ícono debajo del Heading que permita volver a la Home.
>
>   - **Bloque de ubicación**: Crear un bloque que cubra el 100% del ancho de la pantalla que incluya dentro del área de contenido los datos de ubicación.
>
>   - **Bloque de Imágenes**: Se presentará una galería de imágenes en los siguientes formatos dependiendo del dispositivo.
>
>	    - La galería de imágenes debe estar incluida como librería en NPM o Yarn.
>		- La galería de imágenes debe incluir un botón que permita cerrar y retornar a la visualización del detalle del producto.
>		- Versión Desktop: 
>
>		    - Debe presentar un bloque al 100% del ancho del contenedor que incluye 5 imágenes. Las mismas deben estar distribuidas del siguiente modo:
>
>				- Mitad izquierda del bloque: Imagen principal.
>				- Mitad derecha distribuida en una grilla de 2 filas y 2 columnas que incluye 4 imágenes.
>
>			- Las imágenes deben presentar bordes redondeados y no deben disparar ningún evento.
>			- El bloque debe incluir en su región inferior derecha el texto “Ver Más", el cual, permitirá acceder a un componente de galería de imágenes para ver todas las imágenes disponibles del producto. (la elección de la galería específica a utilizar es libre, lo mismo que su estética (no es necesario seguir al pie de la letra la galería presentada en Figma).
>
>		- Versión Tablet y Mobile:
>
>			- Debe presentar una galería con auto deslizamiento de imágenes al 100% del ancho del contenedor que incluye 1 imagen que irá cambiando a medida que pasen 3 segundos.
>			- El bloque debe incluir en su región inferior derecha un texto que indique cuál es el número de la foto actual y el total de imágenes (la elección de la galería específica a utilizar es libre).
>
>	- **Bloque de descripción**: Crear un bloque que cubra el 100% del contenedor que incluya:
>
>		- Título
>		- Texto de descripción del producto.
>
>	- **Bloque de caracteristicas del producto**: Crear un bloque que cubra el 100% del contenedor que incluya:
>
>		- Título subrayado.
>		- Grilla de (4 desktop, 2 tablet y phone) columnas con una enumeración de los atributos del producto junto a su ícono asociado.
>
>	- **Bloque de política del producto**: Crear un bloque que cubra el 100% del contenedor que incluya una grilla de (3 desktop, 2 tablet, 1 phone) columnas con:
>
>		- Normas: Título y descripción.
>		- Seguridad: Título y descripción.
>		- Cancelación: Título y descripción.
>   


> ### #29 - Crear bloque de fechas disponibles y botón de reserva:
> ---
>   
>   - Versión Desktop: 
>
>		- Debe incluir un calendario alineado a la izquierda y que ocupe (⅔ partes de la grilla de contenido) que muestre 2 meses simultáneamente que indique tanto fechas disponibles como no disponibles.
>		- El calendario sólo debe permitir navegar entre distintos meses. (su finalidad es sólo visualización de disponibilidad).
>		- Bloque de reserva debe ocupar ⅓ parte de la grilla de contenido:
>
>			- Alinearlo a la derecha del calendario.
>			- Debe incluir un texto.
>			- Debe incluir un botón de “Iniciar Reserva" (sin eventos).
>
>	- Versión Tablet: 
>
>		- Debe incluir un calendario al 100% del ancho del contenedor que muestre 2 meses simultáneamente que indique tanto fechas disponibles como no disponibles.
>		- El calendario sólo debe permitir navegar entre distintos meses. (su finalidad es sólo visualización de disponibilidad).
>		- Bloque de reserva con una grilla de 2 columnas:
>
>			- Debe incluir un texto.
>			- Debe incluir un botón de “Iniciar Reserva" (sin eventos).
>
>	- Versión Mobile:
>
>		- Debe incluir un calendario al 100% del ancho del contenedor que muestre 1 mes simultáneamente que indique tanto fechas disponibles como no disponibles.
>		- El calendario sólo debe permitir navegar entre distintos meses. (su finalidad es sólo visualización de disponibilidad).
>		- Bloque de reserva:
>
>			- Debe incluir un texto al 100% del ancho de la pantalla.
>			- Debe incluir un botón de “Iniciar Reserva" (sin eventos) al 100% del ancho de la pantalla.
>   


> ### #30 - Implementar el consumo de APIs en el Front End:
> ---
>   
>   - Los elementos del listado de productos deben ser obtenidos de la API de productos.
>		- Los elementos del bloque de categorías deben ser obtenidos de la API de categorías.
>		- El selector de ciudades debe presentar en sus opciones datos consumidos de la API de ciudades.
>		- En la página de detalle de producto, utilizar el id de la URL para hacer un llamado a la API de producto por id, con el fin de completar la información de la pantalla con los datos devueltos.
>


> ### #31 - Implementar filtros de búsqueda en el listado de productos:
> ---
>   - Los elementos del listado de productos deben poder ser filtrados al seleccionar una categoría. en el bloque de categorías.
>	- Al seleccionar una ciudad en el selector de ciudades y dar clic en el botón de búsqueda, la lista de productos debe filtrar los elementos por la ciudad elegida.
>   
   
