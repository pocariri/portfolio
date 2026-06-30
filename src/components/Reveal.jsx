import { useReveal } from '../hooks/useReveal'

// 자식을 감싸 스크롤 진입 시 페이드/슬라이드 등장시키는 래퍼
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
