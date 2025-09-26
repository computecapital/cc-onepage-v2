import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' }
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Language Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="glass px-4 py-2 rounded-lg border border-white/10 hover:scale-105 transition-all duration-200 group flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-base">{selectedLanguage.flag}</span>
          <span className="text-white font-medium text-sm font-[DM_Sans] hidden sm:block">
            {selectedLanguage.name}
          </span>
          <span className="text-white font-medium text-sm font-[DM_Sans] block sm:hidden">
            {selectedLanguage.code.split('-')[0].toUpperCase()}
          </span>
        </div>
        
        {/* Chevron */}
        <motion.svg
          className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
        
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18e492]/20 via-[#18d2e4]/20 to-[#f48101]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full right-0 mt-2 w-48 glass rounded-xl border border-white/10 overflow-hidden z-50"
              style={{ backdropFilter: 'blur(32px)' }}
            >
              <div className="py-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language)}
                    className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-200 hover:bg-white/5 ${
                      selectedLanguage.code === language.code 
                        ? 'bg-gradient-to-r from-[#18e492]/10 to-[#18d2e4]/10 border-l-2 border-[#18d2e4]' 
                        : ''
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-white font-medium text-sm font-[DM_Sans]">
                        {language.name}
                      </span>
                      <span className="text-white/60 text-xs font-[DM_Sans]">
                        {language.code}
                      </span>
                    </div>
                    
                    {/* Selected indicator */}
                    {selectedLanguage.code === language.code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-[#18d2e4] rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>
              
              {/* Divider with gradient */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Footer info */}
              <div className="px-4 py-2">
                <p className="text-xs text-white/50 font-[DM_Sans] text-center">
                  Mais idiomas em breve
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}