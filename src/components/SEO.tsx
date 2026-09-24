import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  jsonLd?: object;
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEO({
  title,
  description = siteConfig.description,
  path = '/',
  type = 'website',
  image,
  publishedTime,
  modifiedTime,
  author,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
    document.title = fullTitle;

    setMeta('description', description);
    setLink('canonical', `${siteConfig.url}${path}`);

    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:url', `${siteConfig.url}${path}`, 'property');
    if (image) setMeta('og:image', image, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    if (image) setMeta('twitter:image', image);

    if (publishedTime) setMeta('article:published_time', publishedTime, 'property');
    if (modifiedTime) setMeta('article:modified_time', modifiedTime, 'property');
    if (author) setMeta('article:author', author, 'property');

    const existingJsonLd = document.getElementById('page-jsonld');
    if (existingJsonLd) existingJsonLd.remove();

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, type, image, publishedTime, modifiedTime, author, jsonLd]);

  return null;
}
