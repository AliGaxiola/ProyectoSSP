"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [alumnoData, setAlumnoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reemplaza '123456' con el número de control del alumno que deseas consultar
    fetch("/api/alumno?numero_de_control=123456")
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta de la API:", data); // Agrega esta línea
        setAlumnoData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del alumno:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      <h1>Hello World!</h1>
      {loading ? (
        <p>Cargando datos del alumno...</p>
      ) : alumnoData ? (
        <div>
          <h2>Datos del Alumno</h2>
          <p>Nombre: {alumnoData.nombre}</p>
          <p>Primer Apellido: {alumnoData.primer_apellido}</p>
          <p>Segundo Apellido: {alumnoData.segundo_apellido}</p>
          <p>Número de control: {alumnoData.numero_de_control}</p>
          <p>Facultad: {alumnoData.facultad}</p>
          {/* Puedes mostrar otros datos del alumno aquí */}
        </div>
      ) : (
        <p>No se encontró al alumno.</p>
      )}
    </main>
  );
}
