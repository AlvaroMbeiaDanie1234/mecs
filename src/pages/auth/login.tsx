import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import loginImage from '../../assets/login.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const vantaRef = useRef(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      if ((window as any).VANTA && (window as any).THREE && !vantaEffect.current) {
        vantaEffect.current = (window as any).VANTA.WAVES({
          el: vantaRef.current,
          THREE: (window as any).THREE, // explicitamente garante que use o THREE global
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3f51b5
        });
        clearInterval(interval);
      }
    }, 100); // tenta a cada 100ms até encontrar

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      clearInterval(interval);
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const auth = getAuth();

    try {
      // Realiza o login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Obtém o token de ID do usuário
      const token = await user.getIdToken();

      // Armazena o token no localStorage
      localStorage.setItem('authToken', token);

      // Redireciona para a página home
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-lg-row flex-column bg-light">
      <div className="d-none d-lg-flex align-items-center justify-content-center w-50 p-5" data-aos="fade-right" style={{ background: 'linear-gradient(135deg, #3f51b5, #5a55ae)', color: 'white' }}>
        <img src={loginImage} alt="Ilustração Login" className="img-fluid" style={{ maxHeight: '500px' }} />
      </div>

      <div className="d-flex align-items-center justify-content-center w-100 w-lg-50 p-4 position-relative overflow-hidden">
        <div className="card shadow-sm border-0 px-5 py-4 w-100" data-aos="fade-up" style={{ maxWidth: '850px', borderRadius: '10px', zIndex: 1 }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ fontSize: '1.8rem' }}>Bem-vindo de volta 👋</h2>
            <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>Entre para continuar</p>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <form className="row g-4" onSubmit={handleLogin}>
            <div className="col-md-12 mb-3">
              <label className="form-label text-muted small">Email</label>
              <input type="email" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="seu@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="col-md-12 mb-3">
              <label className="form-label text-muted small">Senha</label>
              <input type="password" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="Digite sua senha" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="col-12 d-grid mt-4">
              <button type="submit" className="btn btn-primary fw-semibold py-2">Entrar</button>
            </div>

            <p className="text-center text-muted mt-3">
              Não tem uma conta?{' '}
              <a href="#" className="fw-semibold text-decoration-none">Criar conta</a>
            </p>
          </form>
        </div>

        <div ref={vantaRef} className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}></div>
      </div>
    </div>
  );
}
