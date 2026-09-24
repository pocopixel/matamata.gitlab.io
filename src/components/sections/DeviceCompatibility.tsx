import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const compatibilityData = [
  {
    os: 'Android',
    verified: true,
    requirements: 'Versi Android yang didukung dapat berubah. Konsultasi diperlukan untuk memverifikasi kompatibilitas perangkat spesifik.',
    limitations: 'Beberapa fitur memerlukan akses root untuk berfungsi penuh. Ketersediaan fitur berbeda antar versi.',
  },
  {
    os: 'iOS',
    verified: true,
    requirements: 'Versi iOS yang didukung dapat berubah. Jailbreak mungkin diperlukan untuk fitur tertentu.',
    limitations: 'Fitur monitoring pada iOS umumnya lebih terbatas dibandingkan Android karena pembatasan sistem.',
  },
  {
    os: 'Lainnya',
    verified: false,
    requirements: 'Dukungan untuk sistem operasi lain belum dikonfirmasi.',
    limitations: 'Periksa informasi resmi atau konsultasi untuk perangkat non-Android/iOS.',
  },
];

export default function DeviceCompatibility() {
  return (
    <section id="kompatibilitas" className="py-16 md:py-24 bg-white dark:bg-warm-800/50 border-y border-warm-200 dark:border-warm-700">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary-600 dark:text-secondary-400">
            Kompatibilitas Perangkat
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">
            Perangkat yang Didukung
          </h2>
          <p className="mt-4 text-warm-600 dark:text-warm-400">
            Informasi kompatibilitas berikut adalah panduan umum. Dukungan dapat berubah seiring pembaruan sistem operasi dan aplikasi.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-warm-200 dark:border-warm-700">
                <th className="text-left py-4 px-4 text-sm font-semibold text-warm-800 dark:text-warm-200">Sistem Operasi</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-warm-800 dark:text-warm-200">Status Verifikasi</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-warm-800 dark:text-warm-200">Persyaratan</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-warm-800 dark:text-warm-200">Batasan</th>
              </tr>
            </thead>
            <tbody>
              {compatibilityData.map((row) => (
                <tr key={row.os} className="border-b border-warm-100 dark:border-warm-700/50">
                  <td className="py-4 px-4 text-sm font-bold text-warm-800 dark:text-warm-200">{row.os}</td>
                  <td className="py-4 px-4">
                    {row.verified ? (
                      <span className="inline-flex items-center gap-1.5 text-sm text-success-600 dark:text-success-400">
                        <CheckCircle2 className="w-4 h-4" />
                        Terverifikasi
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm text-warm-500 dark:text-warm-500">
                        <AlertTriangle className="w-4 h-4" />
                        Belum Dikonfirmasi
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-sm text-warm-600 dark:text-warm-400 max-w-xs">{row.requirements}</td>
                  <td className="py-4 px-4 text-sm text-warm-600 dark:text-warm-400 max-w-xs">{row.limitations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-warm-100 dark:bg-warm-800 border border-warm-200 dark:border-warm-700">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-warning-600 dark:text-warning-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-warm-600 dark:text-warm-400">
              Dukungan perangkat dapat berubah sewaktu-waktu. Verifikasi terbaru melalui konsultasi sebelum memilih paket.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
