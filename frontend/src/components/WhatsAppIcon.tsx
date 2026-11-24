import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppIconProps {
  className?: string;
  colored?: boolean;
}

export default function WhatsAppIcon({ className = 'w-4 h-4 text-white', colored = false }: WhatsAppIconProps) {
  // Clean Message Icon in White as requested
  return <MessageCircle className={`text-white ${className}`} />;
}
