import { Info } from 'lucide-react';

interface Feature {
  number: string;
  name: string;
  description: string;
  requirement: string;
  compatibility: string;
}

const features: Feature[] = [
  {
    number: '01',
    name: 'Aktivitas WhatsApp',
    description: 'Tinjau informasi aktivitas WhatsApp yang tersedia pada perangkat berizin, seperti pesan, media, dan aktivitas akun yang didukung oleh sistem.',
    requirement: 'Perangkat target harus terhubung dan izin pemantauan harus sah.',
    compatibility: 'Ketersediaan berbeda menurut Android/iOS, versi aplikasi, dan paket.',
  },
  {
    number: '02',
    name: 'Facebook & Messenger',
    description: 'Pahami aktivitas Facebook dan Messenger yang dapat disediakan oleh perangkat dan konfigurasi yang kompatibel, tanpa menjanjikan akses ke data yang dibatasi platform.',
    requirement: 'Persetujuan pemilik perangkat dan konfigurasi yang kompatibel.',
    compatibility: 'Fitur sosial dapat berubah mengikuti pembaruan Facebook dan sistem operasi.',
  },
  {
    number: '03',
    name: 'Instagram & Snapchat',
    description: 'Pantau indikator aktivitas yang tersedia untuk Instagram dan Snapchat secara bertanggung jawab pada perangkat milik Anda atau perangkat yang penggunaannya telah disetujui.',
    requirement: 'Gunakan hanya untuk kontrol orang tua atau tujuan sah dengan pemberitahuan yang sesuai.',
    compatibility: 'Tidak semua pesan, media, atau mode privat dapat tersedia.',
  },
  {
    number: '04',
    name: 'Lokasi Perangkat',
    description: 'Lihat perkiraan lokasi perangkat berdasarkan GPS atau jaringan yang tersedia untuk membantu keselamatan keluarga dan koordinasi sehari-hari.',
    requirement: 'Layanan lokasi dan izin lokasi harus aktif.',
    compatibility: 'Akurasi bergantung pada sinyal, perangkat, dan pengaturan privasi.',
  },
  {
    number: '05',
    name: 'Log Panggilan & Kontak',
    description: 'Tinjau riwayat panggilan dan kontak yang tersedia untuk membantu memahami pola komunikasi perangkat yang dimonitor.',
    requirement: 'Izin akses yang relevan harus diberikan secara sah.',
    compatibility: 'Akses dapat dibatasi oleh model perangkat, OS, atau aplikasi.',
  },
  {
    number: '06',
    name: 'Aplikasi & Aktivitas Web',
    description: 'Dapatkan gambaran aplikasi terpasang dan aktivitas penjelajahan yang tersedia sehingga orang tua dapat mendiskusikan kebiasaan digital dengan lebih baik.',
    requirement: 'Akses ke daftar aplikasi dan riwayat browser diperlukan.',
    compatibility: 'Mode privat, aplikasi terenkripsi, dan pembatasan OS dapat mengurangi data.',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-16 md:py-24 scroll-mt-20">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary-600 dark:text-secondary-400">Fitur Layanan</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">Monitoring Keluarga di Aplikasi yang Anda Gunakan</h2>
          <p className="mt-4 text-warm-600 dark:text-warm-400">MATAMATA membantu Anda memahami pilihan monitoring untuk WhatsApp, Facebook, Instagram, Snapchat, dan aktivitas perangkat lainnya. Semua fitur bergantung pada kompatibilitas dan izin yang sah.</p>
        </div>

        <div className="space-y-px bg-warm-200 dark:bg-warm-700 rounded-xl overflow-hidden">
          {features.map((feature) => (
            <div key={feature.number} className="group bg-warm-50 dark:bg-warm-800 p-6 md:p-8 hover:bg-white dark:hover:bg-warm-800/80 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="md:col-span-1"><span className="text-2xl md:text-3xl font-serif font-bold text-primary-300 dark:text-primary-700 group-hover:text-secondary-500 transition-colors">{feature.number}</span></div>
                <div className="md:col-span-4"><h3 className="text-lg font-bold text-warm-800 dark:text-warm-200">{feature.name}</h3></div>
                <div className="md:col-span-4"><p className="text-sm text-warm-600 dark:text-warm-400 leading-relaxed">{feature.description}</p></div>
                <div className="md:col-span-3 space-y-2">
                  <div><p className="text-xs font-semibold text-warm-500 uppercase tracking-wider">Persyaratan</p><p className="text-sm text-warm-600 dark:text-warm-400 mt-1">{feature.requirement}</p></div>
                  <div><p className="text-xs font-semibold text-warm-500 uppercase tracking-wider">Kompatibilitas</p><p className="text-sm text-warm-600 dark:text-warm-400 mt-1">{feature.compatibility}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-2 p-4 rounded-lg bg-accent-50 dark:bg-accent-900/20 border border-accent-100 dark:border-accent-900/40">
          <Info className="w-5 h-5 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-warm-600 dark:text-warm-400">Kami tidak menjamin akses ke seluruh isi akun atau pesan. Ketersediaan fitur dapat berubah berdasarkan perangkat, OS, versi aplikasi, paket, izin pengguna, dan ketentuan platform.</p>
        </div>
      </div>
    </section>
  );
}
