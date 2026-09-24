import { Phone, ShieldCheck, Smartphone, Package, FileCheck, Eye } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Hubungi Matamata',
    description: 'Konsultasikan kebutuhan Anda melalui WhatsApp. Tim kami akan membantu memahami tujuan dan kebutuhan monitoring perangkat Anda.',
  },
  {
    icon: ShieldCheck,
    title: 'Pastikan Tujuan Sah',
    description: 'Pastikan tujuan penggunaan layanan sah dan Anda memiliki otoritas yang berizin atas perangkat yang akan dimonitor.',
  },
  {
    icon: Smartphone,
    title: 'Periksa Kompatibilitas',
    description: 'Verifikasi kompatibilitas perangkat target dengan layanan. Pastikan sistem operasi dan versi perangkat didukung.',
  },
  {
    icon: Package,
    title: 'Pilih Paket yang Sesuai',
    description: 'Pilih paket layanan yang paling sesuai dengan kebutuhan dan durasi penggunaan yang Anda perlukan.',
  },
  {
    icon: FileCheck,
    title: 'Ikuti Prosedur Resmi',
    description: 'Ikuti prosedur resmi dan ketentuan layanan yang berlaku untuk memastikan penggunaan yang sesuai dengan regulasi.',
  },
  {
    icon: Eye,
    title: 'Gunakan dengan Bertanggung Jawab',
    description: 'Manfaatkan layanan secara bertanggung jawab dan sesuai dengan ketentuan yang telah disepakati.',
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-16 md:py-24 bg-primary-900 dark:bg-primary-950 scroll-mt-20">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary-400">
            Cara Kerja
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-warm-50">
            Proses Konsultasi dan Penggunaan Layanan
          </h2>
          <p className="mt-4 text-warm-300">
            Enam langkah sederhana untuk memulai konsultasi hingga penggunaan layanan monitoring perangkat secara bertanggung jawab.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary-700 dark:bg-primary-800 md:-translate-x-px" aria-hidden="true" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-secondary-500 text-white shadow-lg z-10">
                  <step.icon className="w-5 h-5" />
                </div>

                <div className={`pl-20 md:pl-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <span className="text-sm font-bold text-secondary-400">Langkah {i + 1}</span>
                  <h3 className="mt-1 text-lg font-bold text-warm-50">{step.title}</h3>
                  <p className="mt-2 text-sm text-warm-300 leading-relaxed">{step.description}</p>
                </div>

                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
