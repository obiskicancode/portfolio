import { GithubIcon, LinkedinIcon, XIcon } from '@/components/icons/SocialIcons'
import config from '@/config'
import { Mail } from 'lucide-react'

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/obiskicancode',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/obiskicancode',
    icon: LinkedinIcon,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/obiskicancode',
    icon: XIcon,
  },
  {
    name: 'Email',
    url: `mailto:${config.SITE.contactAddress}`,
    icon: Mail,
  },
]

interface SocialLinksProps {
  className?: string
  iconSize?: number
}

export default function SocialLinks({ className = '', iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target={social.name === 'Email' ? '_self' : '_blank'}
          rel={social.name === 'Email' ? '' : 'noopener noreferrer me'}
          aria-label={social.name}
          title={social.name}
          className="group inline-flex items-center justify-center p-2 text-zinc-600 transition-all duration-300 hover:text-emerald-600 active:scale-95"
        >
          <social.icon size={iconSize} className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      ))}
    </div>
  )
}
