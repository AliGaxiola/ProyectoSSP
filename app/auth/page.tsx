import Image from "next/image";
import React from "react";

const Auth = () => {
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
                    />
                  </div>
                  <div className="text-left mt-4">
                    <p>Contraseña</p>
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="input input-bordered input-success w-full max-w-xs bg-white text-black"
                    />
                  </div>
                  <button className="btn btn-wide bg-green-700 text-white mt-7">
                    Iniciar Sesion
                  </button>
                  <button className="btn btn-wide bg-green-700 text-white mt-5">
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
