import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPulse, Instagram, Video } from "lucide-react";

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
                <p className="text-accent-foreground font-medium mb-6">
                  💫 Acompanhe a jornada do Beny nas redes sociais da família:
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => window.open('https://www.instagram.com/camilawpimenta/', '_blank')}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Seguir no Instagram
                  </Button>
                  
                  <Button
                    onClick={() => window.open('https://www.tiktok.com/@beniciopimenta2024', '_blank')}
                    className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Video className="w-5 h-5 mr-2" />
                    Seguir no TikTok
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
