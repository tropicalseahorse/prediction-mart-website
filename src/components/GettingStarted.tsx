import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, CreditCard, ShoppingCart, Banknote } from "lucide-react";

const GettingStarted = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign up",
      description: "Complete KYC verification and choose your base currency (USD/INR/SGD/AED*)"
    },
    {
      icon: CreditCard,
      title: "Deposit funds",
      description: "Add funds via local payment rails; balance converts to market credits"
    },
    {
      icon: ShoppingCart,
      title: "Buy shares",
      description: 'Trade "Yes" or "No" contracts based on current price and probability'
    },
    {
      icon: Banknote,
      title: "Settle & withdraw",
      description: "Winning shares pay $1 each; withdraw earnings according to platform policy"
    }
  ];

  return (
    <section id="get-started" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Getting Started</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to start trading prediction markets
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative shadow-lg hover:shadow-xl transition-all group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {index + 1}
                </div>
                <CardContent className="pt-8 text-center">
                  <div className="bg-secondary/10 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8 max-w-3xl mx-auto">
          * Currencies and payment methods depend on launch hub and local regulations. 
          All market contracts settle in USD equivalent.
        </p>
      </div>
    </section>
  );
};

export default GettingStarted;
