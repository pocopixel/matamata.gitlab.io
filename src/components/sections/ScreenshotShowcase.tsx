import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface Slide {
  id: string;
  label: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 'slide-1',
    label: 'Dashboard Monitoring',
    description: 'Tampilan utama dashboard menampilkan ringkasan status perangkat dan aktivitas terbaru.',
  },
  {
    id: 'slide-2',
    label: 'Aktivitas Pesan',
    description: 'Detail aktivitas pesan pada perangkat yang dimonitor dengan informasi yang tersimpan.',
  },
  {
    id: 'slide-3',
    label: 'Lokasi Perangkat',
    description: 'Informasi lokasi perangkat berdasarkan data GPS dan jaringan yang tersedia.',
  },
  {
    id: 'slide-4',
    label: 'Log Panggilan',
    description: 'Riwayat panggilan telepon yang tersimpan pada perangkat yang dimonitor.',
  },
];

export default function ScreenshotShowcase() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const touchStartX = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isVisible) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-secondary-600 dark:text-secondary-400">
            Tampilan Layanan
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100">
            Tampilan Dashboard Monitoring
          </h2>
          <p className="mt-4 text-warm-600 dark:text-warm-400">
            Pratinjau tampilan antarmuka dashboard monitoring. Screenshot aktual dapat berbeda berdasarkan perangkat dan versi aplikasi.
          </p>
        </div>

        <div
          ref={sliderRef}
          className="relative rounded-2xl overflow-hidden bg-white dark:bg-warm-800 border border-warm-200 dark:border-warm-700 shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label="Screenshot dashboard monitoring"
        >
          <div className="relative aspect-[16/10] bg-warm-100 dark:bg-warm-900">
            {!loaded[current] && (
              <div className="absolute inset-0 animate-pulse bg-warm-200 dark:bg-warm-700" aria-hidden="true" />
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8 max-w-md">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mb-4">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-warm-800 dark:text-warm-200">{slides[current].label}</h3>
                <p className="mt-2 text-sm text-warm-600 dark:text-warm-400">{slides[current].description}</p>
              </div>
            </div>

            <img
              src={`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>`)}`}
              alt={slides[current].label}
              className="hidden"
              onLoad={() => setLoaded((prev) => ({ ...prev, [current]: true }))}
            />
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-warm-800/90 text-warm-700 dark:text-warm-200 shadow-md hover:bg-white dark:hover:bg-warm-800 transition-colors"
            aria-label="Slide sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-warm-800/90 text-warm-700 dark:text-warm-200 shadow-md hover:bg-white dark:hover:bg-warm-800 transition-colors"
            aria-label="Slide berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Pilih slide">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? 'w-8 bg-secondary-600 dark:bg-secondary-400'
                  : 'w-2 bg-warm-300 dark:bg-warm-600 hover:bg-warm-400 dark:hover:bg-warm-500'
              }`}
              aria-label={`Slide ${i + 1}: ${slide.label}`}
              aria-selected={i === current}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
