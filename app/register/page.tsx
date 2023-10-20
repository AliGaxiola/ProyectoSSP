import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className="relative h-full w-full">
      <div className="w-full h-full">
        <div className="flex justify-center">
          <div className="px-16 py-16 self-center rounded-md w-full bg-white">
            <div className="flex flex-row">
              <div className="flex flex-col w-1/2">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={"/Lab.png"}
                    width={1200}
                    height={200}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="flex flex-col h-full w-1/2 items-center text-center">
                <Image
                  src={"/uabc-logo.png"}
                  width={110}
                  height={200}
                  alt="logo"
                />
                <h2>Universidad Autonoma de Baja California</h2>
                <h2 className="text-4xl font-bold text-black mt-14">
                  Registro
                </h2>
                <div>
                  <div className="text-left mt-4">
                    <p>Matricula</p>
                    <input
                      type="text"
                      className="input input-bordered input-success w-full max-w-xs bg-white text-black"
                    />
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
