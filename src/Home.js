import React from "react";
import "./Home.css";

const Home = () => {
return (
<section className="home-container">
<div className="text">
<h1>Hola, este es mi portafolio</h1>
<p>Soy Faisury Salazar, desarrolladora web. Bienvenida/o a mi mundo digital.</p>
</div>
<div className="image">
<img src="/ruta-de-la-imagen.jpg" alt="Mujer en la mesa con portátil y cactus" />
</div>
<div className="social-links">
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>
</section>
);
};

export default Home;
