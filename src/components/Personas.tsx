import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Building2 } from "lucide-react";

const Personas = () => {
  const personas = [
    {
      icon: Users,
      title: "Quant-Savvy Traders",
      description: "Retail investors and traders across India & Asia",
      features: [
        "Odds-driven decision making",
        "Diversified prediction portfolios",
        "Real-time market signals",
        "Community-driven insights"
      ]
    },
    {
      icon: Briefcase,
      title: "Research & Policy Teams",
      description: "Universities, think tanks, and corporate research divisions",
      features: [
        "Forecast aggregation tools",
        "Quantified uncertainty metrics",
        "Academic research applications",
        "Policy scenario testing"
      ]
    },
    {
      icon: Building2,
      title: "Enterprises & Hedge Desks",
      description: "Corporates and financial institutions managing event risk",
      features: [
        "Event risk hedging",
        "Market sentiment analysis",
        "Strategic planning inputs",
        "Competitive intelligence"
      ]
    }
  ];

  return (
    <section id="personas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Who Uses PredictionMart?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diverse users leveraging prediction markets for insights and opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center">{persona.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-6">{persona.description}</p>
                  <ul className="space-y-2">
                    {persona.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Personas;
