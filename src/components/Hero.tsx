import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroBackground from "@/assets/beny-fb.jpg";

const Hero = () => {
  const scrollToDonate = () => {
    const section = document.getElementById("como-ajudar");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center bg-hero-gradient overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-background/95" />
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0px 0px 20px rgba(0, 0, 0, 0.5)'}}>
          Ajude o pequeno Beny<br />em sua luta pela vida 💙
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          <p className="text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-xl" style={{textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8), 0px 0px 10px rgba(0, 0, 0, 0.4)'}}>
            Antônio Benício, carinhosamente chamado de <strong>Beny</strong>, tem apenas <strong>1 aninho</strong> e enfrenta uma condição genética muito rara: a <strong>Síndrome de Bohring-Opitz (BOS)</strong>.
          </p>
          <p className="text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-xl" style={{textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8), 0px 0px 10px rgba(0, 0, 0, 0.4)'}}>
            Desde o nascimento, ele tem passado por diversas internações e tratamentos intensivos. Mesmo com tantos desafios, o Beny é um verdadeiro guerreiro — sempre lutando com um sorriso no rosto.
          </p>
          <p className="text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-xl" style={{textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8), 0px 0px 10px rgba(0, 0, 0, 0.4)'}}>
            Este site foi criado para compartilhar sua história e mobilizar ajuda financeira, pois os custos com internações, remédios e terapias são muito altos e recorrentes.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-accent-foreground bg-accent/90 inline-block px-6 py-3 rounded-2xl mt-6 shadow-glow">
            Cada gesto de apoio faz diferença. 💖
          </p>
        </div>

        <Button 
          onClick={scrollToDonate}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow-strong text-xl px-8 py-6 rounded-full font-semibold transition-transform hover:scale-105"
        >
          <Heart className="mr-2 w-6 h-6 fill-current" />
          Quero Ajudar o Beny
        </Button>
      </div>
    </section>
  );
};

export default Hero;
