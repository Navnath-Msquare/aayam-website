import React from 'react';

export default function WhatsAppButton({ phoneNumber = '9876543210' }) {
  // International format for India: 91 + 10 digits
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const internationalNumber = cleanNumber.startsWith('91') ? cleanNumber : `91${cleanNumber}`;
  const whatsappUrl = `https://wa.me/${internationalNumber}?text=Hello%20AAYAM%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%20platform.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip / Label */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp 9876543210"
        className="flex items-center bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:p-4 rounded-full shadow-[0_10px_25px_-4px_rgba(37,211,102,0.5),0_4px_10px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_32px_-4px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Soft Animated Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white flex-shrink-0"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.496 2 2 6.5 2 12.043c0 1.947.558 3.766 1.523 5.309L2 22l4.828-1.488a9.988 9.988 0 0 0 5.203 1.531h.004c5.535 0 10.031-4.5 10.031-10.043 0-2.684-1.043-5.207-2.938-7.102A10.007 10.007 0 0 0 12.031 2zm0 18.25c-1.688 0-3.344-.453-4.793-1.312l-.344-.207-3.559 1.098 1.117-3.469-.227-.36a8.21 8.21 0 0 1-1.262-4.457c0-4.563 3.715-8.273 8.281-8.273 2.215 0 4.297.863 5.86 2.426 1.563 1.563 2.426 3.648 2.426 5.863 0 4.566-3.715 8.277-8.285 8.277zm4.539-6.195c-.25-.125-1.477-.73-1.707-.812-.227-.086-.395-.125-.563.125-.164.25-.648.812-.797.98-.145.168-.293.188-.543.063-.25-.125-1.055-.39-2.012-1.242-.746-.664-1.25-1.484-1.398-1.734-.145-.25-.016-.387.109-.512.113-.113.25-.293.375-.438.125-.145.168-.25.25-.418.086-.168.043-.312-.02-.438-.063-.125-.563-1.355-.773-1.855-.203-.492-.41-.422-.563-.43l-.48-.008c-.168 0-.438.063-.668.312-.227.25-.875.855-.875 2.086s.895 2.418 1.02 2.586c.125.168 1.762 2.695 4.266 3.777.598.258 1.063.414 1.426.531.6.191 1.148.164 1.582.1.484-.07 1.477-.605 1.688-1.188.207-.586.207-1.086.145-1.188-.063-.102-.227-.164-.477-.289z" />
        </svg>

        {/* Expandable Text Pill on Hover */}
        <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap group-hover:ml-2.5 font-semibold text-xs sm:text-sm tracking-wide">
          WhatsApp · {phoneNumber}
        </span>
      </a>
    </div>
  );
}
