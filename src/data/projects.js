// src/data/projects.js
import mockupHome from "../assets/mockupHome.jpeg";
import telaPagamento from "../assets/TelaPagamento.jpg";
import telaCardapio from "../assets/TelaCardapio.jpg";

import LoginJotanunes from "../assets/LoginJotanunes.png";
import LojaJotanunes from "../assets/LojaJotanunes.png";
import CursoJotanunes from "../assets/CursoJotanunes.png";

import NovaBiblioteca2 from "../assets/NovaBiblioteca2.png";
import NovaBiblioteca3 from "../assets/NovaBiblioteca3.png";
import novabiblioteca from "../assets/novabiblioteca.png";

import ProjetoEsperanca from "../assets/ProjetoEsperanca.png";
import ProjetoEsperanca2 from "../assets/ProjetoEsperanca2.png";
import ProjetoEsperanca3 from "../assets/ProjetoEsperanca3.png";


const projectsData = [
  {
    slug: "pizzaria-tablet", // O nome que vai aparecer na URL (ex: /projeto/pizzaria-tablet)
    title: "Autoatendimento Pizzaria",
    role: "UI/UX Designer & Web Developer",
    shortDescription: "Sistema de autoatendimento para tablets focado em agilizar pedidos.",
    heroImage: mockupHome,
    problem: "Longas filas no balcão e erros frequentes na anotação manual de pedidos.",
    solution: "Interface intuitiva com fotos reais dos produtos, permitindo que o cliente monte sua pizza e pague via tablet.",
    tools: ["React", "Tailwind CSS", "Figma", "Lucide Icons"],
    gallery: [
    telaCardapio, telaPagamento,
    ]
  },

    {
    slug: "jotanunes", // O nome que vai aparecer na URL (ex: /projeto/pizzaria-tablet)
    title: "Jotanunes — Plataforma de Aprendizado Corporativo",
    role: "UI/UX Designer & Web Developer",
    shortDescription: "Design de plataforma e-learning corporativa com sistema de certificados, gamificação e ranking.",
    heroImage: LoginJotanunes,
    problem: "Longas filas no balcão e erros frequentes na anotação manual de pedidos.",
    solution: "Interface intuitiva com fotos reais dos produtos, permitindo que o cliente monte sua pizza e pague via tablet.",
    tools: ["React", "Tailwind CSS", "Figma", "Lucide Icons"],
    gallery: [
    LojaJotanunes, CursoJotanunes,
    ]
  },

    {
    slug: "novabiblioteca", // O nome que vai aparecer na URL (ex: /projeto/pizzaria-tablet)
    title: "Nova Biblioteca - Aplicativo de Leitura",
    role: "UI/UX Designer & Web Developer",
    shortDescription: "Aplicativo de leitura",
    heroImage: novabiblioteca,
    problem: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    solution: "XXXXXXXXXXXXXXXXXXXXXXXXX",
    tools: ["React", "Tailwind CSS", "Figma", "Lucide Icons"],
    gallery: [
        NovaBiblioteca2,NovaBiblioteca3
    ]
  },

    {
    slug: "projetoesperanca", // O nome que vai aparecer na URL (ex: /projeto/pizzaria-tablet)
    title: "Autoatendimento Pizzeria",
    role: "UI/UX Designer & Web Developer",
    shortDescription: "Aplicativo plantação comunitaria",
    heroImage: ProjetoEsperanca,
    problem: "XXXXXXXXXXXXXXXXXXXXXXX",
    solution: "XXXXXXXXXXXXXXXXXXXX",
    tools: ["React", "Tailwind CSS", "Figma", "Lucide Icons"],
    gallery: [
    ProjetoEsperanca2,ProjetoEsperanca3
    ]
  },



  
  // Você pode adicionar mais projetos seguindo o mesmo padrão acima
];

// Função que busca o projeto pelo nome na URL
export const getProjectBySlug = (slug) => {
  return projectsData.find((project) => project.slug === slug);
};

export default projectsData;