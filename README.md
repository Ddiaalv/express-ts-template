# Express + TypeScript

Template creado para uso personal destinado a generar un nuevo proyecto de Backend de forma fácil usando `Express` y `TypeScript`.

Si inicializamos directamente el template nos dará error... ya que está preparado para conectarse a una `BDD` de `MariaDB` la cual no está incluida en este template. Los datos de conexión están especificados en varios archivos de variables de entorno: `.env.development`, `.env.production`, `.env.test`.

## Indice

- [Express + TypeScript](#express--typescript)
  - [Indice](#indice)
  - [Tecnologías](#tecnologías)
  - [Scripts de npm](#scripts-de-npm)
  - [Ejemplo archivo .env:](#ejemplo-archivo-env)

## Tecnologías

| Nombre                                                 | Detalles                                                                    |
| ------------------------------------------------------ | --------------------------------------------------------------------------- |
| 💻[Node.js](https://nodejs.org/en/)                    | Es nuestro entorno en tiempo de ejecución con Javascript                    |
| 🔨[Express](http://expressjs.com/)                     | Utilidad para gestionar de mejor forma el crear aplicaciones web y API      |
| 🌐[Typescript](https://www.typescriptlang.org/)        | Lenguaje de tipos para Javascript                                           |
| 👀[Eslint](https://eslint.org/)                        | Linter para controlar errores en nuestro código                             |
| 🦋[Prettier](https://prettier.io/)                     | Formateador de nuestro código                                               |
| 👻[DotEnv](https://www.npmjs.com/package/dotenv)       | Utilidad para utilizar variables de entorno en nuestro desarrollo           |
| 👻[Cross-env](https://www.npmjs.com/package/cross-env) | Simplifica la asignación de nuestras variables de entorno                   |
| 🧪[Jest](https://jestjs.io/)                           | Nuestro gestor de test para Javascript                                      |
| ⚗️[Supertest](https://www.npmjs.com/package/supertest) | Módulo para la abstracción de alto nivel para testing de HTTP               |
| 👿[Nodemon](https://www.npmjs.com/package/nodemon)     | Utilidad que monitorea los cambios de nuestro código mientras desarrollamos |
| 🐺[Husky](https://www.npmjs.com/package/husky)         | Comprueba errores en nuestro código para evitar errores en nuestros commit  |
| 🚫[Lint-staged](https://github.com/okonet/lint-staged) | Ejecuta linter/formater/tests para evitar errores antes de hacer un commit  |
| 💽[Mysql](https://www.npmjs.com/package/mysql)         | Conector para node para realizar una conexión a nuestra base de datos Mysql |

## Scripts de npm

| Comando      | Detalles                                                                                  |
| ------------ | ----------------------------------------------------------------------------------------- |
| `start`      | Servidor de local de produccion                                                           |
| `dev`        | Servidor local para desarrollo                                                            |
| `build`      | Convierte los archivos TS a JS para produccion                                            |
| `test`       | Ejecuta los test                                                                          |
| `test:watch` | Cada vez que hagamos un cambio en los tests se vuelven a ejecutar                         |
| `test:check` | Comprueba si hay errores en nuestros tests. (utilizado para lint-staged)                  |
| `precommit`  | Comprueba el linter/formatter/tests para evitar subir errores en nuestros archivos staged |

## Ejemplo archivo .env:

```powershell
# .env Database:
DB_DATABASE=
DB_HOST=
DB_USER=
DB_PASSWORD=
```
