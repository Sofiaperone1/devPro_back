import express, { Request, Response } from "express";


// Crear la aplicación de Express
const app = express();

// Middleware para analizar JSON
app.use(express.json());

// Ruta principal
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World",
  });
});

// Establecer puerto para producción y desarrollo
const PORT = process.env.PORT || 4000;

// Iniciar el servidor solo si no está en un entorno de prueba
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  });
}

// Exportar la aplicación para pruebas o despliegue en Vercel
export default app;
