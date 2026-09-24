import { useEffect, useState } from 'react';
import { X, MessageCircle, Info } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface ProofEntry {
  name: string;
  detail: string;
  message: string;
  time: string;
}

const demoData: ProofEntry[] = [
  { name: 'And***', detail: '+62 812-***-**45', message: 'Konsultasi paket monitoring', time: '2 menit lalu' },
  { name: 'Bud***', detail: 'de***@gmail.com', message: 'Tanya kompatibilitas perangkat', time: '5 menit lalu' },
  { name: 'Cin***', detail: '+62 813-***-**89', message: 'Info paket tahunan', time: '12 menit lalu' },
  { name: 'Dew***', detail: 'sa***@yahoo.com', message: 'Konsultasi penggunaan legal', time: '18 menit lalu' },
  { name: 'Eka***', detail: '+62 821-***-**23', message: 'Tanya cara kerja layanan', time: '25 menit lalu' },
];

export default function SocialProofPopup() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
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
        setIndex((prev) => (prev + 1) % demoData.length);
        setVisible(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [visible, dismissed]);

  if (dismissed || !siteConfig.socialProof.enabled) return null;

  const entry = demoData[index];

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
            <span className="text-xs font-semibold text-warm-800 dark:text-warm-200">Konsultasi Baru</span>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-warm-400 hover:text-warm-600 dark:hover:text-warm-200"
            aria-label="Tutup notifikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-warm-700 dark:text-warm-300 font-medium">{entry.name}</p>
        <p className="text-xs text-warm-500 dark:text-warm-400 mb-1">{entry.detail}</p>
        <p className="text-sm text-warm-600 dark:text-warm-400">{entry.message}</p>
        <p className="text-xs text-warm-400 dark:text-warm-500 mt-2">{entry.time}</p>
        {siteConfig.socialProof.demoMode && (
          <div className="flex items-center gap-1 mt-3 pt-3 border-t border-warm-100 dark:border-warm-700">
            <Info className="w-3 h-3 text-warm-400" />
            <span className="text-xs text-warm-400 dark:text-warm-500">Data simulasi untuk demonstrasi</span>
          </div>
        )}
      </div>
    </div>
  );
}
