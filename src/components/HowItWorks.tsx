import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, TrendingUp, DollarSign, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Event Definition",
      description: "Markets are based on verifiable questions with clear outcomes (Yes/No)",
      examples: [
        "Apple releases AI-powered iPhone by June 2025?",
        "Global temperatures exceed 1.5°C above pre-industrial in 2024?",
        "SpaceX Starship lands on Mars by 2030?"
      ]
    },
    {
      icon: TrendingUp,
      title: "Trading Contracts",
      description: "Each outcome has a contract that pays based on the result",
      examples: [
        '"Yes" contract pays $1 if event happens (else $0)',
        '"No" contract pays $1 if event doesn\'t happen (else $0)',
        "Buy and sell contracts at market prices before resolution"
      ]
    },
    {
      icon: DollarSign,
      title: "Price = Probability",
      description: "Market prices reflect the crowd's collective probability estimate",
      examples: [
        "$0.85 price ≈ 85% chance of occurring",
        "$0.05 price ≈ 5% chance of occurring",
        "Prices update in real-time as new information emerges"
      ]
    },
    {
      icon: CheckCircle,
      title: "Settlement",
      description: "When the event resolves, earnings are calculated automatically",
      examples: [
        "Earnings = (Payout − Purchase Price) × Shares",
        "Winners receive $1 per share",
        "Losers receive $0 per share"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">How Prediction Markets Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A step-by-step guide to understanding prediction market mechanics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-secondary mt-0.5">•</span>
                        <span>{example}</span>
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

export default HowItWorks;
