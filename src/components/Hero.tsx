import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            Launching from Dubai / Singapore • Serving Asia with focus on India
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Trade what happens{" "}
            <span className="gradient-text">next.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            PredictionMart turns questions about tech, trade, economics, and geopolitics into tradeable markets. 
            Prices reflect the crowd's probability—and pay $1 per share if you're right.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => scrollToSection('how-it-works')}
            >
              How prediction markets work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
              onClick={() => scrollToSection('widgets')}
            >
              Try the payoff calculator
            </Button>
          </div>

          {/* KPI Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <DollarSign className="h-10 w-10 text-primary mb-3 mx-auto" />
              <div className="text-3xl font-bold text-primary mb-2">$1</div>
              <div className="text-sm text-muted-foreground">Payout per correct share</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <TrendingUp className="h-10 w-10 text-secondary mb-3 mx-auto" />
              <div className="text-3xl font-bold text-secondary mb-2">0–100%</div>
              <div className="text-sm text-muted-foreground">Price = probability</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <Clock className="h-10 w-10 text-primary mb-3 mx-auto" />
              <div className="text-3xl font-bold text-primary mb-2">Minutes</div>
              <div className="text-sm text-muted-foreground">To get started</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
