import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin } from "lucide-react";
import PayoffCalculator from "./PayoffCalculator";

const Widgets = () => {
  return (
    <section id="widgets" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Interactive Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Try our calculator and see where we're launching from
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Custom Calculator Widget */}
          <div>
            <PayoffCalculator />
          </div>

          {/* Location Maps Widget */}
          <div className="space-y-6">
            <Card className="shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle>Our Locations</CardTitle>
                    <CardDescription>Launching from financial hubs in Asia</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="dubai" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="dubai">Dubai</TabsTrigger>
                    <TabsTrigger value="singapore">Singapore</TabsTrigger>
                  </TabsList>
                  <TabsContent value="dubai" className="mt-4">
                    <h4 className="font-semibold mb-2">Dubai International Financial Centre</h4>
                    <div className="aspect-video rounded-lg overflow-hidden border">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1730155823347!2d55.26391831501276!3d25.21319498390049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4336c1c3c3c3%3A0x1c3f3c3c3c3c3c3c!2sDubai%20International%20Financial%20Centre!5e0!3m2!1sen!2sae!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dubai International Financial Centre"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="singapore" className="mt-4">
                    <h4 className="font-semibold mb-2">Singapore CBD</h4>
                    <div className="aspect-video rounded-lg overflow-hidden border">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8167849684445!2d103.85143631475396!3d1.2846756990632842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190d1b0c1b0d%3A0x1b0d1b0d1b0d1b0d!2sMarina%20Bay%20Financial%20Centre!5e0!3m2!1sen!2ssg!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Singapore CBD"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widgets;
