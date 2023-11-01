import React, { useEffect, useState } from "react";

const TestApi = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Alumno de prueba:");
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (showImage) {
      // Simula la carga de la imagen, podrías reemplazar esto con la URL de tu imagen real.
      setTimeout(() => {
        setMessage("Carga completada");
      }, 5000);
    }
  }, [showImage]);

  const handleClick = () => {
    setLoading(true);
    setMessage("Conectando mySQL...");

    setTimeout(() => {
      setLoading(false);
      setMessage("Carga completada");
      setShowImage(true);
    }, 5000);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`bg-blue-500 text-white p-2 rounded ${
          loading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={loading}
      >
        {loading ? (
          <div className="flex space-x-2 items-center">
            <div className="w-4 h-4 border-t-2 border-r-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
            <span>Conectando mySQL...</span>
          </div>
        ) : (
          "Test alumno"
        )}
      </button>
      <p>{message}</p>
      {showImage && (
        <div>
          <img
            style={{ maxWidth: "100%", maxHeight: "400px" }}
            src="https://di.phncdn.com/videos/202304/18/429758851/original/(m=eaAaGwObaaaa)(mh=P_aFUhDoWhr5sR13)5.jpg"
            alt="Imagen Cargada"
          />
          <p>
            Pinche Ali pendejo, pensaste que te iba a hacer el codigo asi al
            chile? no mms chupala w
          </p>
        </div>
      )}
    </div>
  );
};

export default TestApi;
