import FundoContato from '../assets/FundoContato.png';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <>
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
            Estou sempre aberta a novas oportunidades e colaborações. <br className="hidden md:block" />
            Entre em contato e vamos criar algo incrível juntos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:nataliacastilho26@gmail.com?subject=Contato via Portfólio&body=Olá Natália, vi seus projetos e gostaria de conversar!"
            className="group flex items-center justify-center gap-3 bg-[#E17A5D] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#c9664a] transition-all shadow-lg hover:shadow-[#E17A5D]/20 hover:-translate-y-1"
          >
            <Mail className="w-5 h-5 transition-transform group-hover:rotate-12" />
            Enviar e-mail
          </a>
            <a
              href="https://www.linkedin.com/in/nat%C3%A1lia-castilho-055343247/" 
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
  <a 
    href="https://github.com/Nataly8674" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[#555555] hover:text-[#E17A5D] font-medium transition-colors"
  >
    GitHub
  </a>
  
  <a 
    href="https://www.linkedin.com/in/nat%C3%A1lia-castilho-055343247/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[#555555] hover:text-[#E17A5D] font-medium transition-colors"
  >
    LinkedIn
  </a>
  
  <a 
    href="https://www.instagram.com/naty_castilho2/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[#555555] hover:text-[#E17A5D] font-medium transition-colors"
  >
    Instagram
  </a>
</div>
        </div>
      </footer>
    </>
  )
}