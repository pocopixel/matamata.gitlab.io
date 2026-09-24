import { ThemeProvider } from '@/context/ThemeContext';
import { RouterProvider, useRouter } from '@/context/RouterContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SocialProofPopup from '@/components/SocialProofPopup';
import HomePage from '@/pages/HomePage';
import BlogListPage from '@/pages/BlogListPage';
import BlogArticlePage from '@/pages/BlogArticlePage';
import TermsPage from '@/pages/TermsPage';
import PrivacyPage from '@/pages/PrivacyPage';

function AppRoutes() {
  const { path } = useRouter();
  const cleanPath = path.split('?')[0].split('#')[0];

  if (cleanPath === '/' || cleanPath === '') {
    return <HomePage />;
  }

  if (cleanPath === '/blog' || cleanPath === '/blog/') {
    return <BlogListPage />;
  }

  if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.replace('/blog/', '').replace(/\/$/, '');
    return <BlogArticlePage slug={slug} />;
  }

  if (cleanPath === '/ketentuan-penggunaan' || cleanPath === '/ketentuan-penggunaan/') {
    return <TermsPage />;
  }

  if (cleanPath === '/kebijakan-privasi' || cleanPath === '/kebijakan-privasi/') {
    return <PrivacyPage />;
  }

  return (
    <div className="pt-28 md:pt-36 pb-16 md:pb-24 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">404</h1>
        <p className="text-warm-600 dark:text-warm-400">Halaman tidak ditemukan.</p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl bg-primary-700 hover:bg-primary-800 text-white transition-colors"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
          <WhatsAppFloat />
          <SocialProofPopup />
        </div>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
