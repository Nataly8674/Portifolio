import { useParams, useNavigate } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { Mail } from "lucide-react";
import FundoContato from "../assets/FundoContato.png";

import "../index.css";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || "");

  if (!project) return <div className="p-20 text-center font-bold bg-[#F7F5F3]">Projeto não encontrado</div>;

  return (
    /* 1. FUNDO GERAL DA PÁGINA */
    <div className="min-h-screen bg-[#F7F5F3] text-foreground font-sans selection:bg-primary/20">
      
      {/* NAVEGAÇÃO SUPERIOR - Fundo Bege com transparência */}
      <nav className="sticky top-0 z-50 w-full bg-[#F7F5F3]/80 backdrop-blur-md border-b border-[#E8E6E4]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium hover:text-[#E17A5D] transition-colors"
          >
            <span className="text-lg">←</span> Voltar
          </button>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            {project.title}
          </span>
          <div className="w-10"></div>
        </div>
      </nav>

      {/* 2. CONTAINER PRINCIPAL - Garantindo o bege */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 bg-[#F7F5F3]">
        
        {/* HERO SECTION */}
        <header className="mb-20 text-center flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
            {project.role}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#1F2937] mb-6">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed mx-auto">
            {project.shortDescription}
          </p>
        </header>

        {/* IMAGEM PRINCIPAL (HERO) - Removido bg-white e sombras ajustadas */}
        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-[#E8E6E4] mb-32 
                        shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] 
                        transition-all duration-700 ease-out 
                        hover:-translate-y-4">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* INFO GRID */}
        <div className="grid md:grid-cols-12 gap-16 mb-32 bg-[#F7F5F3]">
          <div className="md:col-span-8 space-y-20">
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#E17A5D] mb-6">O Problema</h2>
              <p className="text-2xl md:text-3xl leading-tight text-gray-800 font-medium">
                {project.problem}
              </p>
            </section>
            
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#E17A5D] mb-6">A Solução</h2>
              <p className="text-2xl md:text-3xl leading-tight text-gray-800 font-medium">
                {project.solution}
              </p>
            </section>
          </div>

          {/* SIDEBAR DE FERRAMENTAS - bg-[#F2F0EE] para um volume sutil */}
          <aside className="md:col-span-4 h-fit p-8 rounded-2xl bg-[#F2F0EE] border border-[#E8E6E4] shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Tecnologias</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-[#F7F5F3] border border-[#E8E6E4] rounded-full text-[11px] font-bold uppercase tracking-wider text-gray-600">
                  {tool}
                </span>
              ))}
            </div>
          </aside>
        </div>

        {/* GALERIA DE TELAS */}
        <section className="space-y-12 bg-[#F7F5F3]">
          <div className="text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-400">Galeria de Telas</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {project.gallery.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-[#E8E6E4] bg-[#F7F5F3]">
                <img 
                  src={img} 
                  alt={`Tela ${i + 1}`} 
                  className="w-full h-auto" 
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 4. SEÇÃO DE CONTATO */}
      <section id="contato" className="relative min-h-[70vh] flex flex-col items-center justify-center py-20 px-6 bg-[#F7F5F3] overflow-hidden border-t border-[#E8E6E4]">
        {FundoContato && (
          <img 
            src={FundoContato} 
            alt="" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-auto h-[120%] pointer-events-none max-w-none mix-blend-multiply opacity-50" 
          />
        )}
        <div className="relative z-10 max-w-4xl w-full text-center">
          <span className="text-[#E17A5D] font-sans font-bold tracking-[0.3em] uppercase text-xs">Contato</span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#1A1A1A] mt-4 mb-6 leading-tight">Vamos conversar?</h2>
          <p className="font-sans text-[#555555] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e colaborações.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:seuemail@exemplo.com" className="group flex items-center justify-center gap-3 bg-[#E17A5D] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#c9664a] transition-all shadow-lg hover:-translate-y-1">
              <Mail className="w-5 h-5" /> Enviar e-mail
            </a>
            <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1A1A1A] border border-[#E8E6E4] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F9FAFF] transition-all shadow-sm hover:-translate-y-1">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-16 lg:px-32 bg-[#F7F5F3] border-t border-[#E8E6E4]">
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
  );
};

export default ProjectDetail;