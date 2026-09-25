import { useEffect, useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface InquiryEntry {
  topic: string;
  message: string;
}

// Pertanyaan anonim berbasis topik layanan. Notifikasi ini tidak mengklaim berasal
// dari pengguna tertentu atau menunjukkan aktivitas transaksi secara real-time.
const inquiryContent: InquiryEntry[] = [
  { topic: 'Kompatibilitas perangkat', message: 'Apakah perangkat Android saya kompatibel?' },
  { topic: 'Kompatibilitas perangkat', message: 'Bagaimana cara mengecek kompatibilitas iPhone?' },
  { topic: 'WhatsApp', message: 'Fitur apa saja yang tersedia untuk WhatsApp?' },
  { topic: 'Facebook', message: 'Apakah fitur Facebook tersedia pada perangkat saya?' },
  { topic: 'Instagram', message: 'Bagaimana dukungan monitoring Instagram bekerja?' },
  { topic: 'Snapchat', message: 'Apakah Snapchat termasuk aplikasi yang didukung?' },
  { topic: 'Paket layanan', message: 'Saya ingin mengetahui pilihan paket yang tersedia.' },
  { topic: 'Harga', message: 'Apakah harga lisensi menggunakan sistem sekali bayar?' },
  { topic: 'Harga', message: 'Bagaimana cara mendapatkan informasi harga terbaru?' },
  { topic: 'Konsultasi', message: 'Saya ingin berkonsultasi sebelum memilih paket.' },
  { topic: 'Penggunaan legal', message: 'Apa saja ketentuan penggunaan layanan yang sah?' },
  { topic: 'Privasi', message: 'Bagaimana data konsultasi saya dilindungi?' },
  { topic: 'Aktivasi', message: 'Bagaimana proses aktivasi layanan dilakukan?' },
  { topic: 'Instalasi', message: 'Apakah proses konfigurasi memerlukan bantuan teknis?' },
  { topic: 'Lokasi perangkat', message: 'Apakah informasi lokasi memerlukan izin khusus?' },
  { topic: 'Log panggilan', message: 'Apakah fitur log panggilan tersedia di semua perangkat?' },
  { topic: 'Aplikasi terpasang', message: 'Bisakah saya mengetahui batasan fitur aplikasi terpasang?' },
  { topic: 'Aktivitas web', message: 'Apakah aktivitas browser dapat tersedia di perangkat saya?' },
  { topic: 'Koneksi internet', message: 'Apakah perangkat harus selalu terhubung ke internet?' },
  { topic: 'Batasan fitur', message: 'Mengapa fitur dapat berbeda antara Android dan iOS?' },
  { topic: 'Konsultasi keluarga', message: 'Saya ingin memahami opsi monitoring keluarga yang bertanggung jawab.' },
  { topic: 'Perangkat perusahaan', message: 'Apakah layanan dapat digunakan untuk perangkat organisasi?' },
  { topic: 'Jumlah perangkat', message: 'Berapa perangkat yang dapat dicakup dalam satu paket?' },
  { topic: 'Masa penggunaan', message: 'Berapa lama masa aktif layanan yang tersedia?' },
  { topic: 'Dukungan teknis', message: 'Apakah tersedia panduan jika mengalami kendala konfigurasi?' },
  { topic: 'WhatsApp', message: 'Apakah versi aplikasi WhatsApp memengaruhi kompatibilitas?' },
  { topic: 'Facebook Messenger', message: 'Apakah Facebook dan Messenger memiliki batasan yang berbeda?' },
  { topic: 'Instagram', message: 'Apakah semua aktivitas Instagram dapat tersedia?' },
  { topic: 'Snapchat', message: 'Apa batasan fitur untuk aplikasi Snapchat?' },
  { topic: 'Keamanan akun', message: 'Bagaimana cara menjaga keamanan akun layanan?' },
  { topic: 'Izin perangkat', message: 'Izin apa yang perlu diperiksa sebelum konfigurasi?' },
  { topic: 'Perubahan nomor', message: 'Apa yang perlu dilakukan jika nomor perangkat berubah?' },
  { topic: 'Perangkat prepaid', message: 'Apakah perangkat dengan layanan prepaid dapat kompatibel?' },
  { topic: 'Pembaruan sistem', message: 'Apakah pembaruan sistem operasi dapat memengaruhi fitur?' },
  { topic: 'iPhone', message: 'Apa perbedaan dukungan fitur pada iPhone?' },
  { topic: 'Android', message: 'Apa persyaratan umum untuk perangkat Android?' },
  { topic: 'Dashboard', message: 'Informasi apa yang dapat dilihat melalui dashboard?' },
  { topic: 'Ketersediaan layanan', message: 'Bagaimana cara memastikan layanan masih tersedia?' },
  { topic: 'Kebijakan privasi', message: 'Di mana saya dapat membaca kebijakan privasi MATAMATA?' },
  { topic: 'Ketentuan penggunaan', message: 'Di mana saya dapat membaca ketentuan penggunaan?' },
  { topic: 'Pembayaran', message: 'Metode pembayaran apa yang tersedia?' },
  { topic: 'Harga', message: 'Apakah ada biaya bulanan atau biaya tambahan?' },
  { topic: 'Kompatibilitas aplikasi', message: 'Apakah versi aplikasi yang berbeda memengaruhi fitur?' },
  { topic: 'Penggunaan berizin', message: 'Bagaimana memastikan penggunaan saya tetap berizin?' },
  { topic: 'Bantuan memilih paket', message: 'Paket mana yang sesuai untuk kebutuhan saya?' },
  { topic: 'Data perangkat', message: 'Data apa yang dapat tersedia dari perangkat yang kompatibel?' },
  { topic: 'Batasan teknis', message: 'Apa saja batasan teknis yang perlu saya ketahui?' },
  { topic: 'Konsultasi WhatsApp', message: 'Bagaimana cara menghubungi tim konsultasi?' },
  { topic: 'Informasi layanan', message: 'Saya ingin mendapatkan penjelasan singkat tentang layanan.' },
  { topic: 'Verifikasi perangkat', message: 'Bisakah kompatibilitas perangkat saya diverifikasi terlebih dahulu?' },
];

function getRandomIndex(except?: number) {
  if (inquiryContent.length < 2) return 0;
  let next = Math.floor(Math.random() * inquiryContent.length);
  while (next === except) next = Math.floor(Math.random() * inquiryContent.length);
  return next;
}

export default function SocialProofPopup() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(() => getRandomIndex());
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!siteConfig.socialProof.enabled || dismissed) return;

    const firstTimer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(firstTimer);
  }, [dismissed]);

  useEffect(() => {
    if (!visible || dismissed) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((previous) => getRandomIndex(previous));
        setVisible(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [visible, dismissed]);

  if (dismissed || !siteConfig.socialProof.enabled) return null;

  const inquiry = inquiryContent[index];

  return (
    <div
      className={`fixed bottom-24 left-6 z-40 max-w-xs transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="bg-white dark:bg-warm-800 rounded-xl shadow-lg border border-warm-200 dark:border-warm-700 p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-success-100 dark:bg-success-900/40">
              <MessageCircle className="w-4 h-4 text-success-600 dark:text-success-400" />
            </span>
            <span className="text-xs font-semibold text-warm-800 dark:text-warm-200">Pertanyaan Umum</span>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-warm-400 hover:text-warm-600 dark:hover:text-warm-200"
            aria-label="Tutup notifikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-secondary-600 dark:text-secondary-400 font-medium">{inquiry.topic}</p>
        <p className="text-sm text-warm-600 dark:text-warm-400 mt-1">{inquiry.message}</p>
      </div>
    </div>
  );
}
