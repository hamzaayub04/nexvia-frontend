import emailjs from '@emailjs/browser';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_TEMPLATE_NOTIFY,
} from '../constants';

let initialized = false;

export const initEmailJS = () => {
  if (!initialized && typeof window !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    initialized = true;
  }
};

export const sendQuoteEmail = async (formElement) => {
  initEmailJS();
  await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formElement);
};

export const sendAdminNotification = async (formElement) => {
  initEmailJS();
  await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_NOTIFY, formElement);
};
