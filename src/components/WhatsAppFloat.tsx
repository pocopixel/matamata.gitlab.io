import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/config/site';

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink('Halo MATAMATA, saya ingin ngobrol.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-success-600 hover:bg-success-700 text-white shadow-lg transition-all hover:scale-105 animate-fade-in"
      aria-label="Ngobrol via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
