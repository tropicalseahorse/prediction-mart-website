import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import HowItWorks from "@/components/HowItWorks";
import Personas from "@/components/Personas";
import GettingStarted from "@/components/GettingStarted";
import Examples from "@/components/Examples";
import Widgets from "@/components/Widgets";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Mission />
      <HowItWorks />
      <Personas />
      <GettingStarted />
      <Examples />
      <Widgets />
      <FAQ />
      <Footer />
      
      {/* Schema.org Organization markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PredictionMart",
          "description": "Prediction market platform serving East & West Asia with focus on India",
          "areaServed": ["Asia", "India", "Singapore", "Dubai"],
          "knowsAbout": ["Prediction Markets", "Financial Technology", "Event Trading"]
        })}
      </script>
    </div>
  );
};

export default Index;
