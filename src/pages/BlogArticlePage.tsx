import { Calendar, Clock, User, ChevronRight, MessageCircle, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import Markdown from '@/components/Markdown';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { getWhatsAppLink, siteConfig } from '@/config/site';
import { useRouter } from '@/context/RouterContext';

export default function BlogArticlePage({ slug }: { slug: string }) {
  const { navigate } = useRouter();
  const post = blogPosts.find((p) => p.slug === slug && !p.draft);

  if (!post) {
    return (
      <section className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">Artikel Tidak Ditemukan</h1>
          <p className="text-warm-600 dark:text-warm-400 mb-8">Artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border-2 border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Blog
          </button>
        </div>
      </section>
    );
  }

  const relatedPosts: BlogPost[] = (post.relatedPosts || [])
    .map((id) => blogPosts.find((p) => p.id === id && !p.draft))
    .filter((p): p is BlogPost => p !== undefined);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
    dateModified: post.updated,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <SEO
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.updated}
        author={post.author}
        jsonLd={articleJsonLd}
      />

      <article className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="mx-auto max-w-article px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-warm-500 dark:text-warm-400 flex-wrap">
              <li><a href="/" className="hover:text-secondary-600 dark:hover:text-secondary-400">Beranda</a></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><a href="/blog" className="hover:text-secondary-600 dark:hover:text-secondary-400">Blog</a></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-warm-700 dark:text-warm-300" aria-current="page">{post.title}</li>
            </ol>
          </nav>

          <span className="text-xs font-semibold text-secondary-600 dark:text-secondary-400 uppercase tracking-wider">
            {post.category}
          </span>

          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 dark:text-primary-100 leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-warm-600 dark:text-warm-400 leading-relaxed">{post.description}</p>

          <div className="mt-6 flex items-center gap-6 text-sm text-warm-500 dark:text-warm-500 border-b border-warm-200 dark:border-warm-700 pb-6">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Diperbarui {new Date(post.updated).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>

          {post.featuredImage && (
            <figure className="mt-8 -mx-4 sm:mx-0">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full rounded-xl"
                width={900}
                height={500}
                loading="eager"
              />
            </figure>
          )}

          <div className="mt-8">
            <Markdown content={post.content} />
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
            <h2 className="text-lg font-bold text-primary-800 dark:text-primary-200 mb-2">Butuh Ngobrol?</h2>
            <p className="text-sm text-warm-600 dark:text-warm-400 mb-4">
              Punya pertanyaan tentang layanan monitoring perangkat? Hubungi tim MATAMATA melalui WhatsApp.
            </p>
            <a
              href={getWhatsAppLink('Halo MATAMATA, saya ingin ngobrol setelah membaca artikel di blog.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-success-600 hover:bg-success-700 text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Ngobrol via WhatsApp
            </a>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-12 bg-white dark:bg-warm-800/50 border-t border-warm-200 dark:border-warm-700">
          <div className="container-editorial">
            <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">Artikel Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <article
                  key={relPost.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/blog/${relPost.slug}`)}
                >
                  <div className="rounded-2xl overflow-hidden bg-warm-50 dark:bg-warm-800 border border-warm-200 dark:border-warm-700 transition-all hover:shadow-lg">
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 flex items-center justify-center">
                      <span className="font-serif text-xl font-bold text-primary-400 dark:text-primary-600">{siteConfig.name}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold text-warm-800 dark:text-warm-200 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                        {relPost.title}
                      </h3>
                      <p className="mt-2 text-sm text-warm-600 dark:text-warm-400 line-clamp-2">{relPost.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
