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
    problem: "Estabelecimentos físicos enfrentam gargalos no atendimento durante horários de pico, gerando filas e erros em pedidos anotados manualmente. Além disso, cardápios impressos dificultam a atualização rápida de preços e promoções, tornando a operação lenta e menos rentável.",
    solution: "Projetei uma interface que une o rústico ao moderno. Utilizei ilustrações em estilo 'hand-drawn' na Home para criar uma conexão emocional com a culinária artesanal, enquanto o cardápio e o checkout seguem padrões de usabilidade limpos, com botões de fácil clique e hierarquia visual clara. Foquei em um fluxo de pagamento simplificado e uma sacola de compras sempre visível, garantindo clareza em todas as etapas do pedido.",
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
    problem: "Treinamentos corporativos tradicionais são frequentemente vistos como burocráticos e cansativos pelos funcionários, resultando em baixas taxas de conclusão e pouco engajamento com o conteúdo técnico. A dificuldade era transformar o aprendizado obrigatório em algo desejável e recompensador para a equipe da construtora.",
    solution: "Estruturei a plataforma com uma hierarquia visual clara, utilizando o red branding da JotaNunes para manter a identidade institucional. Desenvolvi dashboards personalizados onde o usuário acompanha seu nível, saldo de pontos e certificados de forma rápida. O design limpo e o uso estratégico de componentes modulares garantiram que a transição entre a sala de aula virtual e a loja de recompensas fosse fluida e eficiente.",
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
    problem: "Leitores digitais muitas vezes enfrentam interfaces saturadas e pouco imersivas, que distraem o foco principal: o conteúdo. Além disso, a dificuldade em organizar leituras futuras e interagir com outros leitores em um só lugar torna a experiência fragmentada e cansativa.",
    solution: "Projetei e desenvolvi uma interface Dark Mode personalizada, utilizando React e Tailwind CSS, para reduzir a fadiga visual e aumentar a imersão. Centralizei funcionalidades de catálogo, fórum comunitário e sistema de anotações com um design minimalista e intuitivo, proporcionando uma jornada de leitura fluida e organizada.",
    tools: ["React", "Tailwind CSS", "Figma", "Lucide Icons"],
    gallery: [
        NovaBiblioteca2,NovaBiblioteca3
    ]
  },

    {
    slug: "projetoesperanca", // O nome que vai aparecer na URL (ex: /projeto/pizzaria-tablet)
    title: "Projeto Esperança",
    role: "UI/UX Designer & Web Developer",
    shortDescription: "Aplicativo plantação comunitaria",
    heroImage: ProjetoEsperanca,
    problem: "Muitas comunidades locais enfrentam uma desconexão entre vizinhos, dificultando a organização para melhorias no bairro, o compartilhamento de recursos e a disseminação de informações sobre iniciativas sustentáveis, como feiras orgânicas e pontos de doação. A falta de uma plataforma centralizada e acessível impede que ações individuais se transformem em um impacto coletivo significativo.",
    solution: "Projetei e desenvolvi o 'Projeto Esperança', um aplicativo mobile com interface intuitiva e acolhedora, que centraliza as necessidades da comunidade. Implementei funcionalidades chave como um mapa de feiras e pontos de doação, um canal para denúncias e melhorias no bairro ('Seu Bairro'), e um fórum comunitário. O app atua como um hub, conectando cidadãos a ações concretas, fomentando a economia local e facilitando o engajamento social.",
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