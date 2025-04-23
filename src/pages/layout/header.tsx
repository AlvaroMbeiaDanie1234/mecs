const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary fs-4" href="#">
            MECS<span className="text-gradient"> Conecta</span>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-2 align-items-center">
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="#">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="#">
                  Empresas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="#">
                  Catálogo de Serviços
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="#">
                  Parcerias
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-primary rounded-pill px-4"
                  href="#"
                >
                  Oportunidades
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Header;
  