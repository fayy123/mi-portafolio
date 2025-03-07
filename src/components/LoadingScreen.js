import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      {/* Imagen de la mujer en la mesa */}
      <img src="/img.jpg" alt="Mujer en la mesa" className="background-image" />

      {/* Vaso con animación */}
      <div className="vaso"></div>

      {/* Frase animada */}
      <p className="loading-text">Turning ideas into reality...</p>
    </div>
  );
};

export default LoadingScreen;