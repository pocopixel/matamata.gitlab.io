import { Calendar, Clock, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blogPosts';
import { siteConfig } from '@/config/site';
import { useRouter } from '@/context/RouterContext';

export default function BlogListPage() {
  const { navigate } = useRouter();
  const publishedPosts = blogPosts.filter((p) => !p.draft);

  return (
    <>
      <SEO
        title="Blog"
        description="Blog MATAMATA — edukasi seputar monitoring perangkat, privasi digital, dan penggunaan layanan yang bertanggung jawab."
        path="/blog"
      />
      <section className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-editorial">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-warm-500 dark:text-warm-400">
              <li><a href="/" className="hover:text-secondary-600 dark:hover:text-secondary-400">Beranda</a></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-warm-700 dark:text-warm-300" aria-current="page">Blog</li>
            </ol>
          </nav>

          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-secondary-600 dark:text-secondary-400">
              Blog MATAMATA
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">
              Edukasi Monitoring Perangkat & Privasi Digital
            </h1>
            <p className="mt-4 text-warm-600 dark:text-warm-400">
              Artikel edukatif seputar penggunaan layanan monitoring perangkat secara sah, privasi digital, dan penggunaan teknologi yang bertanggung jawab.
            </p>
          </div>

          {publishedPosts.length === 0 ? (
            <p className="text-warm-500 dark:text-warm-400 text-center py-16">Belum ada artikel yang dipublikasikan.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <div className="rounded-2xl overflow-hidden bg-white dark:bg-warm-800 border border-warm-200 dark:border-warm-700 transition-all hover:shadow-lg">
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 flex items-center justify-center">
                      <span className="font-serif text-2xl font-bold text-primary-400 dark:text-primary-600">{siteConfig.name}</span>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-secondary-600 dark:text-secondary-400 uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h2 className="mt-2 text-lg font-bold text-warm-800 dark:text-warm-200 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-warm-600 dark:text-warm-400 leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-warm-500 dark:text-warm-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
