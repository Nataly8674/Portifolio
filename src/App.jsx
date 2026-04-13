import React from 'react';

export default function App() {
  return (
    <>
      {/* Importação das Fontes para replicar o Figma */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Nunito:wght@400;500;600;700&display=swap');
        
        :root {
          --color-yellow: #FDC435;
          --color-dark: #25282B;
          --color-gray: #828282;
          --color-bg: #F9FAFF;
        }

        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="min-h-screen bg-[#F9FAFF] font-sans text-[#25282B] overflow-x-hidden selection:bg-[#FDC435] selection:text-white">
        
        {/* Navegação */}
        <header className="absolute top-0 w-full z-50 px-6 py-8 md:px-16 lg:px-32 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight z-10">
            Natália Castilho
          </div>
          <nav className="hidden md:flex gap-8 z-10">
            <a href="#sobre" className="font-semibold text-[#25282B] hover:text-[#FDC435] transition-colors">Sobre</a>
            <a href="#projetos" className="font-semibold text-[#25282B] hover:text-[#FDC435] transition-colors">Projetos</a>
            <a href="#contatos" className="font-semibold text-[#25282B] hover:text-[#FDC435] transition-colors">Contatos</a>
          </nav>
        </header>

        {/* 1. Secção Hero */}
        <section className="relative min-h-screen flex items-center pt-24 px-6 md:px-16 lg:px-32">
          
          {/* Fundo Amarelo (Blob Orgânico) */}
          <div className="absolute top-0 right-0 w-full md:w-[55%] h-[100vh] z-0 pointer-events-none overflow-hidden">
            <svg 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none" 
              className="absolute top-0 right-0 h-full w-full"
            >
              <path 
                d="M 40 0 C 15 35, 35 75, 0 100 L 100 100 L 100 0 Z" 
                fill="#FDC435" 
              />
            </svg>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto h-full items-center">
            
            {/* Conteúdo Esquerda */}
            <div className="flex flex-col justify-center space-y-6 max-w-lg mt-10 md:mt-0">
              <span className="text-[#FDC435] font-bold tracking-widest uppercase text-sm md:text-base">
                UI/UX Designer
              </span>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#25282B] leading-[1.1] tracking-tight">
                Oii, Meu Nome<br/>é Natália
              </h1>
              
              <p className="text-[#828282] text-lg leading-relaxed pt-2">
                Designer UI/UX focada em criar interfaces intuitivas e visualmente atraentes para web e mobile. Estou construindo minha trajetória no design com dedicação e olhar atento para cada detalhe.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <button className="bg-[#FDC435] text-[#25282B] px-8 py-2.5 rounded-md font-bold hover:bg-yellow-500 hover:scale-105 transition-all shadow-sm">
                  Projetos
                </button>
                <button className="bg-transparent border-2 border-[#25282B] text-[#25282B] px-8 py-2.5 rounded-md font-bold hover:bg-[#25282B] hover:text-white transition-all">
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Imagem Direita */}
            <div className="relative flex justify-center items-end h-[500px] md:h-[700px]">
              {/* NOTA: Substitua este link src pelo caminho da sua imagem real sem fundo (ex: '/foto-natalia.png') */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Natália Castilho" 
                className="relative z-10 h-[80%] md:h-[90%] object-cover object-top drop-shadow-2xl self-end mb-0 rounded-b-3xl [clip-path:polygon(0_0,_100%_0,_100%_90%,_0_100%)] md:[clip-path:none] mix-blend-normal"
                style={{ 
                  // Usando uma máscara suave temporária porque a imagem de placeholder tem fundo.
                  // Remova esta linha 'maskImage' quando colocar a sua foto real em PNG transparente!
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)' 
                }}
              />
            </div>
          </div>
        </section>

        {/* 2. Secção Sobre Mim */}
        <section id="sobre" className="relative min-h-screen flex items-center py-24 px-6 md:px-16 lg:px-32 bg-[#F9FAFF]">
          <div className="grid md:grid-cols-2 gap-16 md:gap-8 w-full max-w-7xl mx-auto items-center">
            
            {/* Conteúdo Esquerda */}
            <div className="flex flex-col space-y-6 order-2 md:order-1 max-w-lg">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#25282B]">
                Sobre Mim
              </h2>
              
              <p className="text-[#828282] text-lg leading-relaxed pt-2">
                Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
              </p>
              
              <div className="pt-6">
                <button className="bg-[#FDC435] text-[#25282B] px-10 py-3 rounded-md font-bold hover:bg-yellow-500 hover:scale-105 transition-all shadow-sm">
                  Resume
                </button>
              </div>
            </div>

            {/* Imagem Direita no Círculo */}
            <div className="relative flex justify-center items-center order-1 md:order-2">
              <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] bg-[#FDC435] rounded-full flex items-end justify-center overflow-hidden border-[12px] border-[#F9FAFF] shadow-xl md:shadow-none md:border-none">
                
                {/* NOTA: Tal como em cima, substitua pela sua imagem real sem fundo */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Natália Castilho" 
                  className="w-[85%] h-[95%] object-cover object-top"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 3. Secção Projetos */}
        <section id="projetos" className="relative py-24 px-6 md:px-16 lg:px-32 bg-[#F9FAFF]">
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Título da Secção */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl font-bold text-[#25282B]">Projetos</h2>
              <div className="w-16 h-1 bg-[#FDC435] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Cartão de Projeto */}
            <div className="w-full bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row">
              
              {/* Conteúdo do Projeto (Esquerda) */}
              <div className="w-full md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center space-y-6">
                <h3 className="font-serif text-4xl font-bold text-[#25282B]">Project Name</h3>
                <p className="text-[#828282] text-lg leading-relaxed">
                  I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.
                </p>
                <div className="pt-2">
                  <button className="px-8 py-2.5 rounded-full border border-[#25282B] text-[#25282B] font-semibold hover:bg-[#25282B] hover:text-white transition-colors">
                    View Project
                  </button>
                </div>
              </div>

              {/* Imagem do Projeto (Direita) */}
              <div className="w-full md:w-1/2 h-72 md:h-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Project Preview" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
            </div>
            
            {/* NOTA: Pode copiar/colar o bloco "Cartão de Projeto" acima para adicionar mais projetos! */}
            
          </div>
        </section>

      </div>
    </>
  );
}