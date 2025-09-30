import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">How Prediction Markets Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to understand how prediction markets aggregate collective intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <Card className="glass-card shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 text-primary font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  1
                </div>
                <CardTitle>Event Definition</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                An event with uncertain outcomes is defined. Each outcome gets a contract (often binary: Yes/No).
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>"Will Kamala Harris win the 2024 U.S. Presidential Election?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>"Will Apple release an AI-powered iPhone by June 2025?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>"Will global temperatures exceed 1.5°C above pre-industrial levels in 2024?"</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="glass-card shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 text-primary font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  2
                </div>
                <CardTitle>Trading Contracts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Participants buy or sell shares tied to outcomes:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>A "Yes" share pays out $1 if the event happens, $0 if not.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>A "No" share pays $1 if it doesn't happen, $0 if it does.</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Prices range from $0.00 to $1.00. This is interpreted as a probability.
              </p>
              <p className="text-sm text-muted-foreground mt-3 italic">
                For example, if "Will SpaceX land Starship on Mars by 2030?" is trading at $0.22 for "Yes", the market believes there's a 22% chance it will happen.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="glass-card shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 text-primary font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  3
                </div>
                <CardTitle>Price = Probability</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Market prices reflect aggregated beliefs.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>A price of $0.85 means there's an 85% chance the event will occur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>A price of $0.05 suggests a 5% chance, meaning the market thinks it's very unlikely.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>This is similar to how stock prices reflect collective expectations about a company's value.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="glass-card shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 text-primary font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  4
                </div>
                <CardTitle>Settlement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                After the event occurs (or deadline passes), contracts pay out.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>"Yes" holders get $1 per share if the outcome is true.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>"No" holders get $1 per share if the outcome is false.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>All other contracts expire worthless.</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 font-medium">
                Profits/losses are calculated as follows: (Payout - Purchase Price) multiplied by the number of shares.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
