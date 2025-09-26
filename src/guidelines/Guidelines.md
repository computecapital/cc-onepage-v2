# Grupo Compute Capital – Design & UX Guidelines

Use este arquivo para garantir consistência no design, UI e UX do site do Grupo Compute Capital.  
Estas regras foram criadas para transmitir uma estética **super moderna, tecnológica e impactante ("WOW effect")**.

---

# General Guidelines

* Priorize **simplicidade e impacto visual**: poucos elementos na tela, mas de alto valor estético.
* Use **layout responsivo** sempre, optando por flexbox ou grid para alinhamento.
* Prefira **transições suaves** (< 150ms) e microinterações elegantes para reforçar a sensação de modernidade.
* Mantenha a experiência **dark-mode first**: fundo escuro, textos claros e alto contraste.
* Utilize **animações leves e performáticas** (Framer Motion, CSS transitions, Rive, Three.js para 3D simples).

---

# Design System Guidelines

## Color Palette
* **Background:** Gradiente animado azul-escuro → azul-elétrico → violeta  
  `#0A0A0F → #0044FF → #6B4EFF`  
* **Primary Text:** Branco (#FFFFFF) com leve brilho ou sombra difusa  
* **Accent:** Azul neon (#2A9DFF) para botões e ícones  
* **Glass Effect:** Fundo translúcido com blur de 40–60px e borda com opacidade de 15–20%

## Typography
* **Primary Font:** SF Pro Display (ou Inter como fallback)  
* **Headline:** UltraBold, 64px+, usado na Hero Section  
* **Subheadline:** Medium, 24px  
* **Body Text:** Regular, 16–18px, espaçamento generoso para legibilidade  

---

# Layout Guidelines

## Hero Section
* **Fundo:** Gradiente animado, estilo aurora boreal.
* **Headline:** Curta e poderosa (máx. 2 linhas).  
  Exemplo: *“Construindo o futuro da tecnologia.”*
* **Subheadline:** Explica o propósito em 1 frase.
* **Call to Action:** Botão primário com efeito glass + hover animado.
* **Interatividade:** Partículas ou geometria 3D interativa seguindo o mouse para criar profundidade.

## Empresas (Seção 2)
* Exibir 3 cards lado a lado (carrossel no mobile).
* Cada card:
  * Fundo em glassmorphism
  * Logo/ícone da empresa
  * Nome + tagline curta
  * Microanimação no hover (elevação + leve rotação 3D ou gradiente iluminado)
* CTA secundário: “Saiba mais” → direciona para página da empresa.

## Footer
* Minimalista, fundo gradiente mais escuro.
* Itens essenciais:
  * Logo do Grupo
  * Links: Sobre Nós | Contato | LinkedIn
* Linha fina com gradiente animado passando lentamente para “fechar” a experiência.

---

# Components Guidelines

## Buttons
* **Primary Button**
  * Visual: Glassmorphism, texto branco, borda translúcida, leve sombra.
  * Hover: brilho e leve expansão (scale 1.05).
  * Uso: CTAs principais (Hero Section, seção Empresas)
* **Secondary Button**
  * Visual: Contorno apenas, sem preenchimento.
  * Hover: borda ilumina com gradiente.
  * Uso: Ações secundárias, links para mais informações.

---

# Motion & Interactivity
* **Scroll:** Parallax leve nas seções para dar profundidade.
* **Hover States:** Animação imediata (< 150ms), com sutil brilho ou elevação.
* **Carregamento:** Loader minimalista (círculo ou barra com gradiente animado).
* **3D / WebGL:** Usar com moderação, sempre otimizado para performance.

---

# Tech Stack Recommendations
* **Framework:** Next.js ou Astro para alta performance.
* **UI:** TailwindCSS + Framer Motion para animações.
* **Animações Avançadas:** Three.js (para 3D leve) ou Rive (para microinterações vetoriais).

---
