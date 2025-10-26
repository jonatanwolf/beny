import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingDonateButton = () => {
  const scrollToSection = () => {
    const section = document.getElementById("como-ajudar");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToSection}
      size="lg"
      className="fixed bottom-6 right-6 z-50 shadow-glow-strong animate-pulse-soft bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-6 flex items-center gap-2"
    >
      <Heart className="w-5 h-5 fill-current" />
      <span className="font-semibold">Quero Ajudar o Beny</span>
    </Button>
  );
};

export default FloatingDonateButton;
