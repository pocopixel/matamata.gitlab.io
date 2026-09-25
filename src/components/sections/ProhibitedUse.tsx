import { Ban, HeartCrack, UserX, UsersRound, ShieldAlert, Scale } from 'lucide-react';

interface Prohibition {
  icon: typeof HeartCrack;
  title: string;
  description: string;
  points: string[];
}

const prohibitions: Prohibition[] = [
  {
    icon: HeartCrack,
    title: 'Dilarang Sadap Pasangan/Pacar',
    description:
      'Memantau pasangan atau pacar tanpa persetujuan yang jelas merupakan pelanggaran privasi yang serius. Hubungan romantis tidak memberikan otoritas otomatis atas perangkat pribadi pasangan. Setiap pemantauan tanpa sepengetahuan dan izin tertulis dari pemilik perangkat dapat dikategorikan sebagai stalking digital dan melanggar undang-undang perlindungan data pribadi.',
    points: [
      'Akses ke perangkat pasangan tanpa izin adalah bentuk stalking digital',
      'Hubungan romantis bukan dasar hukum untuk memantau perangkat pribadi',
      'Pelanggaran dapat berakibat pidana sesuai UU PDP dan KUHP',
    ],
  },
  {
    icon: UserX,
    title: 'Dilarang Sadap Teman',
    description:
      'Memantau perangkat teman tanpa persetujuan yang sah adalah pelanggaran kepercayaan dan privasi. Persahabatan tidak menghapus hak setiap individu atas privasi digitalnya. Setiap instalasi aplikasi monitoring atau akses ke data teman tanpa pemberitahuan terbuka dan persetujuan sukarela merupakan tindakan yang melanggar hukum dan dapat berakibat tuntutan hukum.',
    points: [
      'Persahabatan tidak menghapus hak privasi digital seseorang',
      'Pemantauan tanpa pemberitahuan terbuka merusak kepercayaan dan melanggar hukum',
      'Setiap akses ke data teman harus disertai persetujuan sukarela yang terekam',
    ],
  },
  {
    icon: UsersRound,
    title: 'Dilarang Sadap Orang Terdekat',
    description:
      'Kedekatan emosional atau hubungan keluarga dengan seseorang tidak secara otomatis memberikan otoritas untuk memantau perangkatnya. Anggota keluarga dewasa memiliki hak privasi yang sama yang harus dihormati. Pemantauan hanya sah bila dilakukan oleh orang tua terhadap anak di bawah umur yang masih berada di bawah pengawasan sah, atau dengan persetujuan terbuka dari pemilik perangkat.',
    points: [
      'Kedekatan emosional bukan pengganti persetujuan yang sah',
      'Anggota keluarga dewasa memiliki hak privasi penuh atas perangkatnya',
      'Pemantauan anak wajib dilakukan secara terbuka dengan pemberitahuan yang jelas',
    ],
  },
];

export default function ProhibitedUse() {
  return (
    <section className="py-16 md:py-24 bg-warm-50 dark:bg-warm-900/40 border-y border-warm-200 dark:border-warm-700">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-error-600 dark:text-error-400">
            <Ban className="w-4 h-4" />
            Dilarang Keras
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">
            Penggunaan yang Dilarang dan Tidak Toleransi
          </h2>
          <p className="mt-4 text-warm-600 dark:text-warm-400">
            MATAMATA hanya mendukung penggunaan layanan monitoring yang sah, etis, dan dengan persetujuan terbuka. Tindakan pemantauan berikut dilarang keras dan dapat berakibat sanksi hukum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-warm-200 dark:bg-warm-700 rounded-2xl overflow-hidden">
          {prohibitions.map((item) => (
            <article
              key={item.title}
              className="group bg-white dark:bg-warm-800 p-8 transition-colors hover:bg-warm-50 dark:hover:bg-warm-800/60"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-error-50 dark:bg-error-900/20 text-error-600 dark:text-error-400 mb-6 ring-1 ring-error-100 dark:ring-error-900/40 transition-transform group-hover:scale-105">
                <item.icon className="w-7 h-7" />
              </div>

              <h3 className="text-lg font-bold text-warm-800 dark:text-warm-200 mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-warm-600 dark:text-warm-400 leading-relaxed mb-5">
                {item.description}
              </p>

              <ul className="space-y-2.5">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Ban className="w-4 h-4 text-error-500 dark:text-error-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-warm-600 dark:text-warm-400 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start gap-4 p-6 rounded-xl bg-error-50 dark:bg-error-900/20 border border-error-100 dark:border-error-900/40">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-error-100 dark:bg-error-900/40 text-error-600 dark:text-error-400 flex-shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-warm-800 dark:text-warm-200 mb-1">
              Konsekuensi Hukum
            </h3>
            <p className="text-sm text-warm-600 dark:text-warm-400 leading-relaxed">
              Pelanggaran terhadap larangan ini dapat berakibat pidana sesuai Undang-Undang Pelindungan Data Pribadi (UU PDP), KUHP, dan peraturan privasi yang berlaku di wilayah yurisdiksi Anda. MATAMATA akan menghentikan layanan secara sepihak dan bekerja sama dengan pihak berwenang bila ditemukan penyalahgunaan.
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-start gap-2 text-xs text-warm-500 dark:text-warm-500">
          <Scale className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>
            Informasi hukum di halaman ini bersifat edukatif dan bukan pengganti konsultasi hukum profesional. Pengguna wajib memahami peraturan yang berlaku di wilayah masing-masing sebelum menggunakan layanan monitoring.
          </p>
        </div>
      </div>
    </section>
  );
}
