import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { numero_de_control } = req.query;
      const alumno = await prisma.alumno.findFirst({
        where: {
          numero_de_control: parseInt(numero_de_control),
        },
      });

      if (alumno) {
        res.status(200).json(alumno);
      } else {
        res.status(404).json({ message: "Alumno no encontrado" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
