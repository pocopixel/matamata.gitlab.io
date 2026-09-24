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
    name: 'Monitoring Pesan',
    description: 'Akses informasi aktivitas pesan pada perangkat yang dimonitor, termasuk riwayat percakapan yang tersimpan di perangkat.',
    requirement: 'Perangkat harus terhubung dan akun pengguna aktif.',
    compatibility: 'Ketersediaan dapat berbeda antara Android dan iOS.',
  },
  {
    number: '02',
    name: 'Lokasi Perangkat',
    description: 'Lihat informasi lokasi perangkat yang dimonitor berdasarkan data GPS atau jaringan yang tersedia.',
    requirement: 'Layanan lokasi harus aktif pada perangkat.',
    compatibility: 'Akurasi bergantung pada perangkat dan kondisi sinyal.',
  },
  {
    number: '03',
    name: 'Log Panggilan',
    description: 'Informasi riwayat panggilan telepon yang tersimpan pada perangkat, termasuk kontak, durasi, dan waktu.',
    requirement: 'Akses ke log panggilan diperlukan.',
    compatibility: 'Beberapa perangkat dapat membatasi akses log.',
  },
  {
    number: '04',
    name: 'Aplikasi Terpasang',
    description: 'Daftar aplikasi yang terpasang pada perangkat yang dimonitor untuk memahami aktivitas digital pengguna.',
    requirement: 'Izin akses ke daftar aplikasi diperlukan.',
    compatibility: 'Tidak semua aplikasi dapat dideteksi pada iOS.',
  },
  {
    number: '05',
    name: 'Aktivitas Internet',
    description: 'Informasi riwayat penjelajahan web pada perangkat yang dimonitor, memberikan gambaran aktivitas online.',
    requirement: 'Akses ke riwayat browser diperlukan.',
    compatibility: 'Riwayat mode privat tidak tersedia.',
  },
  {
    number: '06',
    name: 'Kontak Perangkat',
    description: 'Akses daftar kontak yang tersimpan pada perangkat untuk identifikasi komunikasi yang terjadi.',
    requirement: 'Izin akses kontak diperlukan.',
    compatibility: 'Sinkronisasi akun cloud dapat memengaruhi ketersediaan.',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-16 md:py-24 scroll-mt-20">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary-600 dark:text-secondary-400">Fitur Layanan</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">Kemampuan Monitoring yang Terverifikasi</h2>
          <p className="mt-4 text-warm-600 dark:text-warm-400">Berikut adalah fitur layanan monitoring yang telah diverifikasi. Ketersediaan setiap fitur bergantung pada berbagai faktor teknis.</p>
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
          <p className="text-sm text-warm-600 dark:text-warm-400">Ketersediaan fitur dapat berbeda berdasarkan perangkat, sistem operasi, versi aplikasi, paket, dan ketentuan layanan.</p>
        </div>
      </div>
    </section>
  );
}
