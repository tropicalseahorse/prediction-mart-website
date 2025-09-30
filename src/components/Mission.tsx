import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Award } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            PredictionMart's mission is to <span className="font-semibold text-foreground">make future knowledge liquid</span>. 
            By aggregating beliefs into prices, we help businesses, researchers, and everyday traders 
            quantify uncertainty, hedge risks, and learn faster from real-time signals.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Trust & Governance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Independent resolution council, transparent rulebooks, audited market criteria. 
                  Launching from Dubai or Singapore for regulatory clarity; serving East & West Asia 
                  with a special focus on India.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <Globe className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Regional Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Serving East & West Asia with localized payment rails and India-first approach
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Compliance First</h4>
                  <p className="text-sm text-muted-foreground">
                    Operating compliantly within regulatory frameworks from launch hub
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Mission;
