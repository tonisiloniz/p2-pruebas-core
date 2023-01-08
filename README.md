<img  align="left" width="150" style="float: left;" src="https://www.upm.es/sfs/Rectorado/Gabinete%20del%20Rector/Logos/UPM/CEI/LOGOTIPO%20leyenda%20color%20JPG%20p.png">
<img  align="right" width="60" style="float: right;" src="http://www.dit.upm.es/figures/logos/ditupm-big.gif">

<br/><br/><br/>

# Práctica 2 - CV

Versión: 8 de Enero de 2023

## Objetivos

* Crear una página web con código HTML.
* Definir el estilo gráfico de una página web con CSS.


## Descripción de la práctica

En esta práctica, elaboraremos una página web estática con la información del curriculum vitae del alumno. Para definir la estructura del documento se utilizará HTML y para el estilo gráfico, CSS. La página web incluirá los bloques semánticos típicos (`<header>`, `<main>`, `<section>`, `<footer>`, etc.); integrará objetos externos como imágenes o enlaces; y modificará el estilo a través de CSS.    


## Descargar el código del proyecto

Para poder utilizar el autocorector en esta práctica, es necesario utilizar la **versión 16 de Node.js, superior a 16.8 (https://nodejs.org/es/) y Git (https://git-scm.com/)**.
El proyecto debe clonarse en el ordenador en el que se está trabajando:

```
$ git clone https://github.com/CORE-UPM/P2_CV.git
```

A continuación se debe acceder al directorio de trabajo, e instalar todas las dependencias.

```
$ cd P2_CV
$ npm install
```

## Tareas

Todas las tareas en esta práctica consistirán en escribir en el **directorio raíz del proyecto** el código HTML de la página web en el fichero `cv.html`, y los estilos CSS en el fichero `cv.css`.

Para superar la entrega el alumno debe incluir en el CV:

### 1. Estructura básica de un fichero HTML

* Crear el esqueleto de un fichero HTML llamado `cv.html`. Debe incluir las etiquetas básicas de todo fichero HTML: `<html>`, `<head>`, `<body>`, etc. 
* Crear el fichero CSS (`cv.css`) y cargarlo desde el HTML.

### 2. Head

Incluir en el campo head:
* Título (por ejemplo CV de + su nombre)
* Incluir la hoja de estilos `cv.css`

### 3. Header

Incluir header (`<header>`) que contenga:
* Campo con nombre y apellidos del alumno. La etiqueta utilizada, por ejemplo `<h1>`, debe incluir como atributo `id="nombre"`. 
* Fecha de nacimiento del alumno. La etiqueta utilizada, por ejemplo `<p>`, debe incluir como atributo `id="fecha_nacimiento"`.
* Fotografía del alumno (`img src="foto.jpg"`). La fotografía debe guardarse en el directorio raíz del proyecto y llamarse `foto.jpg`. 
* Otros datos personales como email, dirección, etc., que completen el CV.

### 4. Secciones

El CV debe incluir las siguientes secciones (marca HTML section):

* Sección 1 con atributo `id="estudios"`. El contendio de la sección debe incluir la información académica del alumno. Se recomienda utilizar una lista que muestre en orden cronológico inverso los estudios cursados.
* Sección 2 con atributo `id="laboral"`. El contenido de la sección debe incluir la experiencia laboral del alumno o intereses laborales. Se recomienda utilizar una lista que separe las distintas entradas.
* Sección 3 con atributo `id="otros"`. Se recomienda utilizar una lista como contenido de esta sección. El contenido de la sección debe incluir:
  * Un enlace al correo UPM del alumno (con el @alumnos.upm.es)
  * Información adicional, por ejemplo, idiomas, aficiones, etc.

### 5. Footer

Incluir un footer con la fecha de actualización del CV. Debe contener el siguiente texto: `Actualizado el` + fecha de actualización.

### 6. Modificar el CSS

Modificar el estilo de la página web. 

* Como mínimo se pide modificar el estilo de la etiqueta `<body>` (cambiar el color de fondo) y el estilo de la etiquet `<section>` (cualquier cambio, por ejemplo, añadir borde a las secciones). 
* Realizar otros cambios sobre el CSS.


## Capturas de pantalla
Adicionalmente a pasar la batería de tests y obtener una nota hay que hacer dos capturas de pantalla. Dichas capturas de pantalla se tienen que colocar en formato png, jpg o pdf en el directorio de nombre “miscapturas” situado dentro del directorio raiz de la práctica. El autocorector las subirá junto con el código de la práctica y el resto de las evidencias a Moodle. 
Estas capturas son obligatorias y deben ser personales, en ellas se debe ver el resultado de ejecutarlas en tu ordenador y que se vean claramente los datos solicitados. Si se entrega la captura de un compañero eso es considerado copia de la práctica, con un suspenso automático de toda la asignatura. Y si se entrega algo que no sea una captura como la solicitada (un fichero de imagen cualquiera para poder subir la nota ya que el autocorector solo comprueba que existan, no puede comprobar el contenido) el autocorector dejará subir la nota, pero uno de los profesores de la asignatura revisará estas capturas y pondrá inmediatamente un cero en la práctica. 
Las capturas son las siguientes:
### 1. Captura de pantalla de la página resultante
<kbd>
<img src="https://user-images.githubusercontent.com/52309/211205417-e7065838-a540-43ac-81ad-79752b1bdf37.png" alt="drawing" width="500"/>
</kbd>

### 2. Captura de pantalla del head de la página (que incluya al menos las etiquetas html, head, body y header)
<kbd>
<img src="https://user-images.githubusercontent.com/52309/211205478-5367585c-bc3c-4eac-b9e6-3bad809e0fe1.png" alt="drawing" width="500"/>
</kbd>


## Pruebas con el autocorector

El autocorector es la herramienta que permite pasar la batería de tests a la práctica y producir una nota. También subirla a Moodle junto con el código desarrollado, las capturas y otras evidencias de evaluación.
Ejecute el autocorector tantas veces como desee en la práctica y suba la nota a Moodle también tantas veces como desee hasta que se cierre la entrega, nos quedaremos con la última nota que hayamos subido.

La nota que sube el autocorector es una nota provisional que puede estar sujeta a revisión por parte de los profesores de la asignatura, por ejemplo para revisar las capturas de pantalla subidas o si el código es copia de un compañero o es de un año anterior, en cuyo caso se actuará en consecuencia modificando la nota (o suspendiendo la asignatura completa en caso de copia). 


## Probar la práctica y subir la nota a Moodle:
Para la corrección se utilizará la herramienta autoCOREctor (ver presentación para instalarlo y usarlo en el Moodle de la asignatura, también hay en Moodle un FAQ con soluciones a problemas comunes y por supuesto esta el foro de la asignatura).

Se recomienda descargar el código de la práctica e ir implementando las tareas solicitadas y visualizando el resultado cuando sea posible. Y cuando se tenga algo avanzado comenzar con la autocorrección que nos dará pistas sobre cosas que nos faltan o errores que hemos cometido por ejemplo en un nombre solicitado, si pasamos el autocorector nada más descargar la práctica en muchos casos faltan ficheros y nos dará un cero por no poder pasar la batería de tests.

Pasos a seguir para pasar el autocorector:

```
$ cd P2_CV                   
$ npm install    # no es necesario si ya se hizo al descargar el código de la práctica, solo hace falta hacerlo una vez
$ npx autocorector              
............................    
... (resultado de los tests)
```

Y para subir la nota a Moodle (recordar que tenemos que tener 2 capturas de pantalla en la carpeta “miscapturas”):

```
$ npx autocorector --upload
```


**RÚBRICA**: Se puntuará el ejercicio a corregir sumando el % indicado a la nota total si la parte indicada es correcta:

- **10%:** Existen todas las etiquetas del esqueleto básico de HTML. 
- **10%:** La página web incluye la hoja de estilos (CSS).
- **30%:** Información de la cabecera:
  - **10%:** Existe la cabecera.
  - **10%:** La cabecera contiene la foto (foto.jpg).
  - **10%:** La cabecera contiene los datos personales (mímimo nombre y fecha de nacimiento).
- **20%:** información de las secciones:
  - **10%:** Existen las tres secciones pedidas (estudios, laboral, y otros).
  - **10%:** La sección otros incluye el correo del alumno (con @alumnos.upm.es)
- **10%:** Existe el pie de página con la fecha de actualización.
- **20%:** Se han añadido los estilos solicitados al body y sections de la página web.


Si pasa todos los tests se dará la máxima puntuación.
