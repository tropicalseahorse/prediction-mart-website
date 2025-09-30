import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, TrendingUp, RefreshCw, Shield } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      icon: Shield,
      question: "Is this gambling?",
      answer: "Prediction markets are based on factual outcomes with verifiable resolutions, not games of chance. We operate compliantly within our jurisdiction's regulatory framework, focusing on information aggregation and hedging rather than entertainment betting."
    },
    {
      icon: TrendingUp,
      question: "What moves prices?",
      answer: "Prices update based on new information: research reports, corporate filings, expert analyses, polls, and breaking news. As traders digest information and adjust their positions, market prices shift to reflect the collective probability estimate."
    },
    {
      icon: RefreshCw,
      question: "Can I sell before resolution?",
      answer: "Yes! You can exit positions anytime before the market closes and event resolves. This allows you to lock in gains if prices move in your favor, or cut losses if the probability shifts against you."
    },
    {
      icon: HelpCircle,
      question: "How are outcomes resolved?",
      answer: "Each market has a detailed rulebook specifying data sources, resolution criteria, and deadlines. An independent resolution council evaluates outcomes based on these rules. Users can appeal resolutions through a transparent process."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about prediction markets and PredictionMart
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto bg-muted/50 border-muted">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              <strong>Compliance Note:</strong> This page is for product education and does not constitute 
              investment advice or legal guidance. Availability of services and features varies by jurisdiction. 
              PredictionMart operates in compliance with applicable regulations in our launch region.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
