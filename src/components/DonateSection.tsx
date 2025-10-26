import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandHeart, Copy, Share2 } from "lucide-react";
import { toast } from "sonner";

const DonateSection = () => {
  const pixKey = "SEU_PIX_AQUI"; // Substituir pela chave Pix real
  const vaquinhaUrl = "https://www.vakinha.com.br/beny"; // Substituir pela URL real

  const copyPix = () => {
    navigator.clipboard.writeText(pixKey);
    toast.success("Chave Pix copiada!", {
      description: "Cole no app do seu banco para doar"
    });
  };

  const shareWebsite = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ajude o pequeno Beny",
          text: "Conheça a história de Beny e ajude na luta contra a Síndrome de Bohring-Opitz",
          url: window.location.href,
        });
        toast.success("Obrigado por compartilhar! 💙");
      } catch (err) {
        console.log("Erro ao compartilhar:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copiado!", {
        description: "Compartilhe com seus amigos"
      });
    }
  };

  return (
    <section id="como-ajudar" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <HandHeart className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Como Ajudar
            </h2>
          </div>

          <Card className="p-8 md:p-12 shadow-glow-strong border-2 border-primary/30 bg-card">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-card-foreground text-center">
                A família de Beny enfrenta despesas médicas constantes e inesperadas.<br />
                <strong className="text-xl text-primary">Sua contribuição pode fazer uma diferença enorme na continuidade do tratamento dele.</strong>
              </p>

              <div className="bg-primary/10 p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-bold text-primary flex items-center justify-center">
                  🩵 Doe qualquer valor:
                </h3>

                <div className="space-y-4">
                  <div className="bg-card p-6 rounded-xl border border-primary/20">
                    <h4 className="font-semibold text-lg mb-3 text-card-foreground">Via Pix:</h4>
                    <div className="flex flex-col sm:flex-row gap-3 items-center">
                      <code className="bg-muted px-4 py-3 rounded-lg flex-1 text-center text-sm break-all">
                        {pixKey}
                      </code>
                      <Button 
                        onClick={copyPix}
                        variant="secondary"
                        className="w-full sm:w-auto"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar Pix
                      </Button>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-xl border border-primary/20">
                    <h4 className="font-semibold text-lg mb-3 text-card-foreground">Vaquinha online:</h4>
                    <Button 
                      onClick={() => window.open(vaquinhaUrl, '_blank')}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      size="lg"
                    >
                      Acessar Vaquinha
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-accent/20 p-6 rounded-xl border-l-4 border-accent">
                <p className="text-center text-lg leading-relaxed">
                  Se não puder doar agora, <strong>compartilhe o site</strong> nas suas redes sociais — isso já é uma forma poderosa de ajudar.
                </p>
                <Button 
                  onClick={shareWebsite}
                  variant="outline"
                  className="w-full mt-4"
                  size="lg"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Compartilhar Site
                </Button>
              </div>

              <p className="text-xl text-center text-primary font-semibold pt-4">
                Toda ajuda, grande ou pequena, é um gesto de amor que se transforma em esperança para o Beny e sua família. 💫
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
