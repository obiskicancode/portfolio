import nodemailer, { SendMailOptions, Transporter } from 'nodemailer'

import config from '@/config'

let transporter: Transporter

function createTransporter(): Transporter {
  if (config.nodeEnv === 'development') {
    return nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: config.MAIL.mailtrap.user,
        pass: config.MAIL.mailtrap.pass,
      },
    })
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.MAIL.gmail.user,
      pass: config.MAIL.gmail.pass,
    },
  })
}

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = createTransporter()
  }
  return transporter
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

interface SmtpError extends Error {
  responseCode?: number
}

async function send_mail({
  from = config.MAIL.account,
  to,
  html,
  subject,
  ...rest
}: SendMailOptions) {
  const MAX_RETRIES = 3
  const BACKOFF_DELAYS = [1000, 3000] // 1s for first retry, 3s for second
  
  let attempt = 0
  
  while (attempt < MAX_RETRIES) {
    try {
      const result = await getTransporter().sendMail({
        from,
        to,
        subject,
        html,
        ...rest,
      })
      return result
    } catch (err: unknown) {
      const error = err as SmtpError
      attempt++
      
      // Do not retry on 4xx client/auth errors (400-499), but retry 5xx server errors or transient network failures
      const isTransient = !error.responseCode || error.responseCode >= 500
      
      if (!isTransient || attempt >= MAX_RETRIES) {
        console.error(`[Mail Service] Failed to send email to ${to} after ${attempt} attempts:`, error)
        throw error
      }
      
      console.warn(`[Mail Service] Transient failure sending to ${to} (Attempt ${attempt}/${MAX_RETRIES}). Retrying in ${BACKOFF_DELAYS[attempt - 1]}ms...`)
      await delay(BACKOFF_DELAYS[attempt - 1])
    }
  }
}

export default send_mail
