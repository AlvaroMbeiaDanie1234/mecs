import { useEffect, useRef, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebaseConfig'; // Importa o db do Firestore
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import registerImage from '../../assets/login.svg';
import { collection, addDoc } from 'firebase/firestore';

export default function Register() {
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    nif: '',
    emailEmpresa: '',
    contacto: '',
    endereco: '',
    tipoServico: '',
    representante: '',
    website: '',
    funcionarios: '',
    emailLogin: '',
    senha: '',
  });

  const vantaRef = useRef(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Inicia o efeito do Vanta Waves
    const interval = setInterval(() => {
      if ((window as any).VANTA && (window as any).THREE && !vantaEffect.current) {
        vantaEffect.current = (window as any).VANTA.WAVES({
          el: vantaRef.current,
          THREE: (window as any).THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3f51b5, // Ajuste para a cor do gradiente
        });
        clearInterval(interval);
      }
    }, 100); // tenta a cada 100ms até encontrar o VANTA
    
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      clearInterval(interval);
    };
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();

    try {
      // Criação do usuário
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.emailLogin,
        formData.senha
      );

      // Após o sucesso do registro, salvar os dados da empresa no Firestore
      const user = userCredential.user;
      const token = await user.getIdToken(); // Obtém o token do usuário autenticado

      // Salva os dados da empresa na coleção "empresas" no Firestore
      await addDoc(collection(db, 'empresas'), {
        nomeEmpresa: formData.nomeEmpresa,
        nif: formData.nif,
        emailEmpresa: formData.emailEmpresa,
        contacto: formData.contacto,
        endereco: formData.endereco,
        tipoServico: formData.tipoServico,
        representante: formData.representante,
        website: formData.website,
        funcionarios: formData.funcionarios,
        userId: user.uid, // Relacionando a empresa ao ID do usuário
        token: token, // Salvando o token também
      });

      toast.success('Empresa registrada com sucesso!');
      console.log('Usuário criado:', userCredential.user);
    } catch (error: any) {
      toast.error(`Erro ao registrar: ${error.message}`);
    }
  };

  const fields = [
    { name: 'nomeEmpresa', label: 'Nome da Empresa' },
    { name: 'nif', label: 'NIF' },
    { name: 'emailEmpresa', label: 'Email da Empresa', type: 'email' },
    { name: 'contacto', label: 'Contacto', type: 'tel' },
    { name: 'endereco', label: 'Endereço' },
    { name: 'tipoServico', label: 'Tipo de Serviço' },
    { name: 'representante', label: 'Representante Legal' },
    { name: 'website', label: 'Website', type: 'url' },
    { name: 'funcionarios', label: 'Número de Funcionários', type: 'number' },
  ];

  return (
    <div className="min-vh-100 d-flex flex-lg-row flex-column bg-light">
      <div
        className="d-none d-lg-flex align-items-center justify-content-center w-50 p-5"
        data-aos="fade-right"
        style={{ background: 'linear-gradient(135deg, #6a11cb, #2575fc)', color: 'white' }}
      >
        <img src={registerImage} alt="Ilustração Registro" className="img-fluid" style={{ maxHeight: '500px' }} />
      </div>

      <div className="d-flex align-items-center justify-content-center w-100 w-lg-50 p-4 position-relative overflow-hidden">
        <div
          className="card shadow-sm border-0 px-5 py-4 w-100"
          data-aos="fade-up"
          style={{ maxWidth: '850px', borderRadius: '10px', zIndex: 1 }}
        >
          <form className="row g-4" onSubmit={handleRegister}>
            {fields.map((field, index) => (
              <div className="col-md-6" key={index}>
                <label className="form-label text-muted small">{field.label}</label>
                <input
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  type={field.type || 'text'}
                  className="form-control border-0 border-bottom rounded-0 shadow-none"
                  required
                  style={{ backgroundColor: 'transparent', borderColor: '#ccc' }}
                />
              </div>
            ))}

            <div className="col-12">
              <hr />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted small">Email para Login</label>
              <input
                name="emailLogin"
                value={formData.emailLogin}
                onChange={handleChange}
                type="email"
                className="form-control border-0 border-bottom rounded-0 shadow-none"
                required
                style={{ backgroundColor: 'transparent', borderColor: '#ccc' }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label text-muted small">Senha para Login</label>
              <input
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                type="password"
                className="form-control border-0 border-bottom rounded-0 shadow-none"
                required
                style={{ backgroundColor: 'transparent', borderColor: '#ccc' }}
              />
            </div>

            <div className="col-12 mt-2">
              <small className="text-muted">
                As credenciais acima serão usadas para o login na plataforma.
              </small>
            </div>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-dark fw-semibold py-2">
                Registrar Empresa
              </button>
            </div>

            <p className="text-center text-muted mt-3">
              Já possui conta?{' '}
              <a href="#" className="fw-semibold text-decoration-none">Fazer login</a>
            </p>
          </form>

          {/* Toast container */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>

        {/* Vanta Background */}
        <div
          ref={vantaRef}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ zIndex: 0 }}
        ></div>
      </div>
    </div>
  );
}
