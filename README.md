# mobio-ui
Esta es una aplicación Angular generada con el Angular CLI. A continuación, se encuentran algunos comandos básicos para comenzar.

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina antes de seguir estos pasos.

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
Navega al directorio de la aplicación:

cd nombre-de-tu-aplicacion
Instala las dependencias:

npm install
Desarrollo
Ejecuta el servidor de desarrollo y abre la aplicación en tu navegador:

ng serve
La aplicación estará disponible en http://localhost:4200/. La página se recargará automáticamente si realizas cambios en los archivos fuente.

## Creación de Componentes
Genera un nuevo componente con el siguiente comando:

ng generate component nombre-del-componente
Este comando crea una nueva carpeta con los archivos necesarios para un componente, incluyendo archivos de estilo, plantilla y pruebas.

## Creación de Modulos
Genera un nuevo modulo con el siguiente comando:

ng generate module nombre-del-componente
Este comando especifica que el componente es un modulo.

## Creación de Servicios
Genera un nuevo servicio con el siguiente comando:

ng generate service nombre-del-servicio
Este comando crea un servicio que puede ser inyectado en otros componentes o servicios.

## Construcción de la Aplicación
Genera una versión de producción de la aplicación:

ng build --prod
Este comando construye la aplicación en el directorio dist/ para su despliegue en producción.

## Ejecución de Pruebas
Ejecuta las pruebas unitarias:

ng test
Este comando ejecuta pruebas unitarias utilizando Karma.

Ayuda Adicional
Para obtener más información sobre Angular CLI, puedes usar el siguiente comando:

ng help
Este comando muestra ayuda para los comandos de Angular CLI.