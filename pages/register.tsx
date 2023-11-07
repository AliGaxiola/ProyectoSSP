"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Register = () => {
  const router = useRouter();

  return (
    <div className="relative h-full w-full">
      <div className="w-full h-full">
        <div className="flex justify-center">
          <div className="px-16 py-16 self-center rounded-md w-full bg-white">
            <div className="flex flex-row">
              <div className="flex flex-col w-1/2">
                <div className="flex flex-col items-center text-center">
                  <button
                    className="btn btn-circle btn-outline"
                    onClick={() => router.push("/auth")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <Image
                    src={"/uabc-logo.png"}
                    width={110}
                    height={200}
                    alt="logo"
                  />
                  <h2>Universidad Autonoma de Baja California</h2>
                  <h2 className="text-4xl font-bold text-black mt-12 mb-5">
                    Registro
                  </h2>
                  <div className="grid grid-cols-2 gap-4 ml-4">
                    <div className="text-left mt-4">
                      <p>Nombre</p>
                      <input
                        type="text"
                        className="input input-bordered input-success w-full max-w-xs bg-white text-black"
                      />
                    </div>
                    <div className="text-left mt-4">
                      <p>Primer apellido</p>
                      <input
                        type="text"
                        className="input input-bordered input-success w-full max-w-xs bg-white text-black"
                      />
                    </div>
                    <div className="text-left mt-4">
                      <p>Segundo apellido</p>
                      <input
                        type="text"
                        className="input input-bordered input-success w-full max-w-xs bg-white text-black"
                      />
                    </div>
                    <div className="text-left mt-4">
                      <p>Matricula</p>
                      <input
                        type="number"
                        className="input input-bordered input-success w-full max-w-xs bg-white text-black"
                      />
                    </div>
                    <div className="text-left mt-4">
                      <p>Contraseña</p>
                      <input
                        type="password"
                        className="input input-bordered input-success w-full max-w-xs bg-white text-black"
                      />
                    </div>
                    <div className="text-left mt-4">
                      <p>Repetir contraseña</p>
                      <input
                        type="password"
                        className="input input-bordered input-success w-full max-w-xs bg-white text-black"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="mt-4 text-left">Facultad</p>
                    <select className="select select-success w-full max-w-xs bg-white">
                      <option disabled selected>
                        Selecciona tu facultad
                      </option>
                      <option>Facultad de Mercadotecnia</option>
                      <option>Facultad de Gastronomia</option>
                    </select>
                  </div>
                  <button className="btn btn-wide bg-green-700 text-white mt-7">
                    Registrarse
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center text-center h-full w-1/2">
                <Image src={"/Lab.png"} width={1200} height={200} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
