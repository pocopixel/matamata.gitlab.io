export const siteConfig = {
  name: 'MATAMATA',
  tagline: 'Panduan Monitoring Keluarga untuk Perangkat Digital',
  description: 'Pelajari fitur monitoring perangkat untuk WhatsApp, Facebook, Instagram, Snapchat, dan aplikasi lainnya dengan informasi kompatibilitas, harga, dan penggunaan yang transparan serta berizin.',
  url: 'PUBLIC_SITE_URL',
  whatsapp: { enabled: true, number: 'ISI_NOMOR_WHATSAPP' },
  analytics: { enabled: false, provider: 'google-analytics', measurementId: '' },
  socialProof: { enabled: true },
};

export const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Fitur', href: '/#fitur' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Paket', href: '/#paket' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Ketentuan', href: '/ketentuan-penggunaan' },
  { label: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
];

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp.number.replace(/[^0-9]/g, '')}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
