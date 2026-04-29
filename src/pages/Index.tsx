import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Process from "@/components/site/Process";
import Countries from "@/components/site/Countries";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";
import Marquee from "@/components/site/Marquee";

const Index = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NINE OVERSEAS DK Immigration",
    description:
      "Expert visa and immigration consultancy — Student, Work, Tourist visas, PR & Passport services.",
    telephone: "+91 97239 55604",
    areaServed: ["Canada", "Australia", "United Kingdom", "United States", "Europe"],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Countries />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
