import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const { t } = useTranslation();
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const fullText = t('about.aboutUs');
  const titleRef = useRef<HTMLHeadingElement>(null);

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
        threshold: 0.5,
        rootMargin: '-100px 0px'
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
  }, [isVisible, fullText]);

  return (
    <section className="relative py-24 px-6 overflow-hidden binary-bg">
      {/* Enhanced Rainbow divider */}
      <div className="absolute top-0 left-0 right-0 z-20">
        {/* Main rainbow bar */}
        <div className="h-2 bg-gradient-to-r from-[#18e492] via-[#18d2e4] via-[#f48101] to-[#18e492] animate-pulse"></div>
        {/* Glow effect */}
        <div className="absolute inset-0 h-2 bg-gradient-to-r from-[#18e492] via-[#18d2e4] via-[#f48101] to-[#18e492] blur-sm opacity-60"></div>
        {/* Shimmer effect */}
        <div className="absolute inset-0 h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Binary Code Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Binary Code Columns - Fast */}
        <div className="binary-matrix binary-fast">
          <div className="binary-column" style={{left: '12%', animationDelay: '1.2s'}}>
            <span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>0</span><span>1</span>
          </div>
          <div className="binary-column" style={{left: '28%', animationDelay: '0.4s'}}>
            <span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>0</span>
          </div>
          <div className="binary-column" style={{left: '44%', animationDelay: '2.7s'}}>
            <span>1</span><span>1</span><span>0</span><span>0</span><span>1</span><span>0</span><span>1</span><span>1</span>
          </div>
          <div className="binary-column" style={{left: '58%', animationDelay: '1.5s'}}>
            <span>0</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span><span>0</span><span>1</span>
          </div>
          <div className="binary-column" style={{left: '72%', animationDelay: '0.8s'}}>
            <span>1</span><span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>0</span>
          </div>
          <div className="binary-column" style={{left: '86%', animationDelay: '2.2s'}}>
            <span>0</span><span>1</span><span>1</span><span>0</span><span>0</span><span>1</span><span>1</span><span>0</span>
          </div>
        </div>
        
        {/* Binary Code Columns - Medium */}
        <div className="binary-matrix binary-medium">
          <div className="binary-column" style={{left: '18%', animationDelay: '1.7s'}}>
            <span>1</span><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span>
          </div>
          <div className="binary-column" style={{left: '38%', animationDelay: '0.9s'}}>
            <span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span>
          </div>
          <div className="binary-column" style={{left: '78%', animationDelay: '2.4s'}}>
            <span>1</span><span>1</span><span>0</span><span>0</span><span>1</span><span>1</span>
          </div>
        </div>
        
        {/* Binary Code Columns - Slow */}
        <div className="binary-matrix binary-slow">
          <div className="binary-column" style={{left: '25%', animationDelay: '1.1s'}}>
            <span>1</span><span>0</span><span>1</span><span>1</span>
          </div>
          <div className="binary-column" style={{left: '65%', animationDelay: '0.6s'}}>
            <span>0</span><span>1</span><span>0</span><span>1</span>
          </div>
        </div>
        
        {/* Floating binary particles */}
        <div className="binary-particles">
          <div className="binary-particle" style={{left: '15%', top: '30%', animationDelay: '1.8s'}}>1</div>
          <div className="binary-particle" style={{left: '68%', top: '45%', animationDelay: '0.3s'}}>0</div>
          <div className="binary-particle" style={{left: '42%', top: '70%', animationDelay: '2.9s'}}>1</div>
          <div className="binary-particle" style={{left: '88%', top: '25%', animationDelay: '1.4s'}}>0</div>
        </div>
        
        {/* Central glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#f48101]/6 to-transparent"></div>
        
        {/* Blur overlay for depth - EXTREME BLUR + DARKER BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-[8px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/40 backdrop-blur-[12px]"></div>
        <div className="absolute inset-0 backdrop-blur-[16px] opacity-80"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="mb-4 bg-gradient-to-r from-[#18e492] via-[#18d2e4] to-[#f48101] bg-clip-text text-transparent text-[48px] font-bold font-normal font-[DM_Sans]"
          >
            {displayText}
            <span className={`text-[#18d2e4] ${isVisible ? 'animate-pulse' : ''}`}>|</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="glass p-8 rounded-2xl">
            <div className="space-y-6">
              <p className="text-white/90 leading-relaxed font-[DM_Sans] text-base" dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
              
              <p className="text-white/90 leading-relaxed font-[DM_Sans] text-base">{t('about.p2')}</p>
              
              <p className="text-white/90 leading-relaxed font-[DM_Sans] text-base" dangerouslySetInnerHTML={{ __html: t('about.p3') }} />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#18e492] to-[#18d2e4] bg-clip-text text-transparent font-[DM_Sans]">10+</div>
                  <div className="text-white/60 text-sm font-[DM_Sans]">{t('about.yearsExperience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#18d2e4] to-[#f48101] bg-clip-text text-transparent font-[DM_Sans]">3</div>
                  <div className="text-white/60 text-sm font-[DM_Sans]">{t('about.businessVerticals')}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Frame */}
          <div className="relative">
            <div className="glass p-4 rounded-2xl group hover:scale-105 transition-transform duration-300">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1665360755361-d8cd03c82b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc1ODQ1NTA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Equipe Compute Capital"
                  className="w-full h-80 object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="glass px-3 py-1.5 rounded-lg">
                    <span className="text-white font-medium text-sm font-[DM_Sans]">
                      AI-Native • 2025
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Frame decoration */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#18e492]/20 via-[#18d2e4]/20 to-[#f48101]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#18e492] to-[#18d2e4] rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#18d2e4] to-[#f48101] rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}