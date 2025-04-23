const Footer = () => {
    return (
      <footer className="bg-dark text-white pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row gy-4">
            {/* Coluna 1 - Logo e descrição */}
            <div className="col-md-4">
              <h5 className="text-uppercase fw-bold">Mecs</h5>
              <p className="small">
                Conectando empresas ao futuro da construção em Angola com tecnologia e inovação.
              </p>
            </div>
  
            {/* Coluna 2 - Links úteis */}
            <div className="col-md-4">
              <h6 className="text-uppercase fw-semibold mb-3">Links Rápidos</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white-50 text-decoration-none">Início</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Sobre</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Serviços</a></li>
                <li><a href="#" className="text-white-50 text-decoration-none">Contato</a></li>
              </ul>
            </div>
  
            {/* Coluna 3 - Redes sociais */}
            <div className="col-md-4">
              <h6 className="text-uppercase fw-semibold mb-3">Siga-nos</h6>
              <div className="d-flex gap-3">
                <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white fs-5"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
  
          <hr className="border-top border-secondary my-4" />
  
          <div className="text-center small text-white-50">
            © {new Date().getFullYear()} Mecs. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  