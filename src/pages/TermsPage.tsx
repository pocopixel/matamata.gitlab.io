import SEO from '@/components/SEO';
import { ChevronRight } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      title: '1. Penerimaan Ketentuan',
      content:
        'Dengan mengakses dan menggunakan website MATAMATA serta layanan konsultasi yang kami sediakan, Anda dinyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan yang tercantum dalam halaman ini. Jika Anda tidak setuju, mohon untuk tidak melanjutkan penggunaan layanan.',
    },
    {
      title: '2. Deskripsi Layanan',
      content:
        'MATAMATA adalah layanan konsultasi dan edukasi yang memberikan informasi seputar solusi monitoring digital untuk perangkat, termasuk pemahaman fitur terkait WhatsApp, Facebook, Instagram, Snapchat, serta aplikasi dan aktivitas digital lainnya. Layanan kami mencakup konsultasi kompatibilitas perangkat, panduan penggunaan yang sah, pilihan paket, dan penjelasan fitur sesuai kebutuhan pengguna.',
    },
    {
      title: '3. Penggunaan yang Sah dan Berizin',
      content:
        'Semua penggunaan layanan monitoring harus dilakukan secara legal, etis, dan sesuai dengan otoritas yang sah atas perangkat yang dimonitor. Anda bertanggung jawab memastikan bahwa Anda memiliki hak atau kewenangan hukum untuk menggunakan perangkat atau aplikasi yang dibahas. Penggunaan untuk memata-matai, mengintip, atau mengakses data tanpa izin adalah dilarang keras.',
    },
    {
      title: '4. Tanggung Jawab Pengguna',
      content:
        'Anda bertanggung jawab penuh atas keputusan, tindakan, dan penggunaan koneksi, data, serta informasi yang Anda peroleh dari layanan kami. Anda wajib memastikan bahwa penggunaan layanan tidak melanggar hukum yang berlaku, kebijakan platform, hak privasi pihak lain, maupun ketentuan penggunaan perangkat yang bersangkutan.',
    },
    {
      title: '5. Larangan Penggunaan Tanpa Izin',
      content:
        'Pemantauan perangkat, akun, atau aktivitas digital tanpa persetujuan yang jelas dan sah dari pemilik atau pengampu legal perangkat dilarang. MATAMATA tidak menyediakan layanan untuk melakukan pengintaian, penyadapan, stalking, atau akses ilegal terhadap akun atau komunikasi pihak lain.',
    },
    {
      title: '6. Larangan Penyalahgunaan',
      content:
        'Dilarang keras menggunakan layanan untuk tujuan stalking, penyalahgunaan data, pencurian informasi, mengambil kredensial, penyebaran malware, bypass keamanan, pelanggaran hak privasi, atau aktivitas ilegal lainnya. Setiap pelanggaran dapat berujung pada penghentian layanan, pemblokiran akses, dan tindakan hukum sesuai ketentuan yang berlaku.',
    },
    {
      title: '7. Kompatibilitas, Fitur, dan Batasan Teknis',
      content:
        'Ketersediaan fitur monitoring dapat bervariasi berdasarkan sistem operasi, versi perangkat, konfigurasi aplikasi, model telepon, kebijakan pembaruan platform, serta paket layanan. Platform seperti WhatsApp, Facebook, Instagram, dan Snapchat memiliki pembatasan teknis yang dapat membatasi akses data, fitur, atau kebutuhan pengumpulan informasi. MATAMATA tidak menjamin seluruh fitur tersedia pada setiap perangkat atau akun.',
    },
    {
      title: '8. Pembayaran dan Informasi Paket',
      content:
        'Jika layanan melibatkan pembayaran, detail paket, harga, durasi, serta prosedur pembayaran akan diinformasikan melalui konsultasi yang dilakukan secara transparan, termasuk melalui WhatsApp atau media komunikasi yang telah disepakati. Pembayaran harus dilakukan sesuai prosedur yang disampaikan oleh MATAMATA dan tidak boleh dilakukan melalui cara yang tidak resmi.',
    },
    {
      title: '9. Ketersediaan Layanan dan Dukungan',
      content:
        'MATAMATA berupaya menyediakan informasi, konsultasi, dan dukungan secara berkelanjutan. Namun, ketersediaan layanan dapat dipengaruhi oleh pemeliharaan sistem, pembaruan fitur, kondisi teknis, atau faktor di luar kendali kami. Kami tidak bertanggung jawab atas keterlambatan, perubahan, atau gangguan yang disebabkan oleh faktor eksternal.',
    },
    {
      title: '10. Perubahan Ketentuan',
      content:
        'MATAMATA berhak memperbarui atau mengubah ketentuan ini sesuai kebutuhan operasional, aturan baru, atau perubahan layanan. Perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan. Penggunaan layanan setelah perubahan diterbitkan dianggap sebagai persetujuan Anda terhadap ketentuan yang terbaru.',
    },
    {
      title: '11. Batasan Tanggung Jawab',
      content:
        'MATAMATA menyediakan informasi, edukasi, dan konsultasi dengan sebaik mungkin. Namun, kami tidak menjamin bahwa setiap informasi yang diberikan selalu akurat, lengkap, atau sesuai kondisi perangkat tertentu di setiap waktu. Kami tidak bertanggung jawab atas kerugian, kehilangan data, atau konsekuensi hukum yang timbul dari penggunaan informasi atau layanan kami.',
    },
    {
      title: '12. Kontak',
      content:
        'Untuk pertanyaan terkait ketentuan penggunaan ini, Anda dapat menghubungi MATAMATA melalui WhatsApp yang tersedia di website ini atau melalui email kontak yang tersedia di halaman resmi kami.',
    },
  ];

  return (
    <>
      <SEO
        title="Ketentuan Penggunaan"
        description="Ketentuan penggunaan layanan konsultasi dan edukasi monitoring perangkat MATAMATA."
        path="/ketentuan-penggunaan"
      />
      <section className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="mx-auto max-w-article px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-warm-500 dark:text-warm-400">
              <li><a href="/" className="hover:text-secondary-600 dark:hover:text-secondary-400">Beranda</a></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-warm-700 dark:text-warm-300" aria-current="page">Ketentuan Penggunaan</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">
            Ketentuan Penggunaan
          </h1>
          <p className="text-sm text-warm-500 dark:text-warm-500 mb-12">
            Terakhir diperbarui: 25 September 2026
          </p>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-bold text-warm-800 dark:text-warm-200 mb-3">{section.title}</h2>
                <p className="text-warm-600 dark:text-warm-400 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}












