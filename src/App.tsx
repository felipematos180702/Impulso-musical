/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { 
  Play, 
  CheckCircle, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  Star,
  Music,
  Zap,
  TrendingUp,
  Video,
  Globe,
  Lock,
  Gift,
  Plus
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

// --- Helper Components ---

const Reveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black-pure/90 border-b border-[#0A192F] backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-8 h-20 grid grid-cols-3 items-center">
      {/* Left: Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]">
        <a href="#method" className="text-neon hover:opacity-80 transition-opacity">O Método</a>
        <a href="#modules" className="hover:text-white transition-colors">Módulos</a>
        <a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a>
      </nav>

      {/* Center: Hero Logo */}
      <div className="flex justify-center flex-1">
        <div className="relative h-20 group cursor-pointer inline-flex items-center">
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-neon/10 blur-2xl rounded-full scale-110 group-hover:bg-neon/20 transition-all" />
          <img 
            src="https://lh3.googleusercontent.com/d/1owzhXUcb4cm7ZVl_xDhsHevrNkbD_y0Y" 
            alt="Impulso Musical Logo" 
            className="h-full w-auto relative z-10 object-contain drop-shadow-[0_0_8px_#A5F2FF]"
          />
        </div>
      </div>

      {/* Right: Small CTA */}
      <div className="hidden md:flex justify-end">
        <a 
          href="#pricing" 
          className="text-[9px] font-black text-neon uppercase tracking-widest border border-neon/30 px-5 py-2 rounded-full hover:bg-neon hover:text-black transition-all hover:scale-105"
        >
          Acesso Imediato
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#0A192F]">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="px-3 py-1 bg-night text-neon text-[10px] font-bold uppercase tracking-widest border border-neon/30 rounded-full inline-block">
              Validado no YouTube • 50k/Mês Orgânico
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase tracking-tighter">
              O JEITO CERTO PARA <br />
              <span className="text-neon drop-shadow-[0_0_15px_rgba(165,242,255,0.6)]">Viver de Música</span> <br />
              USANDO IA NAS PLATAFORMAS DIGITAIS
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-metallic max-w-xl">
              Saia do absoluto zero ou do estagnado e alcance resultados profissionais com o passo a passo de quem já fatura no mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#pricing"
                className="w-full sm:w-auto bg-neon text-black font-black py-5 px-10 rounded-lg shadow-[0_0_25px_rgba(165,242,255,0.4)] hover:shadow-[0_0_40px_rgba(165,242,255,0.6)] transition-all uppercase tracking-tighter text-center"
              >
                Quero meu acesso agora
              </motion.a>
              <div className="flex -space-x-3 items-center">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-night flex items-center justify-center">
                    <Users size={20} className="text-neon/50" />
                  </div>
                ))}
                <div className="ml-6 flex flex-col items-start leading-none">
                  <span className="text-white font-black text-sm">+1.500 Alunos</span>
                  <span className="text-[10px] uppercase text-metallic tracking-widest mt-1">Conteúdo validado</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-video w-full bg-night rounded-2xl border border-neon/20 overflow-hidden group shadow-[0_0_50px_rgba(165,242,255,0.1)]"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/PRgsGOfUj-4?controls=0&modestbranding=1&rel=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#222]">
              <div className="h-full w-1/3 bg-neon shadow-[0_0_10px_#A5F2FF]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    { name: "Carlos S.", loc: "São Paulo, SP", text: "Minha técnica mudou completamente em 3 semanas. Incrível!!" },
    { name: "Júlia M.", loc: "Curitiba, PR", text: "Nunca imaginei que poderia usar IA pra criar clipes tão bons." },
    { name: "Ricardo T.", loc: "Lisboa, PT", text: "Finalmente um método que foca em ganhar dinheiro com a música." },
    { name: "Beatriz L.", loc: "Belo Horizonte, MG", text: "O suporte no WhatsApp é o diferencial. Milton é fera!" },
    { name: "André F.", loc: "Rio de Janeiro, RJ", text: "Já bati meus primeiros 10k inscritos seguindo o passo a passo." },
    { name: "Marcos P.", loc: "Orlando, FL", text: "Conteúdo denso e prático. Direto ao ponto, sem enrolação." },
  ];

  return (
    <section id="testimonials" className="py-20 bg-night/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-neon font-bold tracking-widest mb-4">CONTEÚDO VALIDADO</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2 text-2xl font-bold"><Users /> MILHARES DE ALUNOS</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-black-pure p-6 rounded-2xl border border-neon/10 hover:border-neon/30 transition-colors"
            >
              <div className="flex gap-1 text-neon mb-4">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-white/90 mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-metallic text-xs uppercase tracking-wider">{t.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PainSolution = () => {
  const points = [
    { title: "Estagnação", desc: "Você sente que está parado e não evolui na música há tempos." },
    { title: "Falta de Técnica", desc: "Tem boas ideias mas não consegue executar com qualidade profissional." },
    { title: "Invisibilidade", desc: "Cria conteúdo mas ninguém vê. O algoritmo parece seu inimigo." },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Cansado de ser apenas mais um no <span className="text-neon">oceano digital?</span>
            </h2>
            <div className="space-y-6">
              {points.map((p, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{p.title}</h3>
                    <p className="text-metallic">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-neon/10 p-10 rounded-[40px] border border-neon/20 relative overflow-hidden">
            <div className="relative z-10">
              <Zap className="text-neon mb-6" size={48} />
              <h3 className="text-3xl font-display font-bold mb-4">A Ponte para o Sucesso</h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                O <strong>Método Impulso Musical</strong> foi desenhado para ser a ponte definitiva entre o amadorismo e o mercado profissional.
              </p>
              <ul className="space-y-4">
                {["Método passo a passo", "Uso estratégico de IA", "Foco em resultados financeiros"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-neon" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neon/20 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

const MethodDescription = () => (
    <section id="method" className="py-20 bg-night/20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">O que você vai aprender?</h2>
            <div className="text-lg text-metallic leading-relaxed space-y-6">
                <p>
                    O mercado mudou. Hoje, você não precisa de grandes estúdios para criar. Com o <span className="text-neon font-bold">Impulso Musical</span>, você aprende a transformar ideias em projetos musicais completos: do artista à distribuição.
                </p>
                <p>
                    Vou te mostrar como desenvolver músicas que emocionam, criar identidades visuais impactantes e produzir videoclipes com IA que parecem produções de Hollywood.
                </p>
                <p className="text-white font-medium">
                    O grande diferencial? Você não depende só do YouTube. Te ensino a dominar o Spotify, Apple Music e Deezer, abrindo novos fluxos de receita reais para o seu projeto.
                </p>
            </div>
        </div>
    </section>
);

const ModulesCarousel = () => {
  const modules = [
    { 
      id: 1, 
      title: "Fundamentos da Criação Musical", 
      desc: "Domine a base para compor e produzir hits com qualidade profissional.", 
      icon: <Music />, 
      img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      title: "Configuração e Identidade", 
      desc: "Posicione seu canal como uma autoridade e atraia a audiência certa.", 
      icon: <Globe />, 
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      title: "Monetização e Crescimento", 
      desc: "Estratégias validadas para acelerar seus ganhos e escalar inscritos.", 
      icon: <TrendingUp />, 
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 4, 
      title: "Comercialização e Proteção", 
      desc: "Garanta seus direitos autorais e aprenda a lucrar com suas criações.", 
      icon: <Lock />, 
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 5, 
      title: "Distribuição e Promoção", 
      desc: "Coloque sua música nas maiores plataformas e alcance o topo das playlists.", 
      icon: <ShieldCheck />, 
      img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 6, 
      title: "Métricas, SEO e Branding", 
      desc: "Use dados estratégicos para dominar os algoritmos e fortalecer sua marca.", 
      icon: <TrendingUp />, 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 7, 
      title: "Projeto Videoclipe Básico", 
      desc: "Crie clipes profissionais que prendem a atenção gastando quase nada.", 
      icon: <Video />, 
      img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 8, 
      title: "Projeto Videoclipe Avançado", 
      desc: "Domine técnicas cinematográficas para elevar o nível visual das produções.", 
      icon: <Video />, 
      img: "https://images.unsplash.com/photo-1533107862482-0e6974b06917?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 9, 
      title: "Aulas Bônus Essenciais", 
      desc: "Segredos exclusivos e ferramentas práticas para acelerar resultados.", 
      icon: <Gift />, 
      img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 10, 
      title: "Projeto Viral de Música", 
      desc: "O passo a passo para criar conteúdos que explodem nas redes sociais.", 
      icon: <Zap />, 
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=600&auto=format&fit=crop" 
    },
  ];

  return (
    <section id="modules" className="py-20 overflow-hidden bg-black-pure scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-display font-bold">Conteúdo do <span className="text-neon">treinamento</span></h2>
        <p className="text-metallic mt-4 text-lg">10 Módulos pensados para sua evolução acelerada no mercado digital.</p>
      </div>

      <div className="relative group/carousel">
        <motion.div 
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="flex gap-6 whitespace-nowrap py-10"
        >
          {[...modules, ...modules].map((m, i) => (
            <div 
              key={i}
              className="flex-shrink-0 w-[320px] bg-night rounded-[32px] overflow-hidden border border-neon/10 glow-border hover:border-neon/40 hover:glow-shadow transition-all group"
            >
              <div className="h-48 relative overflow-hidden">
                 <img src={m.img} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                 <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
                 <div className="absolute top-4 left-4 w-10 h-10 bg-neon/20 backdrop-blur-md rounded-xl flex items-center justify-center text-neon border border-neon/30">
                    {m.icon}
                 </div>
              </div>
              <div className="p-8">
                <span className="text-[10px] font-black text-neon uppercase tracking-[0.2em] mb-2 block opacity-70">Módulo {m.id}</span>
                <h3 className="text-xl font-bold text-white break-words whitespace-normal leading-tight mb-3 italic tracking-tight">{m.title}</h3>
                <p className="text-sm text-metallic whitespace-normal leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-black-pure to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-black-pure to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

const Authority = () => (
  <section className="py-24 bg-gradient-to-b from-black-pure to-night/30">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-neon/10 blur-[80px] rounded-full group-hover:bg-neon/20 transition-all" />
            <div className="relative z-10 w-full max-w-sm aspect-square rounded-[2rem] overflow-hidden border border-neon/20 p-2 bg-night/20 backdrop-blur-sm">
                <img 
                   src="https://lh3.googleusercontent.com/d/1WWuhz3FzpQEHpGECsJ0gKIO2syz4Ut1N" 
                   alt="Milton Tucunduva" 
                   className="w-full h-full object-cover rounded-[1.8rem] transition-all duration-700"
                />
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-sm font-bold text-white uppercase tracking-[0.3em] flex items-center">
            <span className="w-8 h-[1px] bg-neon mr-4"></span> A Autoridade
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-none">Milton Tucunduva</h3>
          <p className="text-metallic text-lg leading-relaxed max-w-2xl">
            Especialista em criação de projetos de música com IA, Milton Tucunduva vai muito além de apenas dar o passo a passo; ele faz o aluno aprender a ter autonomia e criar um PROJETO DE SUCESSO! Com faturamento alto em várias plataformas digitais no nicho de música, ele ensina exatamente o que aplica em seus projetos. Já ajudou milhares de alunos a saírem do completo zero para projetos profissionais, validados no mercado digital e faturando alto.
          </p>
          <div className="grid grid-cols-2 gap-8 py-8 border-y border-[#0A192F]">
             <div>
                <p className="text-4xl font-black text-white tracking-tighter">50K+</p>
                <p className="text-[10px] text-neon font-black uppercase tracking-widest mt-1">Faturamento Mensal</p>
             </div>
             <div>
                <p className="text-4xl font-black text-white tracking-tighter">1.5K+</p>
                <p className="text-[10px] text-neon font-black uppercase tracking-widest mt-1">Alunos Ativos</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="py-20 text-center">
    <div className="max-w-4xl mx-auto px-8">
      <div className="bg-night border border-[#0A192F] p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full md:w-auto">
          <div className="flex items-center space-x-2 border border-neon/20 p-4 rounded-xl">
            <ShieldCheck className="text-neon" size={24} />
            <div className="text-left leading-none">
              <p className="text-white font-black text-xs uppercase">7 DIAS</p>
              <p className="text-[8px] uppercase tracking-widest text-metallic">Garantia Total</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 border border-neon/20 p-4 rounded-xl">
            <Zap className="text-neon" size={24} />
            <div className="text-left leading-none">
              <p className="text-white font-black text-xs uppercase">ACESSO</p>
              <p className="text-[8px] uppercase tracking-widest text-metallic">Imediato</p>
            </div>
          </div>
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-black uppercase italic mb-3">Satisfação Garantida</h2>
          <p className="text-metallic leading-relaxed text-sm md:text-base">
            Entre no curso, assista as aulas, participe do grupo. Se em 7 dias você achar que o método não é para você, basta um clique para receber 100% do seu investimento de volta.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="pricing">
            <div className="max-w-7xl mx-auto px-8 text-center">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16">O Próximo Nível <br /> <span className="text-neon drop-shadow-[0_0_20px_rgba(165,242,255,0.4)]">Começa Aqui</span></h2>
                
                <div className="max-w-xl mx-auto bg-black-pure border-[1px] border-neon pb-12 rounded-[40px] relative glow-shadow overflow-hidden">
                    <div className="bg-neon text-black py-4 font-black text-sm uppercase tracking-[0.2em] mb-12">
                      Oferta por Tempo Limitado
                    </div>
                    
                    <div className="px-12">
                        <p className="text-metallic line-through text-lg opacity-50">De R$ 997,00</p>
                        <p className="text-[10px] text-neon font-black uppercase tracking-[0.3em] mt-4 mb-2">Por apenas</p>
                        <div className="flex items-center justify-center gap-1 font-display">
                            <span className="text-2xl mt-4 font-bold text-white">12x R$</span>
                            <span className="text-8xl font-black text-white tracking-tighter">40</span>
                            <span className="text-2xl mt-4 font-bold text-white">,34</span>
                        </div>
                        <p className="text-metallic mt-4 font-bold">ou R$ 390,00 à vista</p>

                        <div className="my-10 h-[1px] bg-[#0A192F] w-full" />

                        <ul className="text-left space-y-5 mb-12">
                            <li className="flex items-center gap-4">
                              <div className="w-5 h-5 rounded-full bg-neon/10 flex items-center justify-center border border-neon/30">
                                <CheckCircle size={12} className="text-neon" />
                              </div>
                              <span className="text-sm font-bold text-white/80 uppercase tracking-wide">Acesso Vitalício ao Método</span>
                            </li>
                            <li className="flex items-center gap-4">
                              <div className="w-5 h-5 rounded-full bg-neon/10 flex items-center justify-center border border-neon/30">
                                <CheckCircle size={12} className="text-neon" />
                              </div>
                              <span className="text-sm font-bold text-white/80 uppercase tracking-wide">10 Módulos Completos (IA + Técnica)</span>
                            </li>
                            <li className="flex items-center gap-4">
                              <div className="w-5 h-5 rounded-full bg-neon/10 flex items-center justify-center border border-neon/30">
                                <CheckCircle size={12} className="text-neon" />
                              </div>
                              <span className="text-sm font-bold text-white/80 uppercase tracking-wide">Grupo Exclusivo no WhatsApp</span>
                            </li>
                        </ul>

                        <motion.a 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://pay.kiwify.com.br/nIxnMML"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-neon text-black py-6 rounded-2xl font-black text-xl shadow-[0_10px_30px_rgba(165,242,255,0.3)] transition-all uppercase tracking-tighter"
                        >
                            Garantir Minha Vaga
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);
  const questions = [
    { q: "O curso serve para quem não sabe nada de produção?", a: "Sim! O método vai do absoluto zero até as técnicas mais avançadas de IA e distribuição." },
    { q: "Vou aprender a ganhar dinheiro de verdade?", a: "O foco principal é o mercado profissional. Te ensino a monetizar no YouTube, plataformas de streaming e serviços musicais." },
    { q: "Como funciona o suporte?", a: "Você terá acesso a um grupo exclusivo no WhatsApp diretamente com o Milton e outros alunos para tirar dúvidas em tempo real." },
    { q: "Qual o tempo de acesso?", a: "O acesso é vitalício. Você paga uma vez e tem acesso a todas as atualizações futuras sem custo adicional." },
    { q: "Preciso de um computador potente?", a: "Não. Muitas das ferramentas de IA que usamos rodam na nuvem, permitindo que você crie clipes e músicas mesmo com um setup básico." },
  ];

  return (
    <section className="py-20 bg-night/10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">Perguntas <span className="text-neon">Frequentes</span></h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="bg-night/50 border border-neon/10 rounded-2xl overflow-hidden transition-all">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neon/5 transition-colors"
              >
                <span className="font-bold text-lg">{item.q}</span>
                {active === i ? <ChevronUp size={20} className="text-neon" /> : <ChevronDown size={20} className="text-metallic" />}
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-metallic"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Reveal><SocialProof /></Reveal>
      <Reveal><PainSolution /></Reveal>
      <Reveal><MethodDescription /></Reveal>
      <ModulesCarousel />
      <Reveal><Authority /></Reveal>
      <Reveal><Guarantee /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><FAQ /></Reveal>
      
      <footer className="py-12 border-t border-neon/10 text-center opacity-50 text-xs">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <p>© 2026 Impulso Musical - Todos os direitos reservados.</p>
          </div>
      </footer>
    </div>
  );
}
