# PetFinder Frontend

Este proyecto es la implementación del frontend para la aplicación **PetFinder**, desarrollada como parte del nivel 3 de la academia APX. El objetivo principal es permitir a los usuarios buscar y reportar mascotas perdidas, utilizando una interfaz intuitiva y funcional.

## Tecnologías Utilizadas

- **Framework**: [React](https://reactjs.org/) para la construcción de la interfaz de usuario.
- **Estado Global**: Context API de React para la gestión del estado global de la aplicación.
- **Estilos**: [CSS Modules](https://github.com/css-modules/css-modules) para un diseño modular y reutilizable.
- **Mapas**: [Mapbox](https://www.mapbox.com/) para la integración de mapas interactivos.
- **HTTP Requests**: [Axios](https://axios-http.com/) para la comunicación con la API backend.
- **Rutas**: [React Router](https://reactrouter.com/) para la navegación entre vistas.

## Técnicas y Abstracciones

- **Componentización**: Se implementaron componentes reutilizables y modulares para mantener el código limpio y organizado.
- **Hooks Personalizados**: Uso de hooks personalizados para encapsular lógica reutilizable.
- **Lazy Loading**: Carga diferida de componentes para mejorar el rendimiento.
- **Gestión de Errores**: Manejo centralizado de errores en las solicitudes HTTP.

## Buenas Prácticas

- **Estructura de Carpetas**: Organización del proyecto siguiendo una estructura clara y escalable.
- **Convenciones de Código**: Uso de ESLint y Prettier para mantener un código consistente.
- **Documentación**: Comentarios claros y documentación de funciones clave.
- **Accesibilidad**: Implementación de prácticas para mejorar la accesibilidad de la interfaz.

## Funcionalidades Principales

1. **Búsqueda de Mascotas**: Permite a los usuarios buscar mascotas perdidas en su área.
2. **Reporte de Mascotas Perdidas**: Los usuarios pueden reportar mascotas perdidas con detalles y ubicación.
3. **Mapa Interactivo**: Visualización de ubicaciones de mascotas en un mapa interactivo.
4. **Autenticación**: Registro e inicio de sesión de usuarios para personalizar la experiencia.

## Instalación y Ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/petfinder-frontend.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm start
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request con tus mejoras.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
