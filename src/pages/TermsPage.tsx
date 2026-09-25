import SEO from '@/components/SEO';
import { ChevronRight } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      title: '1. Penerimaan Ketentuan',
      content: 'Dengan mengakses dan menggunakan website MATAMATA serta layanan konsultasi yang disediakan, Anda dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan yang tercantum di halaman ini. Jika Anda tidak menyetujui sebagian atau seluruh ketentuan, mohon untuk tidak menggunakan layanan ini.',
    },
    {
      title: '2. Deskripsi Layanan',
      content: 'MATAMATA menyediakan layanan konsultasi dan edukasi seputar layanan monitoring perangkat berbasis MATAMATA. Layanan mencakup informasi kompatibilitas perangkat, pemilihan paket, panduan penggunaan, serta dukungan teknis terkait. MATAMATA bukan pemilik, pengembang, distributor resmi, atau mitra resmi MATAMATA.',
    },
    {
      title: '3. Penggunaan Legal dan Berizin',
      content: 'Penggunaan layanan monitoring perangkat harus dilakukan secara sah dan dengan otoritas yang berizin atas perangkat yang dimonitor. Anda bertanggung jawab untuk memastikan bahwa penggunaan layanan mematuhi seluruh hukum dan peraturan yang berlaku di wilayah yurisdiksi Anda.',
    },
    {
      title: '4. Tanggung Jawab Pengguna',
      content: 'Anda bertanggung jawab penuh atas penggunaan layanan monitoring perangkat. Anda wajib memastikan bahwa penggunaan layanan dilakukan dengan persetujuan yang sah dari pemilik perangkat atau berdasarkan otoritas hukum yang berlaku.',
    },
    {
      title: '5. Larangan Pemantauan Tanpa Izin',
      content: 'Pemantauan perangkat tanpa izin atau persetujuan dari pemilik perangkat yang sah dilarang keras. Penggunaan layanan untuk memantau perangkat milik orang lain tanpa otorisasi yang sah merupakan pelanggaran terhadap ketentuan ini dan dapat melanggar hukum yang berlaku.',
    },
    {
      title: '6. Larangan Penyalahgunaan',
      content: 'Dilarang menggunakan layanan untuk tujuan stalking, penyalahgunaan data, pencurian kredensial, distribusi malware, bypass keamanan, atau aktivasi ilegal lainnya. Pelanggaran ketentuan ini akan mengakibatkan penghentian layanan tanpa pemberitahuan sebelumnya.',
    },
    {
      title: '7. Pembayaran',
      content: 'Jika layanan melibatkan pembayaran untuk paket monitoring, detail pembayaran akan disampaikan melalui konsultasi WhatsApp. Pembayaran dilakukan sesuai prosedur yang disepakati. Informasi mengenai refund, garansi, atau kebijakan pembayaran lainnya akan dijelaskan saat konsultasi.',
    },
    {
      title: '8. Ketersediaan Layanan',
      content: 'MATAMATA berusaha menyediakan layanan secara berkelanjutan. Namun, ketersediaan layanan dapat dipengaruhi oleh pemeliharaan, pembaruan, atau faktor teknis lainnya. MATAMATA tidak menjamin layanan akan tersedia tanpa interupsi.',
    },
    {
      title: '9. Perubahan Ketentuan',
      content: 'MATAMATA berhak mengubah ketentuan ini sewaktu-waktu. Perubahan akan dipublikasikan di halaman ini. Penggunaan layanan setelah perubahan dianggap sebagai persetujuan terhadap ketentuan yang diperbarui.',
    },
    {
      title: '10. Batasan Tanggung Jawab',
      content: 'MATAMATA menyediakan informasi dan konsultasi sebaik mungkin. Namun, MATAMATA tidak bertanggung jawab atas kerugian yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan, termasuk kerugian langsung, tidak langsung, atau konsekuensial.',
    },
    {
      title: '11. Kontak',
      content: 'Untuk pertanyaan terkait ketentuan penggunaan ini, hubungi MATAMATA melalui WhatsApp yang tersedia di website ini atau melalui email kontak yang tersedia.',
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
            Terakhir diperbarui: 22 September 2026
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
