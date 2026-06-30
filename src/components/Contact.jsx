import { contact } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const items = [
    { ico: '📞', label: 'Phone', val: contact.phone, href: `tel:${contact.phone.replace(/-/g, '')}` },
    { ico: '✉️', label: 'Email', val: contact.email, href: `mailto:${contact.email}` },
    { ico: '🐙', label: 'GitHub', val: '@pocariri', href: contact.github, external: true },
  ]

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">
          편하게 <span className="gradient-text">연락</span> 주세요
        </h2>
        <p className="section-lead" style={{ marginInline: 'auto' }}>
          궁금한 점이나 함께하고 싶은 일이 있다면 언제든 환영입니다.
        </p>
      </Reveal>

      <Reveal className="contact-cards" delay={0.05}>
        {items.map((it) => (
          <a
            key={it.label}
            className="contact-card"
            href={it.href}
            {...(it.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          >
            <span className="ico">{it.ico}</span>
            <span className="label">{it.label}</span>
            <span className="val">{it.val}</span>
          </a>
        ))}
      </Reveal>
    </section>
  )
}
