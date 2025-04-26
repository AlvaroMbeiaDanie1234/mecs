import Contacte from "./contacte.js";
import Empresas from "./empresas.js";
import Hero from "./hero.js";
import Footer from "./layout/footer.js";
import Header from "./layout/header.js";
import Testemunhas from "./testemunhas.js";
import Vantagens from "./vantagens.js";


const LandingPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Hero/>

      {/* Vantagens Section */}
      <Vantagens />

      {/* Empresas */}

      <Empresas />

 

      {/*Testemunhas*/}
      <Testemunhas/>

      {/* COntacto */}
      <Contacte/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
