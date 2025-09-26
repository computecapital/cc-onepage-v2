import { CompanyCard } from "./components/CompanyCard";
import { Hero } from "./components/Hero";
import { useState, useEffect, useRef } from "react";
import qrCodeImage from 'figma:asset/fe52e1ae47f6fb4067f6a58b8833bc19121cd6de.png';

export default function App() {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const fullText = "Nossas Empresas";
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Fade in animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Small delay to ensure smooth animation
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.5, // Triggera quando 50% do elemento está visível
        rootMargin: '-100px 0px' // Offset para controle mais preciso
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [isVisible]);

  return (
    <div className={`min-h-screen dark transition-opacity duration-[1500ms] ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <Hero />
      
      {/* Companies Section */}
      <section id="companies" className="relative py-24 px-6 overflow-hidden binary-bg">
        {/* Enhanced Rainbow divider */}
        <div className="absolute top-0 left-0 right-0 z-20">
          {/* Main rainbow bar */}
          <div className="h-2 bg-gradient-to-r from-[#18e492] via-[#18d2e4] via-[#f48101] to-[#18e492] animate-pulse"></div>
          {/* Glow effect */}
          <div className="absolute inset-0 h-2 bg-gradient-to-r from-[#18e492] via-[#18d2e4] via-[#18e492] to-[#18d2e4] blur-sm opacity-60"></div>
          {/* Shimmer effect */}
          <div className="absolute inset-0 h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
        
        {/* Binary Code Matrix Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Binary Code Columns - Fast */}
          <div className="binary-matrix binary-fast">
            <div className="binary-column" style={{left: '8%', animationDelay: '0.5s'}}>
              <span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '22%', animationDelay: '1.8s'}}>
              <span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>0</span>
            </div>
            <div className="binary-column" style={{left: '38%', animationDelay: '0.3s'}}>
              <span>1</span><span>1</span><span>0</span><span>0</span><span>1</span><span>0</span><span>1</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '52%', animationDelay: '2.5s'}}>
              <span>0</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '68%', animationDelay: '1.2s'}}>
              <span>1</span><span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>0</span>
            </div>
            <div className="binary-column" style={{left: '82%', animationDelay: '0.9s'}}>
              <span>0</span><span>1</span><span>1</span><span>0</span><span>0</span><span>1</span><span>1</span><span>0</span>
            </div>
            <div className="binary-column" style={{left: '92%', animationDelay: '1.6s'}}>
              <span>1</span><span>0</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>1</span>
            </div>
          </div>
          
          {/* Binary Code Columns - Medium */}
          <div className="binary-matrix binary-medium">
            <div className="binary-column" style={{left: '15%', animationDelay: '0.2s'}}>
              <span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '45%', animationDelay: '1.3s'}}>
              <span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span>
            </div>
            <div className="binary-column" style={{left: '75%', animationDelay: '2.1s'}}>
              <span>1</span><span>1</span><span>0</span><span>0</span><span>1</span><span>1</span>
            </div>
          </div>
          
          {/* Binary Code Columns - Slow */}
          <div className="binary-matrix binary-slow">
            <div className="binary-column" style={{left: '28%', animationDelay: '0.7s'}}>
              <span>1</span><span>0</span><span>1</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '58%', animationDelay: '1.9s'}}>
              <span>0</span><span>1</span><span>0</span><span>1</span>
            </div>
          </div>
          
          {/* Floating binary particles */}
          <div className="binary-particles">
            <div className="binary-particle" style={{left: '18%', top: '25%', animationDelay: '0.4s'}}>1</div>
            <div className="binary-particle" style={{left: '65%', top: '40%', animationDelay: '2.1s'}}>0</div>
            <div className="binary-particle" style={{left: '35%', top: '65%', animationDelay: '1.7s'}}>1</div>
            <div className="binary-particle" style={{left: '85%', top: '30%', animationDelay: '3.3s'}}>0</div>
          </div>
          
          {/* Central glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#18e492]/6 to-transparent"></div>
          
          {/* Blur overlay for depth - EXTREME BLUR + DARKER BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-[8px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/40 backdrop-blur-[12px]"></div>
          <div className="absolute inset-0 backdrop-blur-[16px] opacity-80"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 
              ref={titleRef}
              className="mb-4 bg-gradient-to-r from-[#18e492] via-[#18d2e4] to-[#f48101] bg-clip-text text-transparent text-[48px] font-bold font-normal font-[DM_Sans]"
            >
              {displayText}
              <span className={`text-[#18d2e4] ${isVisible ? 'animate-pulse' : ''}`}>|</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Três pilares da inovação que compõem o ecossistema Compute Capital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CompanyCard
              title="Investimentos"
              description="Fundo de venture capital focado em startups de tecnologia e inovação disruptiva"
              category="Capital de Risco"
              href="https://www.compute.capital/investment"
            />
            
            <CompanyCard
              title="C2 AI Studio"
              description="Plataforma de desenvolvimento de soluções em inteligência artificial e automação"
              category="Software & IA"
              href="https://c2ai.compute.capital"
            />
            
            <CompanyCard
              title="Solar Recife"
              description="Energia solar fotovoltaica sustentável para residências e empresas"
              category="Energia Renovável"
              href="https://solar.recife.compute.capital"
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative py-32 px-6 overflow-hidden binary-bg">
        {/* Rainbow divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#18e492] via-[#18d2e4] to-[#f48101]"></div>
        
        {/* Binary Code Matrix Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Binary Code Columns - Fast */}
          <div className="binary-matrix binary-fast">
            <div className="binary-column" style={{left: '5%', animationDelay: '0s'}}>
              <span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '15%', animationDelay: '1.2s'}}>
              <span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>0</span>
            </div>
            <div className="binary-column" style={{left: '25%', animationDelay: '0.8s'}}>
              <span>1</span><span>1</span><span>0</span><span>0</span><span>1</span><span>0</span><span>1</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '35%', animationDelay: '2.1s'}}>
              <span>0</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '45%', animationDelay: '0.3s'}}>
              <span>1</span><span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>0</span>
            </div>
            <div className="binary-column" style={{left: '55%', animationDelay: '1.7s'}}>
              <span>0</span><span>1</span><span>1</span><span>0</span><span>0</span><span>1</span><span>1</span><span>0</span>
            </div>
            <div className="binary-column" style={{left: '65%', animationDelay: '0.9s'}}>
              <span>1</span><span>0</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '75%', animationDelay: '2.3s'}}>
              <span>0</span><span>1</span><span>0</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '85%', animationDelay: '1.4s'}}>
              <span>1</span><span>1</span><span>0</span><span>1</span><span>0</span><span>0</span><span>1</span><span>0</span>
            </div>
            <div className="binary-column" style={{left: '95%', animationDelay: '0.6s'}}>
              <span>0</span><span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span>
            </div>
          </div>
          
          {/* Binary Code Columns - Medium */}
          <div className="binary-matrix binary-medium">
            <div className="binary-column" style={{left: '10%', animationDelay: '0s'}}>
              <span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '30%', animationDelay: '1.5s'}}>
              <span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span>
            </div>
            <div className="binary-column" style={{left: '50%', animationDelay: '0.7s'}}>
              <span>1</span><span>1</span><span>0</span><span>0</span><span>1</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '70%', animationDelay: '2.2s'}}>
              <span>0</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '90%', animationDelay: '1.1s'}}>
              <span>1</span><span>0</span><span>1</span><span>0</span><span>1</span><span>0</span>
            </div>
          </div>
          
          {/* Binary Code Columns - Slow */}
          <div className="binary-matrix binary-slow">
            <div className="binary-column" style={{left: '20%', animationDelay: '0s'}}>
              <span>1</span><span>0</span><span>1</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '40%', animationDelay: '2s'}}>
              <span>0</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="binary-column" style={{left: '60%', animationDelay: '1.3s'}}>
              <span>1</span><span>1</span><span>0</span><span>0</span>
            </div>
            <div className="binary-column" style={{left: '80%', animationDelay: '0.8s'}}>
              <span>0</span><span>0</span><span>1</span><span>1</span>
            </div>
          </div>
          
          {/* Floating binary particles */}
          <div className="binary-particles">
            <div className="binary-particle" style={{left: '12%', top: '20%', animationDelay: '0s'}}>1</div>
            <div className="binary-particle" style={{left: '78%', top: '35%', animationDelay: '1.5s'}}>0</div>
            <div className="binary-particle" style={{left: '33%', top: '60%', animationDelay: '2.8s'}}>1</div>
            <div className="binary-particle" style={{left: '67%', top: '75%', animationDelay: '0.7s'}}>0</div>
            <div className="binary-particle" style={{left: '45%', top: '15%', animationDelay: '3.2s'}}>1</div>
            <div className="binary-particle" style={{left: '89%', top: '50%', animationDelay: '1.9s'}}>0</div>
          </div>
          
          {/* Central glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#18d2e4]/8 to-transparent"></div>
          
          {/* Blur overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glass rounded-2xl p-8">
            {/* Header Section */}
            <div className="text-center mb-8">
              <h3 className="text-2xl bg-gradient-to-r from-[#18e492] via-[#18d2e4] to-[#f48101] bg-clip-text text-transparent font-[DM_Sans] font-bold mb-2 text-[36px] font-normal">
                Meet Compute Capital
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* About Section */}
              <div className="lg:col-span-2">
                <h4 className="text-white font-semibold font-[DM_Sans] mb-4 text-sm uppercase tracking-wider">
                  Sobre o Grupo
                </h4>
                <div className="space-y-4">
                  <p className="text-muted-foreground font-[DM_Sans] leading-relaxed text-sm">
                    A <span className="bg-gradient-to-r from-[#18e492] to-[#18d2e4] bg-clip-text text-transparent font-semibold">Compute Capital</span> é um grupo brasileiro AI-Native que integra tecnologia, energia e investimentos. Atuamos no desenvolvimento de software com inteligência artificial, na geração de energia solar com fazendas no Nordeste, na operação de data centers de GPUs e investimentos em ativos físicos e alternativos.
                  </p>
                  
                  <p className="text-muted-foreground font-[DM_Sans] leading-relaxed text-sm">
                    Liderados por jovens empreendedores com mais de 10 anos de experiência, buscamos antecipar os desafios de 2050, criando infraestrutura e soluções que impulsionam negócios e promovem crescimento sustentável.
                  </p>
                  
                  <p className="text-muted-foreground font-[DM_Sans] leading-relaxed text-sm">
                    Nossa <span className="bg-gradient-to-r from-[#18d2e4] to-[#f48101] bg-clip-text text-transparent font-semibold">missão</span> é conectar IA, energia e inovação para gerar impacto real no presente e no futuro.
                  </p>
                </div>
              </div>
              
              {/* Navigation Section */}
              <div className="lg:border-l lg:border-white/10 lg:pl-8">
                <div className="flex flex-col xl:flex-row xl:gap-8">
                  {/* Links Section */}
                  <div className="flex-1">
                    <h4 className="text-white font-semibold font-[DM_Sans] mb-4 text-sm uppercase tracking-wider">
                      Links Rápidos
                    </h4>
                    <nav className="space-y-3">
                      <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block text-muted-foreground hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200 font-[DM_Sans] text-sm group">
                        <span className="flex items-center gap-2">
                          Sobre Nós
                          <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </a>
                      <a href="https://wa.me/5581999003360#" className="block text-muted-foreground hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200 font-[DM_Sans] text-sm group">
                        <span className="flex items-center gap-2">
                          Contato
                          <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </a>
                      <a href="https://www.linkedin.com/company/compute-capital/" className="block text-muted-foreground hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200 font-[DM_Sans] text-sm group">
                        <span className="flex items-center gap-2">
                          LinkedIn
                          <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </a>
                    </nav>

                    {/* Stats */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold bg-gradient-to-r from-[#18e492] to-[#18d2e4] bg-clip-text text-transparent font-[DM_Sans]">10+</div>
                          <div className="text-white/50 text-xs font-[DM_Sans]">Anos</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold bg-gradient-to-r from-[#18d2e4] to-[#f48101] bg-clip-text text-transparent font-[DM_Sans]">3</div>
                          <div className="text-white/50 text-xs font-[DM_Sans]">Empresas</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* QR Code Section - Desktop Only */}
                  <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-start xl:mt-0">
                    <div className="glass p-3 rounded-xl">
                      <img 
                        src={qrCodeImage}
                        alt="QR Code - Compute Capital"
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                    </div>
                    <p className="text-white/60 text-xs font-[DM_Sans] mt-2 text-center max-w-[100px]">
                      Escaneie para acessar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          
          {/* Aurora line */}
          <div className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-[#18e492] via-[#18d2e4] via-[#f48101] to-transparent opacity-50"></div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              © 2025 Grupo Compute Capital. Todos os direitos reservados.
            </p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <a 
              href="https://www.linkedin.com/company/compute-capital/" 
              className="text-white/60 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.instagram.com/computecapital/" 
              className="text-white/60 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a 
              href="https://wa.me/5581999003360" 
              className="text-white/60 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-5 h-5 text-primary" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}