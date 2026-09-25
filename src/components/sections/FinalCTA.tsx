import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/config/site';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial">
        <div className="relative rounded-3xl bg-primary-900 dark:bg-primary-950 overflow-hidden p-8 md:p-16 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-50 max-w-2xl mx-auto leading-tight">
              Siap Memulai Ngobrol Monitoring Perangkat?
            </h2>
            <p className="mt-4 text-warm-300 max-w-xl mx-auto">
              Hubungi tim MATAMATA melalui WhatsApp untuk ngobrol gratis. Kami bantu pahami kebutuhan, kompatibilitas perangkat, dan paket yang sesuai.
            </p>
            <div className="mt-8">
              <a
                href={getWhatsAppLink('Halo MATAMATA, saya ingin memulai ngobrol tentang layanan monitoring perangkat.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl bg-success-600 hover:bg-success-500 text-white transition-all hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Ngobrol via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
