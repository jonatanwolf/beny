import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-8 mt-20 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Heart className="w-5 h-5 fill-current" />
            <p className="font-semibold text-lg">Ajude o Beny</p>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Site criado com amor para apoiar Antônio Benício em sua luta contra a Síndrome de Bohring-Opitz (BOS).
            Toda doação e compartilhamento são gestos de esperança.
          </p>
          
          <p className="text-xs text-muted-foreground pt-4">
            © {new Date().getFullYear()} Família do Beny. Feito com 💙 para espalhar solidariedade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
