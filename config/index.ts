const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  SITE: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://obiski.vercel.app',
    contactAddress: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || 'obiski15@gmail.com',
    mailingAddress: process.env.NEXT_PUBLIC_MAILING_ADDRESS || 'obiski15@gmail.com',
  },
  ANALYTICS: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  },
  MAIL: {
    account: process.env.MAIL_ACCOUNT || '',
    gmail: {
      user: process.env.GMAIL_USER || '',
      pass: process.env.GMAIL_PASS || '',
    },
    mailtrap: {
      user: process.env.MAILTRAP_USER || '',
      pass: process.env.MAILTRAP_PASS || '',
    },
  },
}

export default config
