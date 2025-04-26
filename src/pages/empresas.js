import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db } from '../../firebaseConfig';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Empresas = () => {
    const [empresas, setEmpresas] = useState([]);
    useEffect(() => {
        AOS.init({ duration: 800 });
        const fetchEmpresas = async () => {
            const querySnapshot = await getDocs(collection(db, 'empresas'));
            const listaEmpresas = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                listaEmpresas.push({
                    nome: data.nomeEmpresa,
                    email: data.emailEmpresa,
                    contacto: data.contacto,
                    website: data.website,
                });
            });
            setEmpresas(listaEmpresas);
        };
        fetchEmpresas();
        // Inicializa o efeito de partículas com o particles.js do CDN
    }, []);
    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (_jsxs("section", { className: "py-5", style: { background: '#f8f9fa', height: '100vh' }, children: [_jsxs("div", { className: "container", children: [_jsx("h3", { className: "text-center fw-bold mb-5", "data-aos": "fade-down", style: { fontSize: '2rem' }, children: "Galeria de Empresas Parceiras \uD83C\uDFE2\u2728" }), _jsx("div", { className: "empresa-slider-container", children: _jsx(Slider, Object.assign({}, settings, { children: empresas.map((empresa, index) => (_jsx("div", { className: "p-3", "data-aos": "zoom-in", "data-aos-delay": index * 100, children: _jsxs("div", { className: "bg-white p-4 rounded-4 shadow-sm empresa-card", style: {
                                        transition: 'transform 0.3s ease-in-out',
                                        height: '300px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                    }, children: [_jsxs("h5", { className: "fw-bold text-primary mb-3", children: [_jsx("i", { className: "bi bi-building me-2" }), empresa.nome] }), _jsxs("p", { className: "mb-2 text-muted", children: [_jsx("i", { className: "bi bi-envelope-fill me-2 text-danger" }), empresa.email] }), _jsxs("p", { className: "mb-2 text-muted", children: [_jsx("i", { className: "bi bi-telephone-fill me-2 text-success" }), empresa.contacto] }), _jsxs("p", { className: "text-muted", children: [_jsx("i", { className: "bi bi-globe me-2 text-info" }), _jsx("a", { href: empresa.website, target: "_blank", rel: "noopener noreferrer", className: "text-decoration-none", children: empresa.website })] })] }) }, index))) })) }), _jsx("div", { className: "text-center mt-5", "data-aos": "fade-up", children: _jsxs("p", { className: "text-muted small", children: ["Total de empresas na galeria: ", _jsx("strong", { children: empresas.length }), " \uD83D\uDE80"] }) })] }), _jsx("style", { children: `
        .empresa-card:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .empresa-card {
            height: auto !important;
          }
        }
      ` })] }));
};
export default Empresas;
