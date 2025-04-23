import Contacte from "./contacte";
import Hero from "./hero";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Testemunhas from "./testemunhas";
import Vantagens from "./vantagens";

const LandingPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Hero></Hero>

      {/* Vantagens Section */}
      <Vantagens />

      {/*Testemunhas*/}
      <Testemunhas/>

      {/* COntacto */}
      <Contacte></Contacte>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
