import React, { useState, useEffect } from 'react';
import { Briefcase, Clock, Heart, Sparkles, Mail } from 'lucide-react'; // Adicionado Mail aqui
import { Link } from "react-router-dom";
import mancha from '../assets/Mancha.svg'
import Jotanunes from '../assets/Jotanunes.svg'
import minhaFoto from '../assets/Perfil.png'
import Biblioteca from '../assets/Biblioteca.svg'
import BibliotecaPNG from '../assets/BibliotecaPNG.png'
import NatAmarela from '../assets/NatAmarela.svg'
import Perfil from '../assets/Perfil.png';
import FundoContato from '../assets/FundoContato.png';
import mockupHome from "../assets/mockupHome.jpeg";
import ProjetoEsperanca from "../assets/ProjetoEsperanca.png";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../App.css";

export default function App() {
  // --- LÓGICA DA NAVBAR ---
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];
  // ------------------------

  const meusProjetos = [
    {
      titulo: "Jotanunes — Plataforma de Aprendizado Corporativo",
      slug: "jotanunes",
      desc: "Design de plataforma e-learning corporativa com sistema de certificados, gamificação e ranking.",
      img: Jotanunes
    },
    {
      titulo: "Pizzaria Castelamary - Tablet de Auto Atendimento",
      slug: "pizzaria-tablet",
      desc: "Design de interface para Totem de Autoatendimento com cardápio digital e fluxo de pedidos.",
      img: mockupHome
    },
    {
      titulo: "Nova Biblioteca - Aplicativo de Leitura",
      slug: "novabiblioteca",
      desc: "Projeto da faculdade para demonstrar criação de interfaces no Figma utilizando portfólio como exemplo.",
      img: BibliotecaPNG
    },
    {
      titulo: "Projeto Esperança",
      slug: "projetoesperanca",
      desc: "Projeto da faculdade para demonstrar criação de interfaces no Figma utilizando portfólio como exemplo.",
      img: ProjetoEsperanca
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#F7F5F3] font-sans text-[#1A1A1A] overflow-x-hidden selection:bg-[#E17A5D] selection:text-white">
        
        {/* --- NOVA NAVBAR (Substituindo o Header antigo) --- */}
        <nav
          className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-16 lg:px-32 ${
            scrolled
              ? "bg-[#F7F5F3]/80 backdrop-blur-lg shadow-sm py-4" 
              : "bg-transparent py-8"
          }`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <a href="#" className="font-serif font-bold text-2xl tracking-tight text-[#1A1A1A]">
              Natália Castilho
            </a>

            <ul className="hidden md:flex items-center gap-12">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-medium text-lg text-[#1A1A1A] hover:text-[#E17A5D] transition-all duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="md:hidden text-[#1A1A1A]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#F7F5F3] border-b border-[#E8E6E4] px-6 py-8">
              <ul className="flex flex-col gap-6">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="font-semibold text-2xl text-[#1A1A1A]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* 1. Secção Hero (Abaixo da Navbar) */}
        <section className="relative min-h-screen flex items-start pt-80 px-6 md:px-16 lg:px-32">
          <img
            src={NatAmarela}
            className="hidden md:block absolute top-0 right-0 z-0 pointer-events-none"
            style={{ width: '50%' }}
            alt=""
          />

          <div className="relative z-10 grid gap-16 w-full max-w-7xl mx-auto md:ml-24 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <span className="text-[#E17A5D] font-bold tracking-widest uppercase text-lg">
                UI/UX Designer
              </span>
              
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Oii, Meu Nome <br/> é Natália
              </h1>
              
              <p className="max-w-xl text-[#555555] text-2xl leading-relaxed pt-2">
                Designer UI/UX focada em criar interfaces intuitivas e visualmente atraentes para web e mobile.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                  <a href="#projetos" className="bg-[#E17A5D] text-white px-10 py-3 rounded-md font-bold text-lg hover:scale-105 transition-all shadow-sm">
                    Projetos
                  </a>
                  <a href="#" className="bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] px-10 py-3 rounded-md font-bold text-lg hover:bg-[#1A1A1A] hover:text-white transition-all">
                    LinkedIn
                  </a>
              </div>
            </div>
          </div>
        </section>

{/* 2. Secção Sobre Mim */}
<section id="sobre" className="relative flex items-center justify-center py-16 md:py-24 px-6 bg-[#F7F5F3]">
  
  <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 w-full max-w-7xl mx-auto items-center">

    {/* Imagem Esquerda */}
    <div className="flex justify-center md:justify-start">
      <div className="relative w-full max-w-[480px] lg:max-w-[550px] aspect-[3/4] overflow-hidden rounded-[40px] shadow-2xl">
        <img 
          src={Perfil}
          alt="Natália Castilho" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>

    {/* Conteúdo Direita */}
    <div className="flex flex-col space-y-10">
      <div className="space-y-6">
        <span className="text-[#E17A5D] font-sans font-bold tracking-[0.3em] uppercase text-sm">Sobre Mim</span>
        
        {/* Título com a fonte Serifada para ficar idêntico à imagem */}
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1]">
          Olá, eu sou a <br /> Natália 👋🏻
        </h2>
        
        <p className="font-sans text-[#555555] text-xl md:text-2xl leading-relaxed max-w-2xl">
          Sou uma profissional apaixonada por criar soluções digitais que combinam design elegante com funcionalidade impecável. Meu objetivo é transformar ideias em experiências memoráveis.
        </p>
      </div>

      {/* Grid de Stats Cards com Ícones */}
      <div className="grid grid-cols-2 gap-6 pt-6 font-sans">
        
        {/* Card 1: Projetos */}
        <div className="bg-white border border-[#E8E6E4] p-8 rounded-[32px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300">
          <Briefcase className="w-8 h-8 text-[#E17A5D] mb-4" strokeWidth={1.2} />
          <span className="text-[#E17A5D] text-4xl font-bold">10+</span>
          <span className="text-[#555555] text-sm mt-2 font-semibold uppercase tracking-wider">Projetos</span>
        </div>

        {/* Card 2: Experiência */}
        <div className="bg-white border border-[#E8E6E4] p-8 rounded-[32px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300">
          <Clock className="w-8 h-8 text-[#E17A5D] mb-4" strokeWidth={1.2} />
          <span className="text-[#E17A5D] text-4xl font-bold">2+</span>
          <span className="text-[#555555] text-sm mt-2 font-semibold uppercase tracking-wider">Anos exp.</span>
        </div>

        {/* Card 3: Dedicação */}
        <div className="bg-white border border-[#E8E6E4] p-8 rounded-[32px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300">
          <Heart className="w-8 h-8 text-[#E17A5D] mb-4" strokeWidth={1.2} />
          <span className="text-[#E17A5D] text-4xl font-bold">100%</span>
          <span className="text-[#555555] text-sm mt-2 font-semibold uppercase tracking-wider">Dedicação</span>
        </div>

        {/* Card 4: Criatividade */}
        <div className="bg-white border border-[#E8E6E4] p-8 rounded-[32px] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300">
          <Sparkles className="w-8 h-8 text-[#E17A5D] mb-4" strokeWidth={1.2} />
          <span className="text-[#E17A5D] text-4xl font-bold">∞</span>
          <span className="text-[#555555] text-sm mt-2 font-semibold uppercase tracking-wider">Criatividade</span>
        </div>

      </div>
    </div>

  </div>
</section>

        {/* 3. SEÇÃO PROJETOS */}
        <section id="projetos" className="relative pt-40 pb-24 mb-20 px-6 lg:px-32 bg-[#F7F5F3]">
          {/* ... seu código do swiper ... */}
          <div className="w-full max-w-7xl mx-auto">
             <div className="mb-16 text-left">
                <span className="text-[#E17A5D] font-bold tracking-[0.3em] uppercase text-xs">Projetos</span>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mt-2">Trabalhos</h2>
             </div>
             <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={1} navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }} pagination={{ clickable: true }} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="pb-20">
               {meusProjetos.map((proj, index) => (
                 <SwiperSlide key={index}>
                    <div className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full border border-[#EEECEA]">
                       <div className="relative h-64 overflow-hidden bg-[#F2F2F2]">
                          <img src={proj.img} alt={proj.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
                       </div>
                       <div className="p-8 flex flex-col grow text-left">
                          <div className="flex gap-2 mb-4">
                             <span className="bg-[#FEF1EE] text-[#E17A5D] text-[10px] font-bold px-3 py-1 rounded-full uppercase">UI/UX</span>
                             <span className="bg-[#FEF1EE] text-[#E17A5D] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Design</span>
                          </div>
                          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{proj.titulo}</h3>
                          <p className="text-[#555555] text-base leading-relaxed grow mb-6">{proj.desc}</p>
                            <Link 
                            to={`/projeto/${proj.slug}`} 
                            className="text-[#E17A5D] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                            >
                            Ver detalhes →
                            </Link>
                       </div>
                    </div>
                 </SwiperSlide>
               ))}
             </Swiper>
             <div className="flex justify-center gap-4 mt-4">
                <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-[#E8E6E4] flex items-center justify-center bg-white hover:bg-[#E17A5D] hover:text-white transition-all shadow-sm">←</button>
                <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-[#E8E6E4] flex items-center justify-center bg-white hover:bg-[#E17A5D] hover:text-white transition-all shadow-sm">→</button>
             </div>
          </div>
        </section>

{/* 4. SEÇÃO DE CONTATO - ESTILO PREMIUM */}
<section id="contato" className="relative min-h-[70vh] flex flex-col items-center justify-center py-20 px-6 bg-[#F7F5F3] overflow-hidden">
  
  {/* PNG de Fundo - Como elemento decorativo centralizado */}
  {FundoContato && (
    <img 
      src={FundoContato} 
      alt="" 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-auto h-[120%] pointer-events-none max-w-none mix-blend-multiply" 
    />
  )}

  <div className="relative z-10 max-w-4xl w-full text-center">
    <span className="text-[#E17A5D] font-sans font-bold tracking-[0.3em] uppercase text-xs">Contato</span>
    
    <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#1A1A1A] mt-4 mb-6 leading-tight">
      Vamos conversar?
    </h2>
    
    <p className="font-sans text-[#555555] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
      Estou sempre aberta a novas oportunidades e colaborações. <br className="hidden md:block"/>
      Entre em contato e vamos criar algo incrível juntos.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a 
        href="mailto:seuemail@exemplo.com" 
        className="group flex items-center justify-center gap-3 bg-[#E17A5D] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#c9664a] transition-all shadow-lg hover:shadow-[#E17A5D]/20 hover:-translate-y-1"
      >
        <Mail className="w-5 h-5 transition-transform group-hover:rotate-12" />
        Enviar e-mail
      </a>
      <a 
        href="https://linkedin.com/in/seu-perfil" 
        target="_blank" 
        className="bg-white text-[#1A1A1A] border border-[#E8E6E4] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F9FAFF] transition-all shadow-sm hover:-translate-y-1"
      >
        LinkedIn
      </a>
    </div>
  </div>
</section>

        {/* 5. FOOTER */}
        <footer className="py-6 px-6 md:px-16 lg:px-32 bg-[#F7F5F3] border-t border-[#E8E6E4]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[#555555]/60 text-sm">© 2026 Natália Castilho. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="text-[#555555] hover:text-[#E17A5D] font-medium transition-colors">GitHub</a>
              <a href="#" className="text-[#555555] hover:text-[#E17A5D] font-medium transition-colors">LinkedIn</a>
              <a href="#" className="text-[#555555] hover:text-[#E17A5D] font-medium transition-colors">Instagram</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}