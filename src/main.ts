// Importar la función NestFactory y el módulo AppModule del framework NestJS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Función asincrónica que inicializa la aplicación NestJS
async function bootstrap() {
  // Crear una instancia de la aplicación utilizando AppModule
  const app = await NestFactory.create(AppModule);

  // Obtener el puerto del entorno o usar el puerto 3000 como predeterminado
  const port = process.env.PORT || 3000;

  // Hacer que la aplicación escuche en el puerto obtenido
  await app.listen(port);

  // Imprimir un mensaje en la consola indicando dónde se está ejecutando la aplicación
  console.log(`La aplicación se está ejecutando en: http://localhost:${port}`);
}

bootstrap();
