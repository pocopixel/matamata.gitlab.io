import SEO from '@/components/SEO';
import Hero from '@/components/sections/Hero';
import EditorialInsight from '@/components/sections/EditorialInsight';
import ProhibitedUse from '@/components/sections/ProhibitedUse';
import Features from '@/components/sections/Features';
import DeviceCompatibility from '@/components/sections/DeviceCompatibility';
import ScreenshotShowcase from '@/components/sections/ScreenshotShowcase';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import { faqItems } from '@/data/faqItems';
import FinalCTA from '@/components/sections/FinalCTA';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  };

  return (
    <>
      <SEO
        title=""
        description={siteConfig.description}
        path="/"
        jsonLd={[orgJsonLd, faqJsonLd]}
      />
      <Hero />
      <EditorialInsight />
      <ProhibitedUse />
      <Features />
      <DeviceCompatibility />
      <ScreenshotShowcase />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
