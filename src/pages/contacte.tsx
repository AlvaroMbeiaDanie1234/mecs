import { FaUser, FaEnvelope, FaPhone, FaComments } from "react-icons/fa";
import whatsappicone from "../assets/whatsapp.png"; // Imagem do ícone do WhatsApp, substitua pelo caminho correto

const Contacte = () => {
  return (
    <section className="py-5 px-3 px-md-5" style={{ backgroundColor: "#1e1e1e", color: "#f1f1f1" }}>
      <div className="container">
        <h4 className="">FALE COM A MECS Conecta</h4>

        <div className="row">
          {/* Formulário */}
          <div className="col-md-6 mb-4">
            <form className="row g-4 contacte-form">
              {/* Nome */}
              <div className="col-12">
                <div className="input-group border-bottom">
                  <span className="input-group-text bg-transparent border-0 text-light">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    className="form-control bg-transparent border-0 text-light shadow-none"
                    placeholder="Seu nome"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-12">
                <div className="input-group border-bottom">
                  <span className="input-group-text bg-transparent border-0 text-light">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    className="form-control bg-transparent border-0 text-light shadow-none"
                    placeholder="exemplo@email.com"
                    required
                  />
                </div>
              </div>

              {/* Telefone */}
              <div className="col-12">
                <div className="input-group border-bottom">
                  <span className="input-group-text bg-transparent border-0 text-light">
                    <FaPhone />
                  </span>
                  <input
                    type="tel"
                    className="form-control bg-transparent border-0 text-light shadow-none"
                    placeholder="+(244) 999.999.99"
                    required
                  />
                </div>
              </div>

              {/* Assunto */}
              <div className="col-12">
                <select className="form-select bg-transparent border-bottom text-light border-0 shadow-none" required>
                  <option value="">Selecione um assunto</option>
                  <option>Suporte</option>
                  <option>Parceria</option>
                  <option>Outro</option>
                </select>
              </div>

              {/* Mensagem */}
              <div className="col-12">
                <div className="input-group border-bottom">
                  <span className="input-group-text bg-transparent border-0 text-light">
                    <FaComments />
                  </span>
                  <textarea
                    className="form-control bg-transparent border-0 text-light shadow-none"
                    placeholder="Digite sua mensagem..."
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* Botão */}
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-danger px-4 py-2 rounded-pill">
                  Enviar mensagem →
                </button>
              </div>
            </form>
          </div>

          {/* WhatsApp Info */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="bg-dark rounded-4 p-4 text-center w-100">
              <img
                src={whatsappicone}
                alt="WhatsApp"
                className="img-fluid rounded mb-3"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
              <h5 className="fw-bold">Conecte-se conosco pelo WhatsApp!</h5>
              <a
                href="https://wa.me/seunumerodetelefone"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light mt-3 rounded-pill"
              >
                Conversar agora →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacte;
