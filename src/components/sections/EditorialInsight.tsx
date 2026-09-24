import { BookOpen, KeyRound, Smartphone } from 'lucide-react';

const insights = [
  {
    icon: BookOpen,
    title: 'Transparansi Penggunaan Layanan',
    description:
      'Setiap layanan monitoring memiliki parameter teknis yang perlu dipahami sebelum digunakan. Matamata berkomitmen menyampaikan informasi secara terbuka, termasuk batasan dan persyaratan yang berlaku.',
  },
  {
    icon: KeyRound,
    title: 'Pentingnya Izin dan Privasi',
    description:
      'Penggunaan layanan monitoring perangkat memerlukan otoritas yang sah atas perangkat yang dimonitor. Privasi dan kepatuhan terhadap peraturan yang berlaku adalah prioritas utama dalam setiap konsultasi.',
  },
  {
    icon: Smartphone,
    title: 'Kompatibilitas serta Batasan Perangkat',
    description:
      'Tidak semua perangkat atau sistem operasi mendukung seluruh fitur monitoring. Memahami kompatibilitas sebelum memilih paket membantu menghindari ekspektasi yang tidak sesuai dengan kemampuan teknis.',
  },
];

export default function EditorialInsight() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-warm-800/50 border-y border-warm-200 dark:border-warm-700">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary-600 dark:text-secondary-400">
            Editorial Insight
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">
            Memahami Monitoring Perangkat secara Bertanggung Jawab
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-warm-200 dark:bg-warm-700 rounded-xl overflow-hidden">
          {insights.map((insight, i) => (
            <article key={i} className="bg-white dark:bg-warm-800 p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mb-5">
                <insight.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-warm-800 dark:text-warm-200 mb-3">{insight.title}</h3>
              <p className="text-sm text-warm-600 dark:text-warm-400 leading-relaxed">{insight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
