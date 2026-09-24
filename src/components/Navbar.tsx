import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, Moon, Sun } from 'lucide-react';
import { navItems, getWhatsAppLink } from '@/config/site';
import { useTheme } from '@/context/ThemeContext';
import { useRouter } from '@/context/RouterContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { path, navigate } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    const cleanHref = href.split('#')[0];
    if (cleanHref === '/') return path === '/' || path === '';
    return path.startsWith(cleanHref);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.includes('#') && !href.startsWith('/#')) return;
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.split('#')[1];
      if (path !== '/' && path !== '') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-warm-50/95 dark:bg-warm-900/95 backdrop-blur-md shadow-sm border-b border-warm-200 dark:border-warm-700'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-editorial flex items-center justify-between h-16 md:h-20" aria-label="Navigasi utama">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
            className="flex items-center"
            aria-label="Beranda Matamata"
          >
            <img
              src="/web-app-manifest-512x512 copy.png"
              alt="Matamata"
              width="44"
              height="44"
              className="w-11 h-11 rounded-xl object-cover"
            />
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-secondary-600 dark:text-secondary-400'
                      : 'text-warm-700 dark:text-warm-300 hover:text-secondary-600 dark:hover:text-secondary-400'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-warm-700 dark:text-warm-300 hover:bg-warm-200 dark:hover:bg-warm-800 transition-colors"
              aria-label={theme === 'light' ? 'Aktifkan dark mode' : 'Aktifkan light mode'}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <a
              href={getWhatsAppLink('Halo Matamata, saya ingin berkonsultasi tentang layanan monitoring perangkat.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-success-600 hover:bg-success-700 text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-md text-warm-700 dark:text-warm-300 hover:bg-warm-200 dark:hover:bg-warm-800 transition-colors"
              aria-label="Buka menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-warm-900/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 max-w-[80vw] bg-warm-50 dark:bg-warm-800 shadow-xl animate-slide-down overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-warm-200 dark:border-warm-700">
              <span className="font-serif text-lg font-bold text-primary-800 dark:text-primary-200">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md text-warm-700 dark:text-warm-300 hover:bg-warm-200 dark:hover:bg-warm-700"
                aria-label="Tutup menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <ul className="p-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                        : 'text-warm-700 dark:text-warm-300 hover:bg-warm-100 dark:hover:bg-warm-700'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-4 border-t border-warm-200 dark:border-warm-700">
              <a
                href={getWhatsAppLink('Halo Matamata, saya ingin berkonsultasi tentang layanan monitoring perangkat.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-lg bg-success-600 hover:bg-success-700 text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
