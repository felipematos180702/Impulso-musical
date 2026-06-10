/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { 
  Play, 
  CheckCircle, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft,
  ChevronRight,
  Star,
  Music,
  Zap,
  TrendingUp,
  Video,
  Globe,
  Lock,
  Gift,
  Plus,
  X,
  Image as ImageIcon
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

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const savedTime = sessionStorage.getItem("countdown_timer_15m");
    if (savedTime) {
      const remaining = parseInt(savedTime, 10);
      if (remaining > 0) {
        setTimeLeft(remaining);
      }
    } else {
      sessionStorage.setItem("countdown_timer_15m", (15 * 60).toString());
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        sessionStorage.setItem("countdown_timer_15m", next.toString());
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black-pure/95 border-b border-red-500/30 backdrop-blur-md py-3.5 px-6 sm:px-12 md:px-16 lg:px-20 shadow-[0_4px_30px_rgba(239,68,68,0.15)] flex flex-col md:flex-row items-center justify-between gap-3 text-center relative">
      <div className="flex items-center gap-2 text-white font-black uppercase text-xs tracking-wider">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
        </span>
        <span>Atenção: Acesso Promocional Expirando</span>
      </div>
      
      <p className="text-[11px] sm:text-xs text-metallic font-semibold max-w-xl hidden sm:block md:absolute md:left-1/2 md:-translate-x-1/2">
        Últimas vagas com desconto — confirme antes do tempo acabar.
      </p>

      <div className="flex items-center gap-2 bg-red-950/40 border border-red-500/40 px-3 py-1.5 rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.1)] ml-auto md:ml-0">
        <span className="text-[9px] font-black uppercase tracking-widest text-red-400">Tempo restante:</span>
        <span className="font-mono text-sm font-black text-red-500">{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

const Hero = () => {
  const [showMutePrompt, setShowMutePrompt] = useState(true);

  // High-conversion trick: blur listener to auto-detect when they click the iframe
  useEffect(() => {
    const handleBlur = () => {
      if (document.activeElement?.tagName === "IFRAME") {
        setShowMutePrompt(false);
      }
    };
    window.addEventListener("blur", handleBlur);
    
    // Periodically checks if iframe is focused in case of slow events
    const interval = setInterval(() => {
      if (document.activeElement?.tagName === "IFRAME") {
        setShowMutePrompt(false);
      }
    }, 1000);

    return () => {
      window.removeEventListener("blur", handleBlur);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#0A192F]">
      <div className="max-w-5xl mx-auto px-8 relative z-10 text-center flex flex-col items-center space-y-12">
        
        {/* Header content stacked & centered */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-6 max-w-3xl"
        >
          <span className="px-3 py-1 bg-night text-neon text-[10px] font-bold uppercase tracking-widest border border-neon/30 rounded-full inline-block">
            Validado no YouTube • 50k/Mês Orgânico
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-[1.2] uppercase tracking-tighter">
            O JEITO CERTO PARA <span className="text-neon drop-shadow-[0_0_15px_rgba(165,242,255,0.6)]">Viver de Música</span> <br />
            USANDO IA NAS PLATAFORMAS DIGITAIS
          </h1>
        </motion.div>

        {/* Video VSL wider and below the description */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-video w-full max-w-4xl bg-black rounded-2xl border border-neon/20 overflow-hidden group shadow-[0_0_50px_rgba(165,242,255,0.25)]"
        >
          {/* Always load the iframe directly so the video's first frame is loaded, bypassing any initial black screen */}
          <div className="absolute inset-0 overflow-hidden bg-black pointer-events-auto">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://drive.google.com/file/d/1_c35SXY4zowZBHM1UOsziKU0LPQi0qMa/preview" 
              title="Apresentação do Método" 
              className="absolute w-full h-[132%] -top-[16%] left-0 border-0 pointer-events-auto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* Absolute bottom mask to block and hide Google Drive controls bar completely */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-black z-10 pointer-events-none cursor-default border-t border-white/[0.02]" />
          </div>

          {/* User-friendly unmute instructions overlay banner (pointer-events-none so click passes through to Google's play button) */}
          <AnimatePresence>
            {showMutePrompt && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 pointer-events-none z-20 transition-all duration-500"
              >
                {/* Visual pulse indicator to click below or above the native Play button */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="px-6 py-3 bg-night text-white font-black rounded-full border border-neon/50 text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 select-none"
                >
                  <span>Clique abaixo para dar Play com Som</span>
                  <span className="animate-bounce">🔊</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#222] z-10">
            <div className="h-full w-1/3 bg-neon shadow-[0_0_10px_#A5F2FF]"></div>
          </div>
        </motion.div>

        {/* Description text placed below video and before CTA button */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-base md:text-lg leading-relaxed text-metallic max-w-2xl mx-auto"
        >
          Saia do absoluto zero ou do estagnado e alcance resultados profissionais com o passo a passo de quem já fatura no mercado.
        </motion.p>

        {/* Call to Action and active students badge below video */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-6 w-full max-w-md"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#pricing"
            className="w-full bg-neon text-black font-black py-5 px-12 rounded-lg shadow-[0_0_25px_rgba(165,242,255,0.4)] hover:shadow-[0_0_40px_rgba(165,242,255,0.6)] transition-all uppercase tracking-tighter text-center text-lg inline-block"
          >
            Quero meu acesso agora
          </motion.a>
          
          <div className="flex -space-x-3 items-center justify-center">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-night flex items-center justify-center">
                <Users size={20} className="text-neon/50" />
              </div>
            ))}
            <div className="ml-6 flex flex-col items-start leading-none text-left">
              <span className="text-white font-black text-sm">+1.500 Alunos</span>
              <span className="text-[10px] uppercase text-metallic tracking-widest mt-1">Conteúdo validado</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const SocialProof = () => {
  const [selectedImgId, setSelectedImgId] = useState<string | null>(null);

  const testimonials = [
    {
      name: "Kátia R.",
      loc: "Curitiba, PR",
      text: "Gente, pensem na minha alegria hoje! Obrigado, professor! Foi de primeira, sem precisar de vídeo de contestação. Foram 14 vídeos postados, dia sim, dia não, direcionados para os Estados Unidos! Glória a Deus! Já estou com outro canal em análise no mesmo formato, só no aguardo do resultado.",
      imgId: "1MpMuHFNOB12HTWNtPTBNiUj2LkoLtgi_"
    },
    {
      name: "Daniel S.",
      loc: "Ribeirão Preto, SP",
      text: "Olá, bom dia! Gostaria de agradecer ao Milton Tucunduva por todos os ensinamentos e incentivos. Acabo de monetizar meu canal com apenas 13 vídeos! Quero agradecer também a todos do grupo que estão sempre disponíveis para ajudar e tirar dúvidas, isso é fundamental. Essa troca de conhecimento faz toda a diferença e mostra que juntos evoluímos muito mais. Gratidão a todos!",
      imgId: "1Na5yEMng1LuVX-7tBapjU_I7XaUjOLqX"
    },
    {
      name: "Karina S.",
      loc: "Blumenau, SC",
      text: "Obrigada, professor Milton! Este já é o terceiro canal que consigo monetizar desde que me tornei sua aluna, e este é mais um canal focado no público alemão. Que Deus te abençoe por compartilhar tanto conhecimento!",
      imgId: "1QVXp0rPYMp9B64nLN7uO1nyoL4dNlX4G"
    },
    {
      name: "Beatriz S.",
      loc: "Curitiba, PR",
      text: "Consegui meu primeiro canal monetizado! 🥳 Muito obrigada, Milton Tucunduva, pelos ensinamentos. Valeu muito a pena! 🤑",
      imgId: "1kXBLbUcO2Xp-eSwhod-Lwkby8_PjF03I"
    },
    {
      name: "Felipe S.",
      loc: "Curitiba, PR",
      text: "Povo... monetizei meu primeiro canal de música! Confesso que era um nicho ao qual eu não dava tanta importância, até parar para assistir aos vídeos do Milton e resolver testar. Iniciei em março... Já criei dois canais de cara e, por incrível que pareça, os dois já bateram as métricas! Esse primeiro foi aprovado hoje e o outro já está em análise.",
      imgId: "1pNJURk77q26NxH3vfzgx8IAXpk-GYg5e"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-night/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-neon font-black tracking-[0.25em] text-xs sm:text-sm mb-4">CONTEÚDO VALIDADO POR RESULTADOS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black leading-tight uppercase tracking-tighter">
            Quem aplica, <span className="text-neon drop-shadow-[0_0_15px_rgba(165,242,255,0.4)]">Monetiza!</span>
          </h2>
          <p className="text-metallic mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Veja depoimentos reais direto do nosso grupo de alunos no WhatsApp mostrando seus canais monetizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImgId(t.imgId)}
              className="bg-night/50 rounded-[32px] border border-neon/10 hover:border-neon/30 transition-all overflow-hidden flex flex-col cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(165,242,255,0.15)] relative h-full"
            >
              {/* Image Container with aspect ratio and absolute centering */}
              <div className="relative aspect-[3/4] w-full overflow-hidden flex items-start justify-center bg-black/40">
                <img 
                  src={`https://lh3.googleusercontent.com/d/${t.imgId}`} 
                  alt={`Depoimento de ${t.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Accent Inner Glow */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-[32px]" />
                
                {/* Hover overlay with conversion-focused CTA */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-neon text-black flex items-center justify-center shadow-[0_0_20px_#A5F2FF] transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Plus size={24} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-neon">Clique para ampliar</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Screenshots */}
      <AnimatePresence>
        {selectedImgId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImgId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative max-w-xl w-full bg-night/80 border border-neon/30 p-2 sm:p-4 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(165,242,255,0.2)] max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImgId(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-neon hover:text-black transition-colors z-30 border border-neon/20 cursor-pointer"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              {/* Screenshot Content */}
              <div className="w-full flex-1 overflow-y-auto rounded-2xl flex items-center justify-center">
                <img
                  src={`https://lh3.googleusercontent.com/d/${selectedImgId}`}
                  alt="Student Testimonial Print"
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                />
              </div>

              <div className="text-center pt-4 pb-2 border-t border-neon/10 mt-4 text-metallic text-[11px] font-bold uppercase tracking-widest">
                Print oficial extraído do grupo privado de alunos no WhatsApp • 100% Real
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop" 
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

  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<any>(null);

  // Auto-scrolling infinite linear marquee
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let lastTime = performance.now();
    const speed = 40; // pixels per second

    const animate = (time: number) => {
      if (container) {
        const delta = (time - lastTime) / 1000;
        
        if (!isPaused) {
          container.scrollLeft += speed * delta;
          
          const half = container.scrollWidth / 2;
          if (container.scrollLeft >= half) {
            container.scrollLeft -= half;
          }
        }
      }
      lastTime = time;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    
    const half = container.scrollWidth / 2;
    if (container.scrollLeft >= half) {
      container.scrollLeft -= half;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += half;
    }
  };

  const pauseAutoPlay = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const handlePrev = () => {
    const container = containerRef.current;
    if (!container) return;
    pauseAutoPlay();
    container.scrollBy({ left: -344, behavior: "smooth" });
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;
    pauseAutoPlay();
    container.scrollBy({ left: 344, behavior: "smooth" });
  };

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <section id="modules" className="py-20 overflow-hidden bg-black-pure scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Conteúdo do <span className="text-neon">treinamento</span></h2>
          <p className="text-metallic mt-4 text-lg">10 Módulos pensados para sua evolução acelerada no mercado digital.</p>
        </div>
        
        {/* Manual Arrow Buttons for Desktop */}
        <div className="hidden md:flex gap-4 mt-6 md:mt-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-night border border-neon/30 text-neon hover:text-white hover:border-neon flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(165,242,255,0.1)] hover:shadow-[0_0_20px_rgba(165,242,255,0.4)] cursor-pointer"
            aria-label="Módulo anterior"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-night border border-neon/30 text-neon hover:text-white hover:border-neon flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(165,242,255,0.1)] hover:shadow-[0_0_20px_rgba(165,242,255,0.4)] cursor-pointer"
            aria-label="Próximo módulo"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>

      <div 
        className="relative group/carousel px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow Trigger Overlay for Mobile */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 md:hidden">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-black/75 border border-neon/30 text-neon flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_rgba(165,242,255,0.2)]"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        
        {/* Right Arrow Trigger Overlay for Mobile */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 md:hidden">
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-black/75 border border-neon/30 text-neon flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_rgba(165,242,255,0.2)]"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto select-none py-10 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {[...modules, ...modules].map((m, i) => (
            <div 
              key={i}
              className="flex-shrink-0 w-[320px] bg-night rounded-[32px] overflow-hidden border border-neon/10 glow-border hover:border-neon/40 hover:glow-shadow transition-all group"
            >
              <div className="h-48 relative overflow-hidden">
                 <img src={m.img} alt={m.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
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
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-black-pure to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-black-pure to-transparent z-10 pointer-events-none" />
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
            <span className="w-8 h-[1px] bg-neon mr-4"></span> Conheça seu professor
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-none">Milton Tucunduva</h3>
          <p className="text-metallic text-lg leading-relaxed max-w-2xl">
            Como especialista em criação de projetos de música com IA, eu vou muito além de apenas te dar o passo a passo; eu te faço aprender a ter autonomia e criar um PROJETO DE SUCESSO! Com faturamento alto em várias plataformas digitais no nicho de música, eu te ensino exatamente o que aplico em meus projetos. Já ajudei milhares de alunos a saírem do completo zero para construírem projetos profissionais, validados no mercado digital e faturando alto.
          </p>
          <div className="grid grid-cols-2 gap-8 py-8 border-y border-[#0A192F]">
             <div>
                <p className="text-2xl sm:text-3xl font-black text-white tracking-tighter">+ R$ 50.000,00</p>
                <p className="text-[10px] text-neon font-black uppercase tracking-widest mt-1">FATURAMENTO MENSAL</p>
             </div>
             <div>
                <p className="text-2xl sm:text-3xl font-black text-white tracking-tighter">+ 1.500</p>
                <p className="text-[10px] text-neon font-black uppercase tracking-widest mt-1">ALUNOS ATIVOS</p>
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
    { q: "Como funciona o suporte?", a: "Você terá acesso a um grupo exclusivo no WhatsApp diretamente comigo e outros alunos para tirar dúvidas em tempo real." },
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
      <CountdownBanner />
      {/* 1 - Seção hero */}
      <Hero />
      
      {/* 2 - cansado de ser apenas mais... */}
      <Reveal><PainSolution /></Reveal>
      
      {/* 3 - o que você vai aprender */}
      <Reveal><MethodDescription /></Reveal>
      
      {/* 4 - conteúdo do treinamento */}
      <ModulesCarousel />
      
      {/* Depoimentos */}
      <Reveal><SocialProof /></Reveal>
      
      {/* 5 - seção falando sobre o produtor */}
      <Reveal><Authority /></Reveal>
      
      {/* 6 - 'o próximo nivel começa aqui" */}
      <Reveal><Pricing /></Reveal>
      <Reveal><Guarantee /></Reveal>
      
      {/* 7 - FAQ */}
      <Reveal><FAQ /></Reveal>
      
      <footer className="py-12 border-t border-neon/10 text-center opacity-50 text-xs">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <p>© 2026 Impulso Musical - Todos os direitos reservados.</p>
          </div>
      </footer>
    </div>
  );
}
