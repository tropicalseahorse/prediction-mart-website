import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { toast } from "sonner";

const PayoffCalculator = () => {
  const [price, setPrice] = useState("");
  const [investment, setInvestment] = useState("");
  const [side, setSide] = useState<"yes" | "no">("yes");
  const [results, setResults] = useState<{
    shares: number;
    payout: number;
    profit: number;
    roi: number;
    maxLoss: number;
    probability: number;
  } | null>(null);

  const calculate = () => {
    const priceNum = parseFloat(price);
    const investmentNum = parseFloat(investment);

    // Validation
    if (isNaN(priceNum) || priceNum < 0.01 || priceNum > 0.99) {
      toast.error("Price must be between $0.01 and $0.99");
      return;
    }

    if (isNaN(investmentNum) || investmentNum < 1) {
      toast.error("Investment must be at least $1");
      return;
    }

    // Calculations
    const shares = investmentNum / priceNum;
    const payout = shares * 1; // $1 per share
    const profit = payout - investmentNum;
    const roi = (profit / investmentNum) * 100;
    const maxLoss = investmentNum;
    const probability = side === "yes" ? priceNum * 100 : (1 - priceNum) * 100;

    setResults({
      shares: Math.round(shares * 100) / 100,
      payout: Math.round(payout * 100) / 100,
      profit: Math.round(profit * 100) / 100,
      roi: Math.round(roi * 10) / 10,
      maxLoss: Math.round(maxLoss * 100) / 100,
      probability: Math.round(probability * 10) / 10
    });

    toast.success("Calculation complete!");
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle>Payoff Calculator</CardTitle>
            <CardDescription>Calculate your potential returns</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="price">Price per share ($)</Label>
            <Input
              id="price"
              type="number"
              min="0.01"
              max="0.99"
              step="0.01"
              placeholder="0.50"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">Between $0.01 and $0.99</p>
          </div>

          <div>
            <Label htmlFor="investment">Investment amount ($)</Label>
            <Input
              id="investment"
              type="number"
              min="1"
              step="1"
              placeholder="100"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">Minimum $1</p>
          </div>

          <div>
            <Label htmlFor="side">Outcome side</Label>
            <Select value={side} onValueChange={(value: "yes" | "no") => setSide(value)}>
              <SelectTrigger id="side" className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes (event happens)</SelectItem>
                <SelectItem value="no">No (event doesn't happen)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculate} className="w-full" size="lg">
            Calculate Payoff
          </Button>
        </div>

        {results && (
          <div className="space-y-3 pt-6 border-t">
            <h4 className="font-semibold text-lg mb-4">Results</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Shares purchased</div>
                <div className="text-2xl font-bold">{results.shares}</div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Implied probability</div>
                <div className="text-2xl font-bold">{results.probability}%</div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Payout if correct</div>
                <div className="text-2xl font-bold text-green-600">${results.payout}</div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Profit if correct</div>
                <div className="text-2xl font-bold text-green-600">${results.profit}</div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">ROI if correct</div>
                <div className="text-2xl font-bold text-blue-600">{results.roi}%</div>
              </div>

              <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Max loss if wrong</div>
                <div className="text-2xl font-bold text-red-600">${results.maxLoss}</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PayoffCalculator;
