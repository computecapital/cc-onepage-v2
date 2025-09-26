import investimentosLogo from 'figma:asset/7a81c5f4deb2ef9a682315b1a89c3d9a09edc940.png';
import c2AiStudioLogo from 'figma:asset/128797c9e120b3abd1ea7d5a333064566dc67de9.png';
import solarRecifeLogo from 'figma:asset/d69f3bb6018cccb50afa30dd311adf7715942ce2.png';

interface CompanyCardProps {
  title: string;
  description: string;
  category: string;
  href: string;
}

export function CompanyCard({ title, description, category, href }: CompanyCardProps) {
  return (
    <div className="glass card-3d p-8 group cursor-pointer">
      {/* Logo placeholder */}
      <div className="mb-6">
        <div className="w-16 h-16 glass rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 overflow-hidden">
          <img 
            src={title === 'Investimentos' ? investimentosLogo : 
                 title === 'C2 AI Studio' ? c2AiStudioLogo : 
                 solarRecifeLogo} 
            alt={`${title} Logo`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#18e492]/10 to-[#18d2e4]/10 text-[#18d2e4] border border-[#18d2e4]/20 font-[DM_Sans]">
          {category}
        </span>
      </div>
      
      {/* Content */}
      <div className="mb-6">
        <h3 className="mb-3 group-hover:bg-gradient-to-r group-hover:from-[#18e492] group-hover:to-[#18d2e4] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 text-[rgba(255,255,255,1)] font-[DM_Sans] text-[20px]">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed font-[DM_Sans]">
          {description}
        </p>
      </div>
      
      {/* CTA */}
      <div className="flex items-center justify-between">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#18d2e4] hover:text-[#18e492] transition-colors duration-200 font-medium text-sm group/btn"
        >
          <span className="flex items-center gap-2 font-[DM_Sans]">
            Saiba mais
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
        
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-[#18e492]/60 rounded-full"></div>
          <div className="w-1 h-1 bg-[#18d2e4]/60 rounded-full"></div>
          <div className="w-0.5 h-0.5 bg-[#f48101]/60 rounded-full"></div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#18e492]/5 via-[#18d2e4]/5 to-[#f48101]/5 rounded-[var(--radius-xl)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}