import { Card } from "@/components/ui/card";
import { Baby } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <Baby className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Sobre o Beny
            </h2>
          </div>

          <Card className="p-8 md:p-12 shadow-glow border-2 border-primary/20 bg-card/80 backdrop-blur">
            <div className="space-y-6 text-lg leading-relaxed text-card-foreground">
              <p>
                Beny nasceu trazendo consigo uma força enorme. Logo nos primeiros meses de vida, sua família descobriu o diagnóstico: <strong>Síndrome de Bohring-Opitz (BOS)</strong>, uma condição genética extremamente rara que afeta o desenvolvimento físico e neurológico.
              </p>
              
              <p>
                Desde então, ele enfrenta uma rotina intensa de internações, exames e tratamentos. Mesmo diante das dificuldades, Beny é puro amor, e sua presença ilumina todos ao seu redor.
              </p>
              
              <p>
                Sua mãe, uma mulher de fé e coragem, e seu pai, que trabalha incansavelmente, fazem tudo o que podem — mas as despesas são muitas e constantes.
              </p>
              
              <p className="text-xl font-semibold text-primary pt-4">
                Este espaço é um convite para unir corações e ajudar o Beny a continuar lutando.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
