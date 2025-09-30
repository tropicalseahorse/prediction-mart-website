const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} PredictionMart. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('mission')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('get-started')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>
        </div>

        {/* Analytics Placeholder */}
        {/* 
        <script>
          // Analytics code can be inserted here
          // Example: Google Analytics, Mixpanel, etc.
        </script>
        */}
      </div>
    </footer>
  );
};

export default Footer;
