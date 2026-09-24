export const siteConfig = {
  name: 'MATAMATA',
  tagline: 'Jasa Pengawas Aplikasi WhatsApp Jarak Jauh',
  description:
    'Kenali kemampuan layanan monitoring WA Jarak Jauh, persyaratan kompatibilitas, serta penggunaannya secara transparan dan bertanggung jawab.',
  url: 'PUBLIC_SITE_URL',
  whatsapp: {
    enabled: true,
    number: 'ISI_NOMOR_WHATSAPP',
  },
  analytics: {
    enabled: false,
    provider: 'google-analytics',
    measurementId: '',
  },
  socialProof: {
    enabled: true,
    demoMode: true,
  },
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
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}
