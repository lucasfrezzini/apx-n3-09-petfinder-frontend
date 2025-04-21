# PetFinder Frontend - APX.school

Este proyecto es la implementación del frontend para la aplicación **PetFinder**, desarrollada como parte del nivel 3 de la academia APX. El objetivo principal es permitir a los usuarios buscar y reportar mascotas perdidas, utilizando una interfaz intuitiva y funcional. Tambien poder buscar mascotas que esten reportadas como perdidas filtradas por geolocalizacion cercana mejorando la experiencia de busqueda. Tambien pueden ver el listado y detalle de los reportes que reciben de otros usuarios sobre sus mascotas reportadas como asi tambien recibir por correo dicha alerta de avistaje.

[Link a la app Pet Rescue](http://apx.school/)

## Funcionalidades Principales

1. **Búsqueda de Mascotas**: Permite a los usuarios buscar mascotas perdidas en su area cercana mediante geolocalizacion. Ademas filtrar entre Tipo de mascota.
2. **Reporte de Mascotas Perdidas**: Los usuarios pueden reportar mascotas perdidas con detalles, fotos y ubicación.
3. **Mapa Interactivo**: Visualización de ubicaciones de mascotas en un mapa interactivo personalizado.
4. **Autenticación**: Registro e inicio de sesión de usuarios para personalizar la experiencia.
5. **Alertas de avistamiento**: Los usuarios pueden dar alertas de avistajes a los dueños. Estas son envidas dentro de la app y mediante email personalizado.
6. **Configuracion de perfil**: Los usuarios pueden actualizar/modificar sus datos personales, foto de perfil o contraseña.

## Tecnologías Utilizadas

- **Framework**: [React](https://reactjs.org/) para la construcción de la interfaz de usuario.
- **Estado Global**: [Jotai](https://jotai.org/) para la gestión del estado global de la aplicación.
- **Diseño**: Pixel perfect manteniendo el diseño original creado en Figma
- **Estilos**: [TailwindCSS](http://tailwindcss.com/) para un diseño modular y reutilizable.
- **Mapas**: [Mapbox](https://www.mapbox.com/) para la integración de mapas interactivos de muestra de mascotas.
- **Rutas**: [React Router](https://reactrouter.com/) para la navegación entre vistas.
- **Manejo de Formularios**: [React Hook Forms](https://react-hook-form.com/) para obtener y preparar toda la data de las peticiones.
- **Validaciones**: [Zod y Resolvers](https://zod.dev/) para las validaciones de todos los formularios creados.
- **Notificaciones**: [Sonner](https://sonner.emilkowal.ski/) para las notificaciones tipo toast de la app.

## Técnicas y Abstracciones

- **Componentización**: Se implementaron componentes reutilizables y modulares para mantener el código limpio y organizado.
- **Hooks Personalizados**: Uso de hooks personalizados para encapsular lógica reutilizable.
- **Skeleton Loading**: Se utilizaron skeleton para mejorar la experiencia de usuario a la hora de esperar cargas de componentes y peticiones.
- **Gestión de Errores**: Manejo centralizado de errores en las solicitudes HTTP.

## Buenas Prácticas

- **Estructura de Carpetas**: Organización del proyecto siguiendo una estructura clara y escalable.
- **Convenciones de Código**: Uso de ESLint y Prettier para mantener un código consistente.
- **Documentación**: Comentarios claros y documentación de funciones clave.
- **Accesibilidad**: Implementación de prácticas para mejorar la accesibilidad de la interfaz.
