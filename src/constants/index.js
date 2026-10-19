export const SITE_NAME = 'Nexvia';
export const SITE_DESCRIPTION = 'Nexvia delivers modern PCB design, manufacturing, assembly, and consultancy.';
export const SITE_URL = 'https://nexvia.dev';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Get a Quote', path: '/quote' },
  { label: 'Why Us', path: '/#why-us' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQs', path: '/#faqs' },
];

export const PCB_TYPES = [
  'Single Layer',
  'Double Layer',
  '4 Layer',
  'Multi-layer',
  'Flexible PCB',
];

export const SERVICES = [
  'Design',
  'Manufacturing',
  'Assembly',
  'Consultancy',
  'Full package',
];

export const ACCEPTED_FILE_TYPES =
  '.pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.gbr,.gerber,.kicad_pcb,.sch,.kicad_pro,.rar';

export const EMAILJS_SERVICE_ID = 'service_h86socs';
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_qqwzyjg';
export const EMAILJS_TEMPLATE_NOTIFY = import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFY || 'template_5m5g5vu';
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'jHI94QDvecugQLbhp';

export const FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyARdN29pmDH6gtFuSvlXmCTU1Gcq-cURs0',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'nexviaweb-a9256.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'nexviaweb-a9256',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'nexviaweb-a9256.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '579288051791',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:579288051791:web:1d4e2e51a7373ea885fa3a',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-V84F0KYSK9',
};

export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const CONTACT_INFO = {
  email: 'nexviapcbdesign@gmail.com',
  phone: '+92-327-2122522',
  whatsapp: 'https://wa.me/923272122522',
  location: 'NED University of Engineering & Technology, Karachi, Pakistan',
};

export const FOOTER_TEXT = `\u00a9 ${new Date().getFullYear()} Nexvia PCB Design & Manufacturing, Karachi, Pakistan`;