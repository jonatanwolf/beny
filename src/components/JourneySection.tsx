import { Card } from "@/components/ui/card";
import { HeartPulse } from "lucide-react";

const JourneySection = () => {
  return (
    <section id="luta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <HeartPulse className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              A Luta do Dia a Dia
            </h2>
          </div>

          <Card className="p-8 md:p-12 shadow-glow border-2 border-primary/20 bg-card">
            <div className="space-y-6 text-lg leading-relaxed text-card-foreground">
              <p>
                A vida do Beny tem sido marcada por <strong>idas e vindas ao hospital</strong>, noites sem sono e desafios que nenhuma criança deveria enfrentar.
              </p>
              
              <p>
                Cada internação traz novos custos: <strong>remédios, exames, transporte, alimentação</strong>, além da ausência de trabalho da mãe, que dedica todo o tempo aos cuidados com o filho.
              </p>
              
              <p>
                Mesmo assim, o Beny continua firme — <strong>sorrindo, brincando quando pode</strong>, e mostrando ao mundo o que é ser um verdadeiro guerreiro.
              </p>
              
              <div className="bg-accent/30 p-6 rounded-xl mt-8 border-l-4 border-accent">
                <p className="text-accent-foreground font-medium">
                  💫 Esta seção será atualizada com notícias e relatos sobre sua evolução e os desafios enfrentados pela família.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
