export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  updated: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  draft: boolean;
  relatedPosts: string[];
  seoTitle: string;
  seoDescription: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'hello-world',
    title: 'Hello World',
    description: 'Selamat datang di blog Matamata — ruang edukasi seputar monitoring perangkat, privasi digital, dan penggunaan layanan yang bertanggung jawab.',
    slug: 'hello-world',
    date: '2026-09-22',
    updated: '2026-09-22',
    author: 'Tim Matamata',
    category: 'Pengumuman',
    tags: ['pengumuman', 'perkenalan', 'blog'],
    featuredImage: '',
    draft: false,
    relatedPosts: [],
    seoTitle: 'Hello World — Perkenalan Blog Matamata',
    seoDescription: 'Selamat datang di blog Matamata. Ruang edukasi seputar monitoring perangkat, privasi digital, dan penggunaan layanan yang bertanggung jawab.',
    content: `## Selamat Datang di Matamata

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Tentang Blog Ini

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Apa yang Akan Dibahas?

- Edukasi seputar monitoring perangkat yang sah dan berizin
- Pentingnya privasi digital dan penggunaan layanan yang bertanggung jawab
- Informasi kompatibilitas perangkat dan batasan teknis
- Panduan konsultasi dan pemilihan paket yang sesuai

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

### Penutup

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.

> Artikel ini adalah konten contoh. Konten akan diperbarui secara berkana.`,
  },
];
