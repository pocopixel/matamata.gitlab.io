import { MessageCircle, ArrowRight, Eye, ShieldCheck, Info } from 'lucide-react';
import { getWhatsAppLink } from '@/config/site';

export default function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('fitur')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/50 to-warm-50 dark:from-primary-950/30 dark:to-warm-900" />
      <div className="absolute top-20 right-0 -z-10 w-72 h-72 bg-secondary-100/40 dark:bg-secondary-900/20 rounded-full blur-3xl" />

      <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-900/40 text-secondary-700 dark:text-secondary-300 text-xs font-semibold tracking-wide">
            <Eye className="w-3.5 h-3.5" />
            Digital Awareness
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-900 dark:text-primary-100">
            Jasa Pemasangan Aplikasi Pengawas WhatsApp Anak Jarak Jauh
          </h1>

          <p className="mt-6 text-lg text-warm-600 dark:text-warm-400 leading-relaxed max-w-xl">
            Kenali kemampuan layanan monitoring WA Jarak Jauh, persyaratan kompatibilitas, serta penggunaannya secara transparan dan bertanggung jawab.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppLink('Halo Matamata, saya ingin ngobrol tentang layanan monitoring WhatsApp jarak jauh.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-success-600 hover:bg-success-700 text-white transition-all hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Ngobrol via WhatsApp
            </a>
            <button
              onClick={scrollToFeatures}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border-2 border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
            >
              Pelajari Fitur
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8 flex items-start gap-2 p-4 rounded-lg bg-warm-100 dark:bg-warm-800/60 border border-warm-200 dark:border-warm-700">
            <ShieldCheck className="w-5 h-5 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-warm-600 dark:text-warm-400 leading-relaxed">
              Layanan monitoring perangkat harus digunakan secara sah dan berizin. Pastikan Anda memiliki otoritas yang sah atas perangkat yang akan dimonitor.
            </p>
          </div>
        </div>

        <div className="relative animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary-200/30 to-primary-200/30 dark:from-secondary-900/20 dark:to-primary-900/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white dark:bg-warm-800 rounded-2xl shadow-xl border border-warm-200 dark:border-warm-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-700 text-warm-50">
                    <Eye className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold text-warm-800 dark:text-warm-200">Dashboard Monitoring</span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-success-600 dark:text-success-400">
                  <span className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                  Aktif
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Status Perangkat', value: 'Terhubung', status: 'success' },
                  { label: 'Aktivitas Pesan', value: 'Tersedia', status: 'info' },
                  { label: 'Lokasi Perangkat', value: 'Tersedia', status: 'info' },
                  { label: 'Log Panggilan', value: 'Tersedia', status: 'info' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between p-3 rounded-lg bg-warm-50 dark:bg-warm-900/50 border border-warm-100 dark:border-warm-700"
                  >
                    <span className="text-sm text-warm-600 dark:text-warm-400">{row.label}</span>
                    <span
                      className={`text-sm font-medium ${
                        row.status === 'success'
                          ? 'text-success-600 dark:text-success-400'
                          : 'text-secondary-600 dark:text-secondary-400'
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-lg bg-accent-50 dark:bg-accent-900/20 border border-accent-100 dark:border-accent-900/40">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-warm-600 dark:text-warm-400">
                    Ketersediaan fitur bergantung pada perangkat, OS, dan paket layanan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
