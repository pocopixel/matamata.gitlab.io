import SEO from '@/components/SEO';
import { ChevronRight } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Pendahuluan',
      content: 'Kebijakan Privasi ini menjelaskan bagaimana Matamata mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan layanan konsultasi dan website kami. Dengan menggunakan layanan ini, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.',
    },
    {
      title: '2. Data yang Dikumpulkan',
      content: 'Matamata mengumpulkan data berikut saat Anda menggunakan layanan kami: nama, nomor WhatsApp, alamat email, informasi transaksi (jika pembayaran dilakukan), percakapan dukungan, dan informasi teknis seperti jenis perangkat dan browser yang Anda gunakan.',
    },
    {
      title: '3. Penggunaan Data',
      content: 'Data yang dikumpulkan digunakan untuk: (a) merespons konsultasi dan pertanyaan Anda, (b) memproses transaksi paket layanan, (c) memberikan dukungan teknis, (d) meningkatkan kualitas layanan dan konten website, dan (e) memenuhi kewajiban hukum yang berlaku.',
    },
    {
      title: '4. Berbagi Data dengan Pihak Ketiga',
      content: 'Matamata tidak membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum atau diperlukan untuk pemrosesan transaksi layanan dengan penyedia layanan monitoring.',
    },
    {
      title: '5. Penyimpanan dan Keamanan Data',
      content: 'Data Anda disimpan dengan langkah-langkah keamanan yang wajar untuk mencegah akses tidak sah. Percakapan WhatsApp disimpan sesuai dengan kebijakan penyimpanan WhatsApp. Data konsultasi disimpan selama diperlukan untuk memberikan layanan dan memenuhi kewajiban hukum.',
    },
    {
      title: '6. Analytics',
      content: 'Saat ini, analytics tidak diaktifkan pada website Matamata. Jika diaktifkan di kemudian hari, kebijakan ini akan diperbarui untuk mencerminkan data yang dikumpulkan dan bagaimana data tersebut digunakan.',
    },
    {
      title: '7. Hak Anda',
      content: 'Anda memiliki hak untuk: (a) mengakses data pribadi yang kami simpan tentang Anda, (b) meminta koreksi data yang tidak akurat, (c) meminta penghapusan data pribadi Anda, dan (d) menarik persetujuan untuk pemrosesan data. Hubungi kami melalui WhatsApp atau email untuk menggunakan hak-hak ini.',
    },
    {
      title: '8. Privasi Anak-anak',
      content: 'Layanan Matamata tidak ditujukan untuk individu di bawah usia 18 tahun. Kami tidak secara sengaja mengumpulkan informasi pribadi dari anak-anak. Jika Anda yakin kami telah mengumpulkan data dari anak-anak, hubungi kami untuk penghapusan.',
    },
    {
      title: '9. Perubahan Kebijakan',
      content: 'Matamata dapat memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan. Kami menganjurkan Anda meninjau halaman ini secara berkana.',
    },
    {
      title: '10. Kontak',
      content: 'Untuk pertanyaan terkait Kebijakan Privasi ini atau penggunaan data pribadi Anda, silakan hubungi:',
      contact: true,
    },
  ];

  return (
    <>
      <SEO
        title="Kebijakan Privasi"
        description="Kebijakan privasi Matamata — bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda."
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
            Terakhir diperbarui: 22 September 2026
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
