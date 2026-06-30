import { categories } from '../data'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

// 분야별 데이터를 한 줄로 펼쳐서 표시 (분야는 카드의 라벨로 노출)
const allProjects = categories.flatMap((cat) =>
  cat.projects.map((p) => ({ ...p, category: cat.label })),
)

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <Reveal>
        <span className="section-eyebrow">Portfolio</span>
        <h2 className="section-title">
          분야별 <span className="gradient-text">프로젝트</span>
        </h2>
        <p className="section-lead">
          프론트엔드·백엔드·모바일을 두루 경험했습니다.
        </p>
      </Reveal>

      <div className="cards">
        {allProjects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
