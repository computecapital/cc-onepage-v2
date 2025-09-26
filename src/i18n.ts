import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Recursos de tradução
const resources = {
  pt: {
    translation: {
      common: {
        learnMore: 'Saiba mais',
      },
      hero: {
        ourCompanies: 'Nossas Empresas',
        threePillars: 'Três pilares da inovação que compõem o ecossistema Compute Capital',
        description: 'Investimentos estratégicos, soluções em IA e energia sustentável. Três verticais que transformam ideias em realidade.',
        investorArea: 'Área do Investidor',
        viewCompanies: 'Conheça Nossas Empresas',
        contact: 'Entre em Contato',
      },
      footer: {
        meet: 'Meet Compute Capital',
        aboutGroup: 'Sobre o Grupo',
        quickLinks: 'Links Rápidos',
        aboutUs: 'Sobre Nós',
        contact: 'Contato',
        years: 'Anos',
        companies: 'Empresas',
        scanToAccess: 'Escaneie para acessar',
        copyright: '© 2025 Grupo Compute Capital. Todos os direitos reservados.',
      },
      about: {
        aboutUs: 'Sobre Nós',
        subtitle: 'Conheça nossa história e visão para o futuro da tecnologia',
        yearsExperience: 'Anos de Experiência',
        businessVerticals: 'Verticais de Negócio',
        p1: 'A <span class="bg-gradient-to-r from-[#18e492] to-[#18d2e4] bg-clip-text text-transparent font-semibold">Compute Capital</span> é um grupo brasileiro AI-Native que integra tecnologia, energia e investimentos. Atuamos no desenvolvimento de software com inteligência artificial, na geração de energia solar com fazendas no Nordeste, na operação de data centers de GPUs e investimentos em ativos físicos e alternativos.',
        p2: 'Liderados por jovens empreendedores com mais de 10 anos de experiência, buscamos antecipar os desafios de 2050, criando infraestrutura e soluções que impulsionam negócios e promovem crescimento sustentável.',
        p3: 'Nossa <span class="bg-gradient-to-r from-[#18d2e4] to-[#f48101] bg-clip-text text-transparent font-semibold">missão</span> é conectar IA, energia e inovação para gerar impacto real no presente e no futuro.',
      },
      companies: {
        investimentos: {
          title: 'Investimentos',
          description: 'Fundo de venture capital focado em startups de tecnologia e inovação disruptiva',
          category: 'Capital de Risco',
        },
        c2ai: {
          title: 'C2 AI Studio',
          description: 'Plataforma de desenvolvimento de soluções em inteligência artificial e automação',
          category: 'Software & IA',
        },
        solar: {
          title: 'Solar Recife',
          description: 'Energia solar fotovoltaica sustentável para residências e empresas',
          category: 'Energia Renovável',
        },
      },
      chatbot: {
        openCta: 'Fale com Amanda',
        onlineNow: 'IA • Online agora',
        intro: 'Olá! Sou Amanda, sua assistente virtual da Compute Capital. Como posso ajudá-lo hoje?',
        placeholder: 'Digite sua mensagem...',
        role: 'Assistente Virtual',
        responses: [
          'Ótima pergunta! A Compute Capital tem três verticais principais: Investimentos, C2 AI Studio para soluções em IA, e Solar Recife para energia renovável.',
          'Nosso fundo de investimentos foca em startups de tecnologia disruptiva. Procuramos empresas com potencial de transformar mercados.',
          'O C2 AI Studio desenvolve soluções personalizadas em inteligência artificial para empresas de diversos setores.',
          'A Solar Recife oferece sistemas de energia solar fotovoltaica para residências e empresas em Pernambuco.',
          'Estamos sempre em busca de oportunidades inovadoras. Gostaria de saber mais sobre alguma área específica?',
          'Posso conectá-lo com nossa equipe especializada. Que tipo de parceria ou investimento você tem em mente?'
        ]
      }
    }
  },
  en: {
    translation: {
      common: {
        learnMore: 'Learn more',
      },
      hero: {
        ourCompanies: 'Our Companies',
        threePillars: 'Three pillars of innovation that compose the Compute Capital ecosystem',
        description: 'Strategic investments, AI solutions and sustainable energy. Three verticals turning ideas into reality.',
        investorArea: 'Investor Area',
        viewCompanies: 'Explore Our Companies',
        contact: 'Contact Us',
      },
      footer: {
        meet: 'Meet Compute Capital',
        aboutGroup: 'About the Group',
        quickLinks: 'Quick Links',
        aboutUs: 'About Us',
        contact: 'Contact',
        years: 'Years',
        companies: 'Companies',
        scanToAccess: 'Scan to access',
        copyright: '© 2025 Compute Capital Group. All rights reserved.',
      },
      about: {
        aboutUs: 'About Us',
        subtitle: 'Learn about our history and vision for the future of technology',
        yearsExperience: 'Years of Experience',
        businessVerticals: 'Business Verticals',
        p1: 'Compute Capital is a Brazilian AI-Native group that integrates technology, energy, and investments. We build AI-powered software, generate solar energy with farms in the Northeast, operate GPU data centers, and invest in physical and alternative assets.',
        p2: 'Led by young entrepreneurs with over 10 years of experience, we aim to anticipate the challenges of 2050 by creating infrastructure and solutions that drive businesses and foster sustainable growth.',
        p3: 'Our <span class="bg-gradient-to-r from-[#18d2e4] to-[#f48101] bg-clip-text text-transparent font-semibold">mission</span> is to connect AI, energy, and innovation to generate real impact in the present and the future.',
      },
      companies: {
        investimentos: {
          title: 'Investments',
          description: 'Venture capital fund focused on technology startups and disruptive innovation',
          category: 'Venture Capital',
        },
        c2ai: {
          title: 'C2 AI Studio',
          description: 'Platform for developing artificial intelligence and automation solutions',
          category: 'Software & AI',
        },
        solar: {
          title: 'Solar Recife',
          description: 'Sustainable photovoltaic solar energy for homes and businesses',
          category: 'Renewable Energy',
        },
      },
      chatbot: {
        openCta: 'Chat with Amanda',
        onlineNow: 'AI • Online now',
        intro: "Hi! I'm Amanda, your virtual assistant from Compute Capital. How can I help you today?",
        placeholder: 'Type your message...',
        role: 'Virtual Assistant',
        responses: [
          'Great question! Compute Capital has three main verticals: Investments, C2 AI Studio for AI solutions, and Solar Recife for renewable energy.',
          'Our investment fund focuses on disruptive technology startups. We look for companies with the potential to transform markets.',
          'C2 AI Studio develops custom artificial intelligence solutions for companies across various sectors.',
          'Solar Recife offers photovoltaic solar energy systems for homes and businesses in Pernambuco.',
          'We are always looking for innovative opportunities. Would you like to learn more about a specific area?',
          'I can connect you with our specialized team. What kind of partnership or investment do you have in mind?'
        ]
      }
    }
  },
  es: {
    translation: {
      common: {
        learnMore: 'Saber más',
      },
      hero: {
        ourCompanies: 'Nuestras Empresas',
        threePillars: 'Tres pilares de innovación que componen el ecosistema de Compute Capital',
        description: 'Inversiones estratégicas, soluciones de IA y energía sostenible. Tres verticales que hacen realidad las ideas.',
        investorArea: 'Área del Inversor',
        viewCompanies: 'Conoce Nuestras Empresas',
        contact: 'Contáctanos',
      },
      footer: {
        meet: 'Conoce Compute Capital',
        aboutGroup: 'Sobre el Grupo',
        quickLinks: 'Enlaces Rápidos',
        aboutUs: 'Sobre Nosotros',
        contact: 'Contacto',
        years: 'Años',
        companies: 'Empresas',
        scanToAccess: 'Escanea para acceder',
        copyright: '© 2025 Grupo Compute Capital. Todos los derechos reservados.',
      },
      about: {
        aboutUs: 'Sobre Nosotros',
        subtitle: 'Conoce nuestra historia y visión para el futuro de la tecnología',
        yearsExperience: 'Años de Experiencia',
        businessVerticals: 'Verticales de Negocio',
        p1: 'Compute Capital es un grupo brasileño AI-Native que integra tecnología, energía e inversiones. Desarrollamos software con inteligencia artificial, generamos energía solar con granjas en el Nordeste, operamos centros de datos de GPU e invertimos en activos físicos y alternativos.',
        p2: 'Liderados por jóvenes emprendedores con más de 10 años de experiencia, buscamos anticipar los desafíos de 2050, creando infraestructura y soluciones que impulsen los negocios y promuevan el crecimiento sostenible.',
        p3: 'Nuestra <span class="bg-gradient-to-r from-[#18d2e4] to-[#f48101] bg-clip-text text-transparent font-semibold">misión</span> es conectar IA, energía e innovación para generar un impacto real en el presente y en el futuro.',
      },
      companies: {
        investimentos: {
          title: 'Inversiones',
          description: 'Fondo de capital de riesgo enfocado en startups de tecnología e innovación disruptiva',
          category: 'Capital de Riesgo',
        },
        c2ai: {
          title: 'C2 AI Studio',
          description: 'Plataforma para el desarrollo de soluciones de inteligencia artificial y automatización',
          category: 'Software e IA',
        },
        solar: {
          title: 'Solar Recife',
          description: 'Energía solar fotovoltaica sostenible para hogares y empresas',
          category: 'Energía Renovable',
        },
      },
      chatbot: {
        openCta: 'Habla con Amanda',
        onlineNow: 'IA • En línea ahora',
        intro: '¡Hola! Soy Amanda, tu asistente virtual de Compute Capital. ¿Cómo puedo ayudarte hoy?',
        placeholder: 'Escribe tu mensaje...',
        role: 'Asistente Virtual',
        responses: [
          '¡Gran pregunta! Compute Capital tiene tres verticales principales: Inversiones, C2 AI Studio para soluciones de IA y Solar Recife para energía renovable.',
          'Nuestro fondo de inversión se centra en startups de tecnología disruptiva. Buscamos empresas con potencial para transformar mercados.',
          'C2 AI Studio desarrolla soluciones personalizadas de inteligencia artificial para empresas de diversos sectores.',
          'Solar Recife ofrece sistemas de energía solar fotovoltaica para hogares y empresas en Pernambuco.',
          'Siempre buscamos oportunidades innovadoras. ¿Te gustaría saber más sobre algún área específica?',
          'Puedo conectarte con nuestro equipo especializado. ¿Qué tipo de asociación o inversión tienes en mente?'
        ]
      }
    }
  }
} as const;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en', 'es'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    returnObjects: true,
  });

export default i18n;


