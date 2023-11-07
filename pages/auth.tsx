"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { sign } from "crypto";
import { signIn } from "next-auth/react";
import { log } from "console";

const Auth = () => {
  const router = useRouter();

  const [matricula, setMatricula] = useState(""); // Estado para la matrícula
  const [contrasena, setContrasena] = useState(""); // Estado para la contraseña

  const login = useCallback(async () => {
    if (!matricula || !contrasena) {
      alert("Se ocupa un usuario o contraseña.");
      return;
    }
    try {
      await signIn("credentials"),
        {
          matricula,
          contrasena,
          redirect: false,
          callbackUrl: "/",
        };
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }, [matricula, contrasena, router]);

  // Controlador de cambio para la matrícula
  const handleMatriculaChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMatricula(event.target.value);
  };

  // Controlador de cambio para la contraseña
  const handleContrasenaChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContrasena(event.target.value);
  };

  return (
    <div className="relative h-full w-full">
      <div className="w-full h-full">
        <div className="flex justify-center">
          <div className="px-16 py-16 self-center rounded-md w-full bg-white">
            <div className="flex flex-row">
              <div className="flex flex-col w-1/2">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={"/uabc-logo.png"}
                    width={110}
                    height={200}
                    alt="logo"
                  />
                  <h2>Universidad Autonoma de Baja California</h2>
                  <h2 className="text-4xl font-bold text-black mt-14">
                    Acceso
                  </h2>
                  <div className="text-left mt-4">
                    <p>Matricula</p>
                    <input
                      type="text"
                      placeholder="Matricula"
                      className="input input-bordered input-success w-full max-w-xs bg-white text-black"
                      value={matricula}
                      onChange={handleMatriculaChange}
                    />
                  </div>
                  <div className="text-left mt-4">
                    <p>Contraseña</p>
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="input input-bordered input-success w-full max-w-xs bg-white text-black"
                      value={contrasena}
                      onChange={handleContrasenaChange}
                    />
                  </div>
                  <button
                    className="btn btn-wide bg-green-700 text-white mt-7"
                    onClick={login}
                  >
                    Iniciar Sesion
                  </button>
                  <button
                    className="btn btn-wide bg-green-700 text-white mt-5"
                    onClick={() => router.push("/register")}
                  >
                    Registrarse
                  </button>
                </div>
              </div>
              <div className="bg-green-700 h-full w-1/2">
                <Image src={"/Lab.png"} width={1200} height={200} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
