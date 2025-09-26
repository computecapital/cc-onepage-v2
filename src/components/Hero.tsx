import React, { useState, useEffect } from 'react';
import computeCapitalLogo from 'figma:asset/509d315fc4354ff69aa61911d9bfdc4414135152.png';
import { ChatBot } from './ChatBot';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  const [displayDescription, setDisplayDescription] = useState("");
  const fullDescription = t('hero.description');
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullDescription.length) {
        setDisplayDescription(fullDescription.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, [fullDescription]);

  const handleCompanyClick = () => {
    const companiesSection = document.getElementById('companies');
    if (companiesSection) {
      companiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden binary-bg">
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

      {/* Para Investidores Badge */}
      <div className="absolute top-8 left-8 z-20 flex" style={{ height: '40px' }}>
        <a href="https://www.compute.capital/investment" target="_blank" rel="noopener noreferrer" className="glass px-4 py-2 rounded-lg border border-white/10 hover:scale-105 transition-transform duration-200 group">
          <div className="flex items-center gap-2 inline-flex">
            <svg className="w-4 h-4 text-[#18d2e4] group-hover:text-[#18e492] transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-white font-medium text-sm font-[DM_Sans] bg-gradient-to-r from-[#18e492] to-[#18d2e4] bg-clip-text text-transparent">
              {t('hero.investorArea')}
            </span>
          </div>
        </a>
      </div>

      {/* Language Selector */}
      <div className="absolute top-8 right-8 z-20">
        <LanguageSelector />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <div className="mb-8">
          <div className="mb-8">
            <img
              src={computeCapitalLogo}
              alt="Compute Capital Logo"
              className="w-28 h-auto object-contain mx-auto animate-spin-slow"
            />
          </div>
          
          <h1 className="mb-6 text-center">
            <span className="font-bold bg-gradient-to-r from-[#18d2e4] via-[#18d2e4] to-[#18e492] bg-clip-text text-transparent text-[48px] font-[DM_Sans] block cursor-pointer group relative overflow-hidden">
              <span className="relative z-10 transition-all duration-300 group-hover:scale-105 block bg-gradient-to-r from-[#18d2e4] via-[#18d2e4] to-[#18e492] bg-clip-text text-transparent animate-fade-in-slow">Compute Capital®</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#18e492] via-[#f48101] to-[#18d2e4] bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105">Compute Capital®</div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-[DM_Sans] font-bold font-normal not-italic min-h-[4rem]">
            {displayDescription}
            <span className="animate-pulse text-[#18d2e4]">|</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary" style={{ cursor: 'pointer' }} onClick={handleCompanyClick}>
            <span className="font-[DM_Sans]">{t('hero.viewCompanies')}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          
          <a className="btn-ghost" href="https://wa.me/5581999003360">
            <span className="font-[DM_Sans]">{t('hero.contact')}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
        

      </div>

      {/* ChatBot */}
      {/* <ChatBot /> */}
    </section>
  );
}