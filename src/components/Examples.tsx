import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ArrowRightLeft } from "lucide-react";

const Examples = () => {
  const examples = [
    {
      icon: TrendingUp,
      title: 'Buy "Yes" at $0.22',
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      scenario: [
        "Investment: $110",
        "Shares purchased: 500 shares ($110 ÷ $0.22)",
        "If event occurs: $500 payout (500 × $1)",
        "Profit: $390 ($500 - $110)",
        "If event doesn't occur: Lose $110"
      ]
    },
    {
      icon: TrendingDown,
      title: 'Buy "No" at $0.78',
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      scenario: [
        "Investment: $156",
        "Shares purchased: 200 shares ($156 ÷ $0.78)",
        "If event doesn't occur: $200 payout (200 × $1)",
        "Profit: $44 ($200 - $156)",
        "If event occurs: Lose $156"
      ]
    },
    {
      icon: ArrowRightLeft,
      title: "Trade the move",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      scenario: [
        "Buy at $0.40: 1,000 shares cost $400",
        "Sell at $0.55: 1,000 shares = $550",
        "Profit: $150 (before settlement)",
        "No need to wait for event resolution",
        "Lock in gains or cut losses anytime"
      ]
    }
  ];

  return (
    <section id="examples" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Example Transactions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real scenarios showing how profits and losses work in prediction markets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className={example.bgColor}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`h-8 w-8 ${example.color}`} />
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {example.scenario.map((line, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">•</span>
                        <span className={i === 3 ? "font-semibold text-foreground" : "text-muted-foreground"}>
                          {line}
                        </span>
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

export default Examples;
