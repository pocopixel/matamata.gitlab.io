import { MessageCircle } from 'lucide-react';
import { navItems, getWhatsAppLink, siteConfig } from '@/config/site';
import { useRouter } from '@/context/RouterContext';

export default function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-warm-100 dark:bg-warm-800 border-t border-warm-200 dark:border-warm-700 mt-20">
      <div className="container-editorial py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img
                src="/web-app-manifest-512x512 copy.png"
                alt="Matamata"
                width="56"
                height="56"
                className="w-14 h-14 rounded-2xl object-cover"
              />
            </div>
            <p className="text-sm text-warm-600 dark:text-warm-400 max-w-xs leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-xs text-warm-500 dark:text-warm-500 mt-4 max-w-xs">
              Matamata adalah layanan konsultasi independen. Matamata bukan pemilik, pengembang, distributor resmi, atau mitra resmi FlexiSPY.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="text-sm font-semibold text-warm-800 dark:text-warm-200 mb-4 uppercase tracking-wider">Navigasi</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-warm-600 dark:text-warm-400 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-warm-800 dark:text-warm-200 mb-4 uppercase tracking-wider">Konsultasi</h2>
            <p className="text-sm text-warm-600 dark:text-warm-400 mb-4">
              Butuh bantuan memilih paket atau memeriksa kompatibilitas perangkat? Hubungi kami melalui WhatsApp.
            </p>
            <a
              href={getWhatsAppLink('Halo Matamata, saya ingin berkonsultasi.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-success-600 hover:bg-success-700 text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-200 dark:border-warm-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-500 dark:text-warm-500">
            &copy; {new Date().getFullYear()} Matamata. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-4">
            <a
              href="/ketentuan-penggunaan"
              onClick={(e) => { e.preventDefault(); navigate('/ketentuan-penggunaan'); }}
              className="text-xs text-warm-500 dark:text-warm-500 hover:text-secondary-600 dark:hover:text-secondary-400"
            >
              Ketentuan Penggunaan
            </a>
            <a
              href="/kebijakan-privasi"
              onClick={(e) => { e.preventDefault(); navigate('/kebijakan-privasi'); }}
              className="text-xs text-warm-500 dark:text-warm-500 hover:text-secondary-600 dark:hover:text-secondary-400"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
