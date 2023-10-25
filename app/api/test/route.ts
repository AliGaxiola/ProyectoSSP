// Importa la conexión a la base de datos desde db.js
import { pool } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Realiza la consulta a la tabla "usuario"
    const [rows, fields] = await pool.execute("SELECT * FROM usuario");

    // Devuelve los resultados como JSON
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    // En caso de error, maneja la excepción
    return NextResponse.json(
      { message: "Error al consultar la tabla usuario" },
      { status: 500 }
    );
  }
}
