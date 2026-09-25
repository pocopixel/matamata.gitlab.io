import SEO from '@/components/SEO';
import { ChevronRight } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Pendahuluan',
      content:
        'Kebijakan Privasi ini menjelaskan bagaimana MATAMATA mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda mengakses website kami atau berinteraksi melalui layanan konsultasi, WhatsApp, dan kanal komunikasi lainnya. Kebijakan ini berlaku untuk informasi yang diberikan langsung oleh pengguna maupun data yang dikumpulkan saat berinteraksi dengan situs kami.',
    },
    {
      title: '2. Data yang Dikumpulkan',
      content:
        'MATAMATA dapat mengumpulkan informasi berikut ketika Anda menggunakan layanan kami: nama, nomor WhatsApp, alamat email, detail konsultasi, kebutuhan perangkat, pertanyaan terkait kompatibilitas, serta riwayat komunikasi yang Anda kirimkan kepada kami. Jika terjadi transaksi atau pembayaran, kami juga dapat mencatat data transaksi yang diperlukan untuk proses verifikasi dan administrasi.',
    },
    {
      title: '3. Penggunaan Data',
      content:
        'Data yang kami kumpulkan digunakan untuk keperluan berikut: (a) menjawab pertanyaan dan kebutuhan konsultasi Anda, (b) membantu memilih perangkat, fitur, dan paket yang sesuai, (c) memproses administrasi layanan, (d) meningkatkan kualitas komunikasi dan layanan dukungan, serta (e) memahami kebutuhan pengguna agar layanan kami lebih relevan dan bermanfaat.',
    },
    {
      title: '4. Berbagi Data dengan Pihak Ketiga',
      content:
        'MATAMATA berkomitmen untuk tidak membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum, peraturan yang berlaku, atau diperlukan untuk mendukung proses administrasi, pembayaran, atau layanan yang Anda minta. Dalam keadaan tertentu, data hanya dapat dibagikan kepada penyedia layanan yang membantu operasional kami dan wajib menjaga kerahasiaan data.',
    },
    {
      title: '5. Penyimpanan dan Keamanan Data',
      content:
        'Kami menyimpan data Anda dengan langkah-langkah keamanan yang wajar untuk mencegah akses yang tidak sah, kerusakan, atau penyalahgunaan. Khususnya untuk percakapan melalui WhatsApp, data akan tergantung pada pengaturan keamanan, penyimpanan, dan kebijakan platform yang digunakan. Kami mendorong pengguna untuk menjaga data dan informasi sensitif agar tidak dibagikan secara sembarangan.',
    },
    {
      title: '6. Analytics dan Tracking',
      content:
        'Saat ini, website MATAMATA tidak secara aktif menggunakan layanan analytics pihak ketiga untuk mengumpulkan data perilaku pengguna. Jika di kemudian hari kami menambahkan analytics atau alat pelacakan baru, kebijakan ini akan diperbarui dan Anda akan diinformasikan melalui halaman ini.',
    },
    {
      title: '7. Hak Anda',
      content:
        'Anda memiliki hak untuk: (a) mengakses data pribadi yang kami simpan tentang Anda, (b) meminta koreksi jika ada data yang tidak akurat, (c) meminta penghapusan data Anda sesuai ketentuan yang berlaku, dan (d) membatasi atau menolak penggunaan data Anda untuk kebutuhan tertentu. Untuk permintaan tersebut, silakan hubungi kami melalui kanal komunikasi yang tersedia.',
    },
    {
      title: '8. Privasi Anak-anak',
      content:
        'Layanan MATAMATA tidak ditujukan untuk individu di bawah usia yang diizinkan secara hukum untuk mengelola perangkat atau akun sendiri. Kami tidak sengaja mengumpulkan data pribadi dari anak di bawah umur tanpa persetujuan atau pengawasan orang tua atau wali yang sah. Jika Anda menyadari bahwa data anak telah dikumpulkan tanpa otoritas yang tepat, segera hubungi kami untuk kami tindak lanjuti.',
    },
    {
      title: '9. Penggunaan Informasi Sistem dan Platform',
      content:
        'Informasi yang kami sampaikan terkait perangkat, aplikasi, atau aktivitas digital dimaksudkan untuk edukasi dan konsultasi. Kami tidak mengklaim memiliki akses langsung ke akun, data pribadi, atau komunikasi dari platform seperti WhatsApp, Facebook, Instagram, atau Snapchat, kecuali data yang secara eksplisit diberikan oleh pengguna melalui kanal resmi kami.',
    },
    {
      title: '10. Perubahan Kebijakan',
      content:
        'MATAMATA dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk menyesuaikan dengan perubahan layanan, hukum, atau kebutuhan operasional. Perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan terakhir. Kami menyarankan Anda untuk meninjau halaman ini secara berkala.',
    },
    {
      title: '11. Kontak',
      content:
        'Untuk pertanyaan terkait Kebijakan Privasi ini, akses data pribadi, penghapusan data, atau penggunaan informasi Anda, silakan hubungi MATAMATA melalui WhatsApp yang tersedia di website ini atau melalui email kontak yang tersedia di halaman resmi.',
      contact: true,
    },
  ];

  return (
    <>
      <SEO
        title="Kebijakan Privasi"
        description="Kebijakan privasi MATAMATA — bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda."
        path="/kebijakan-privasi"
      />
      <section className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="mx-auto max-w-article px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-warm-500 dark:text-warm-400">
              <li><a href="/" className="hover:text-secondary-600 dark:hover:text-secondary-400">Beranda</a></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-warm-700 dark:text-warm-300" aria-current="page">Kebijakan Privasi</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-sm text-warm-500 dark:text-warm-500 mb-12">
            Terakhir diperbarui: 25 September 2026
          </p>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-bold text-warm-800 dark:text-warm-200 mb-3">{section.title}</h2>
                <p className="text-warm-600 dark:text-warm-400 leading-relaxed">{section.content}</p>
                {section.contact && (
                  <div className="mt-4 p-4 rounded-lg bg-warm-100 dark:bg-warm-800 border border-warm-200 dark:border-warm-700 text-sm text-warm-600 dark:text-warm-400 space-y-1">
                    <p><strong className="text-warm-800 dark:text-warm-200">Badan Usaha:</strong> [NAMA BADAN USAHA]</p>
                    <p><strong className="text-warm-800 dark:text-warm-200">Alamat:</strong> [ALAMAT USAHA]</p>
                    <p><strong className="text-warm-800 dark:text-warm-200">Email:</strong> [EMAIL KONTAK]</p>
                    <p><strong className="text-warm-800 dark:text-warm-200">WhatsApp:</strong> [NOMOR WHATSAPP]</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}






