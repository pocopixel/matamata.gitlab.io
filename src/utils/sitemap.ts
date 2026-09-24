import { siteConfig } from '@/config/site';
import { blogPosts } from '@/data/blogPosts';

export function generateSitemap(): string {
  const staticUrls: Array<{ loc: string; priority: string; changefreq: string; lastmod?: string }> = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/blog', priority: '0.8', changefreq: 'weekly' },
    { loc: '/ketentuan-penggunaan', priority: '0.3', changefreq: 'monthly' },
    { loc: '/kebijakan-privasi', priority: '0.3', changefreq: 'monthly' },
  ];

  const blogUrls: Array<{ loc: string; priority: string; changefreq: string; lastmod?: string }> = blogPosts
    .filter((p) => !p.draft)
    .map((post) => ({
      loc: `/blog/${post.slug}`,
      priority: '0.6',
      changefreq: 'monthly',
      lastmod: post.updated,
    }));

  const allUrls = [...staticUrls, ...blogUrls];

  const urls = allUrls
    .map((url) => {
      const lastmod = url.lastmod ? `\n  <lastmod>${url.lastmod}</lastmod>` : '';
      return `  <url>
    <loc>${siteConfig.url}${url.loc}</loc>${lastmod}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
