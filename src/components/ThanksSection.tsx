import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const ThanksSection = () => {
  return (
    <section id="agradecimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Agradecimentos
            </h2>
          </div>

          <Card className="p-8 md:p-12 shadow-glow border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10">
            <div className="space-y-6 text-lg leading-relaxed text-center text-card-foreground">
              <p className="text-xl">
                A cada pessoa que doa, compartilha ou simplesmente envia uma mensagem de carinho:
              </p>
              
              <p className="text-3xl font-bold text-primary">
                Muito obrigado. 💙
              </p>
              
              <p className="text-xl">
                Vocês fazem parte dessa <strong>corrente do bem</strong> que nos dá força pra continuar.
              </p>
              
              <p className="text-xl">
                O Beny é um <strong>milagre diário</strong>, e cada gesto de solidariedade mostra que a esperança é o que nos une.
              </p>
              
              <div className="pt-8 text-2xl font-semibold text-primary">
                <p>Com amor,</p>
                <p>Família do Beny 💙</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThanksSection;
