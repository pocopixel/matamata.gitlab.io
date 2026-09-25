import { useEffect, useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface InquiryEntry {
  topic: string;
  message: string;
}

interface CustomerSample {
  name: string;
  city: string;
  phone: string;
  email: string;
  question: string;
  time: string;
}

const generalQuestions: InquiryEntry[] = [
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

const cityList = [
  'Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta', 'Semarang', 'Medan', 'Makassar',
  'Palembang', 'Bogor', 'Depok', 'Bekasi', 'Malang', 'Solo', 'Bali', 'Pekanbaru',
  'Banjarmasin', 'Balikpapan', 'Cirebon', 'Pontianak', 'Banda Aceh', 'Denpasar',
  'Padang', 'Samarinda', 'Mataram', 'Kupang', 'Ambon', 'Jayapura', 'Gorontalo',
  'Manado', 'Tegal', 'Kediri', 'Blitar', 'Sukabumi', 'Tasikmalaya', 'Cimahi',
  'Madiun', 'Kudus', 'Banyuwangi', 'Tangerang', 'Serang'
];

const firstNames = [
  'Adit', 'Sari', 'Rian', 'Maya', 'Doni', 'Nina', 'Arif', 'Lina', 'Yoga', 'Putri',
  'Bagus', 'Tika', 'Rizal', 'Dian', 'Hendra', 'Wulan', 'Bayu', 'Intan', 'Fikri',
  'Citra', 'Agus', 'Novi', 'Raka', 'Elsa', 'Taufik', 'Vina', 'Yusuf', 'Rani', 'Ilham',
  'Mega', 'Deni', 'Aulia', 'Gilang', 'Nanda', 'Wahyu', 'Fitri', 'Reza', 'Lilis', 'Dika',
  'Mira', 'Rendy', 'Yuni', 'Fauzan', 'Nisa', 'Adnan', 'Riska', 'Arman', 'Salsa', 'Joko',
  'Anisa', 'Robby', 'Dewi', 'Galih', 'Nadia', 'Eko', 'Desi', 'Rafi', 'Mila', 'Sandi',
  'Aisyah', 'Damar', 'Niken', 'Iqbal', 'Yulia', 'Hafiz', 'Siska', 'Rangga', 'Tari',
  'Fajar', 'Laras', 'Bima', 'Meylani', 'Rizky', 'Indah', 'Ari', 'Novianti', 'Daffa',
  'Sinta', 'Rizwan', 'Mutiara', 'Andre', 'Rina', 'Fauzi', 'Vera', 'Dimas', 'Lukman',
  'Ayu', 'Farhan', 'Novi', 'Rizal', 'Tiara', 'Yudha', 'Maya', 'Beni', 'Rara', 'Heri',
  'Nanda', 'Fina', 'Rendi', 'Niken'
];

const questionTemplates = [
  'Apakah perangkat saya kompatibel untuk fitur utama?',
  'Bagaimana cara mengecek versi perangkat sebelum memilih paket?',
  'Saya ingin tahu apakah aplikasi WhatsApp tersedia di perangkat saya.',
  'Apakah fitur lokasi dan kompatibilitas perangkatnya bisa dicek dulu?',
  'Bisakah saya bertanya soal paket dan pembiayaan sebelum order?',
  'Apakah ada batasan fitur untuk perangkat iPhone atau Android?',
  'Saya masih ragu apakah perangkat saya bisa digunakan untuk fitur ini.',
  'Bagaimana cara memastikan akses perangkat masih sesuai ketentuan?',
  'Apakah aplikasi Facebook dan Instagram masuk dalam fitur yang tersedia?',
  'Saya mau cek apakah perangkat saya sudah memenuhi persyaratan layanan.',
  'Apakah ada panduan yang bisa dijelaskan sebelum saya memilih paket?',
  'Saya ingin menanyakan soal dukungan teknis dan aktivasi lebih lanjut.'
];

function maskName(name: string) {
  if (!name) return 'Pelanggan';
  const trimmed = name.trim();
  if (trimmed.length <= 2) return `${trimmed[0] || 'P'}***`;
  return `${trimmed.slice(0, 2)}${'*'.repeat(Math.max(3, trimmed.length - 2))}`;
}

function maskPhone(phone: string) {
  const digits = phone.replace(/\D/g, '').slice(-9);
  if (!digits) return '+62 8*** ****';
  return `+62 8${'*'.repeat(4)} ${digits.slice(-4)}`;
}

function maskEmail(email: string) {
  if (!email) return 'p***@gmail.com';
  const [local, domain] = email.split('@');
  if (!local || !domain) return 'p***@gmail.com';
  const maskedLocal = `${local.slice(0, 1)}${'*'.repeat(Math.max(2, local.length - 1))}`;
  return `${maskedLocal}@${domain}`;
}

function getRandomTime() {
  const minutesAgo = Math.floor(Math.random() * 27) + 1;
  if (minutesAgo < 5) return 'baru saja';
  if (minutesAgo < 20) return `${minutesAgo} menit lalu`;
  return `${minutesAgo} menit lalu`;
}

const customerSamples: CustomerSample[] = Array.from({ length: 50 }, (_, index) => {
  const firstName = firstNames[(index * 7) % firstNames.length];
  const city = cityList[(index * 11) % cityList.length];
  const rawPhone = `08${String(Math.floor(100000000 + Math.random() * 900000000))}`;
  const local = `${firstName.toLowerCase()}${String(index + 1)}`;
  const domain = ['gmail.com', 'yahoo.com', 'outlook.com'][index % 3];

  return {
    name: maskName(firstName),
    city,
    phone: maskPhone(rawPhone),
    email: maskEmail(`${local}@${domain}`),
    question: questionTemplates[index % questionTemplates.length],
    time: getRandomTime(),
  };
});

function getRandomIndex(except?: number) {
  const total = customerSamples.length + generalQuestions.length;
  let index = Math.floor(Math.random() * total);

  if (except !== undefined) {
    while (index === except) {
      index = Math.floor(Math.random() * total);
    }
  }

  return index;
}

export default function SocialProofPopup() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<'question' | 'customer'>('question');
  const [index, setIndex] = useState(() => getRandomIndex());
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!siteConfig.socialProof.enabled || dismissed) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const showQuestion = () => {
      if (cancelled) return;
      setMode('question');
      setIndex((prev) => {
        let next = Math.floor(Math.random() * generalQuestions.length);
        while (next === prev && generalQuestions.length > 1) {
          next = Math.floor(Math.random() * generalQuestions.length);
        }
        return next;
      });
      setVisible(true);

      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setVisible(false);
          const delay = 20000 + Math.random() * 15000;
          timers.push(
            setTimeout(() => {
              if (cancelled) return;
              setMode('customer');
              setIndex((previous) => {
                let next = Math.floor(Math.random() * customerSamples.length);
                while (next === previous && customerSamples.length > 1) {
                  next = Math.floor(Math.random() * customerSamples.length);
                }
                return next;
              });
              setVisible(true);
            }, delay)
          );
        }, 10000)
      );
    };

    const showCustomer = () => {
      if (cancelled) return;
      setMode('customer');
      setIndex((prev) => {
        let next = Math.floor(Math.random() * customerSamples.length);
        while (next === prev && customerSamples.length > 1) {
          next = Math.floor(Math.random() * customerSamples.length);
        }
        return next;
      });
      setVisible(true);

      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setVisible(false);
          const delay = 20000 + Math.random() * 15000;
          timers.push(
            setTimeout(() => {
              if (cancelled) return;
              setMode('question');
              setIndex((previous) => {
                let next = Math.floor(Math.random() * generalQuestions.length);
                while (next === previous && generalQuestions.length > 1) {
                  next = Math.floor(Math.random() * generalQuestions.length);
                }
                return next;
              });
              setVisible(true);
            }, delay)
          );
        }, 10000)
      );
    };

    timers.push(setTimeout(() => {
      if (cancelled) return;
      showQuestion();
    }, 8000));

    return () => {
      cancelled = true;
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [dismissed]);

  if (dismissed || !siteConfig.socialProof.enabled) return null;

  const question = generalQuestions[index] ?? generalQuestions[0];
  const customer = customerSamples[index % customerSamples.length];

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
            <span className="text-xs font-semibold text-warm-800 dark:text-warm-200">
              {mode === 'question' ? 'Pertanyaan Umum' : 'Pelanggan Baru'}
            </span>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-warm-400 hover:text-warm-600 dark:hover:text-warm-200"
            aria-label="Tutup notifikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {mode === 'question' ? (
          <>
            <p className="text-xs text-secondary-600 dark:text-secondary-400 font-medium">{question.topic}</p>
            <p className="text-sm text-warm-600 dark:text-warm-400 mt-1">{question.message}</p>
          </>
        ) : (
          <>
            <p className="text-sm text-warm-700 dark:text-warm-300 font-medium">{customer.name}</p>
            <p className="text-xs text-warm-500 dark:text-warm-400 mb-1">{customer.city}</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">{customer.phone}</p>
            <p className="text-xs text-warm-500 dark:text-warm-400">{customer.email}</p>
            <p className="text-sm text-warm-600 dark:text-warm-400 mt-2">{customer.question}</p>
            <p className="text-[11px] text-warm-400 dark:text-warm-500 mt-2">{customer.time}</p>
          </>
        )}
      </div>
    </div>
  );
}
