import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsappUrl}
      className="floating-whatsapp"
      aria-label="Chamar a SOS Ótica no WhatsApp"
    >
      <Image src={site.logoIcon} width={30} height={30} alt="" aria-hidden="true" />
      <span>WhatsApp</span>
      <MessageCircle size={17} aria-hidden="true" />
    </a>
  );
}
