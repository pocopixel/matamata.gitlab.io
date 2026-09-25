import { MessageCircle, Check, Info } from 'lucide-react';
import { getWhatsAppLink } from '@/config/site';

interface Package {
  name: string;
  duration: string;
  summary: string;
  price: string;
  compatibility: string;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    name: 'Paket Dasar',
    duration: '1 Bulan',
    summary: 'Pilihan untuk pengenalan layanan monitoring perangkat dengan durasi singkat.',
    price: '[Harga belum tersedia]',
    compatibility: 'Android & iOS (dengan batasan)',
    features: [
      'Monitoring pesan',
      'Log panggilan',
      'Lokasi perangkat',
      'Kontak perangkat',
    ],
  },
  {
    name: 'Paket Menengah',
    duration: '3 Bulan',
    summary: 'Pilihan seimbang untuk kebutuhan monitoring dengan durasi menengah.',
    price: '[Harga belum tersedia]',
    compatibility: 'Android & iOS (dengan batasan)',
    features: [
      'Semua fitur Paket Dasar',
      'Aktivitas internet',
      'Aplikasi terpasang',
      'Dukungan konsultasi',
    ],
    popular: true,
  },
  {
    name: 'Paket Tahunan',
    duration: '12 Bulan',
    summary: 'Pilihan untuk penggunaan monitoring jangka panjang dengan nilai terbaik.',
    price: '[Harga belum tersedia]',
    compatibility: 'Android & iOS (dengan batasan)',
    features: [
      'Semua fitur Paket Menengah',
      'Prioritas konsultasi',
      'Panduan penggunaan',
      'Dukungan teknis',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="paket" className="py-16 md:py-24 scroll-mt-20">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary-600 dark:text-secondary-400">
            Paket Layanan
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">
            Pilih Paket yang Sesuai
          </h2>
          <p className="mt-4 text-warm-600 dark:text-warm-400">
            Bandingkan paket layanan monitoring perangkat berdasarkan durasi dan fitur yang tersedia. Hubungi kami untuk informasi harga terkini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border-2 p-6 transition-all ${
                pkg.popular
                  ? 'border-secondary-500 dark:border-secondary-400 bg-white dark:bg-warm-800 shadow-lg'
                  : 'border-warm-200 dark:border-warm-700 bg-warm-50 dark:bg-warm-800/50'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full bg-secondary-600 text-white">
                  Paling Diminati
                </span>
              )}

              <h3 className="text-lg font-bold text-warm-800 dark:text-warm-200">{pkg.name}</h3>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 font-medium mt-1">{pkg.duration}</p>
              <p className="text-sm text-warm-600 dark:text-warm-400 mt-3 leading-relaxed">{pkg.summary}</p>

              <div className="mt-4 pt-4 border-t border-warm-100 dark:border-warm-700">
                <p className="text-2xl font-serif font-bold text-primary-800 dark:text-primary-200">{pkg.price}</p>
              </div>

              <div className="mt-4 space-y-2">
                {pkg.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-warm-600 dark:text-warm-400">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-warm-100 dark:border-warm-700">
                <p className="text-xs font-semibold text-warm-500 dark:text-warm-500 uppercase tracking-wider">Kompatibilitas</p>
                <p className="text-sm text-warm-600 dark:text-warm-400 mt-1">{pkg.compatibility}</p>
              </div>

              <a
                href={getWhatsAppLink(`Halo MATAMATA, saya tertarik dengan ${pkg.name} (${pkg.duration}). Mohon informasi lebih lanjut.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                  pkg.popular
                    ? 'bg-success-600 hover:bg-success-700 text-white'
                    : 'border-2 border-success-600 text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Ngobrol via WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-2 p-4 rounded-lg bg-accent-50 dark:bg-accent-900/20 border border-accent-100 dark:border-accent-900/40">
          <Info className="w-5 h-5 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-warm-600 dark:text-warm-400">
            Harga, fitur, dan durasi paket dapat berubah. Hubungi kami melalui WhatsApp untuk informasi terkini, diskon yang tersedia, dan detail lisensi.
          </p>
        </div>
      </div>
    </section>
  );
}
