export const CONTACT_INFO = {
  phone: "+916364917021",
  formattedPhone: "+91 636491 7021",
  email: "info@krutikalpa.com",
  supportEmail: "support@krutikalpa.com",
  whatsappPhone: "916364917021", // no leading '+' or '00' for wa.me
  whatsappMessage: "Hi Krutikalpa Team, I would like to know more about your services.",
  emailSubject: "Website Inquiry",
  emailBody: "Hello Krutikalpa Team,\n\nI would like to know more about your services.\n\nThank you.",
  smsMessage: "Hello Krutikalpa Team, I want to know more about your services."
};

// Pre-built URLs to avoid run-time encoding overhead
export const CONTACT_LINKS = {
  phone: `tel:${CONTACT_INFO.phone}`,
  email: `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(CONTACT_INFO.emailSubject)}&body=${encodeURIComponent(CONTACT_INFO.emailBody)}`,
  supportEmail: `mailto:${CONTACT_INFO.supportEmail}?subject=${encodeURIComponent(CONTACT_INFO.emailSubject)}&body=${encodeURIComponent(CONTACT_INFO.emailBody)}`,
  whatsapp: `https://wa.me/${CONTACT_INFO.whatsappPhone}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`,
  sms: `sms:${CONTACT_INFO.phone}?body=${encodeURIComponent(CONTACT_INFO.smsMessage)}`
};
