import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const vantaEffect = useRef(null);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        // Inicia o efeito do Vanta Waves
        const interval = setInterval(() => {
            if (window.VANTA && window.THREE && !vantaEffect.current) {
                vantaEffect.current = window.VANTA.WAVES({
                    el: vantaRef.current,
                    THREE: window.THREE,
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
            if (vantaEffect.current)
                vantaEffect.current.destroy();
            clearInterval(interval);
        };
    }, []);
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Criação do usuário
            const userCredential = await createUserWithEmailAndPassword(auth, formData.emailLogin, formData.senha);
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
        }
        catch (error) {
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
    return (_jsxs("div", { className: "min-vh-100 d-flex flex-lg-row flex-column bg-light", children: [_jsx("div", { className: "d-none d-lg-flex align-items-center justify-content-center w-50 p-5", "data-aos": "fade-right", style: { background: 'linear-gradient(135deg, #6a11cb, #2575fc)', color: 'white' }, children: _jsx("img", { src: registerImage, alt: "Ilustra\u00E7\u00E3o Registro", className: "img-fluid", style: { maxHeight: '500px' } }) }), _jsxs("div", { className: "d-flex align-items-center justify-content-center w-100 w-lg-50 p-4 position-relative overflow-hidden", children: [_jsxs("div", { className: "card shadow-sm border-0 px-5 py-4 w-100", "data-aos": "fade-up", style: { maxWidth: '850px', borderRadius: '10px', zIndex: 1 }, children: [_jsxs("form", { className: "row g-4", onSubmit: handleRegister, children: [fields.map((field, index) => (_jsxs("div", { className: "col-md-6", children: [_jsx("label", { className: "form-label text-muted small", children: field.label }), _jsx("input", { name: field.name, value: formData[field.name], onChange: handleChange, type: field.type || 'text', className: "form-control border-0 border-bottom rounded-0 shadow-none", required: true, style: { backgroundColor: 'transparent', borderColor: '#ccc' } })] }, index))), _jsx("div", { className: "col-12", children: _jsx("hr", {}) }), _jsxs("div", { className: "col-md-6", children: [_jsx("label", { className: "form-label text-muted small", children: "Email para Login" }), _jsx("input", { name: "emailLogin", value: formData.emailLogin, onChange: handleChange, type: "email", className: "form-control border-0 border-bottom rounded-0 shadow-none", required: true, style: { backgroundColor: 'transparent', borderColor: '#ccc' } })] }), _jsxs("div", { className: "col-md-6", children: [_jsx("label", { className: "form-label text-muted small", children: "Senha para Login" }), _jsx("input", { name: "senha", value: formData.senha, onChange: handleChange, type: "password", className: "form-control border-0 border-bottom rounded-0 shadow-none", required: true, style: { backgroundColor: 'transparent', borderColor: '#ccc' } })] }), _jsx("div", { className: "col-12 mt-2", children: _jsx("small", { className: "text-muted", children: "As credenciais acima ser\u00E3o usadas para o login na plataforma." }) }), _jsx("div", { className: "d-grid mt-4", children: _jsx("button", { type: "submit", className: "btn btn-dark fw-semibold py-2", children: "Registrar Empresa" }) }), _jsxs("p", { className: "text-center text-muted mt-3", children: ["J\u00E1 possui conta?", ' ', _jsx("a", { href: "#", className: "fw-semibold text-decoration-none", children: "Fazer login" })] })] }), _jsx(ToastContainer, { position: "top-right", autoClose: 3000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: "colored" })] }), _jsx("div", { ref: vantaRef, className: "position-absolute top-0 start-0 w-100 h-100", style: { zIndex: 0 } })] })] }));
}
