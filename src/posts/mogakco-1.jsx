import ScrollReveal from '../components/ScrollReveal'
import mogakco0704 from '../assets/모각코0704_1.png'

const figureStyle = {
  margin: '8px 0 0',
  borderRadius: '20px',
  overflow: 'hidden',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  background: 'rgba(248, 250, 252, 0.94)',
}

const figureImageStyle = {
  display: 'block',
  width: '100%',
  height: 'auto',
}

const summaryGridStyle = {
  display: 'grid',
  gap: '14px',
  margin: '16px 0 0',
}

const summaryCardStyle = {
  display: 'grid',
  gap: '6px',
  padding: '18px 20px',
  borderRadius: '18px',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.94))',
}

const summaryLabelStyle = {
  fontSize: '0.85rem',
  fontWeight: 700,
  letterSpacing: '0.04em',
  color: '#64748b',
}

const summaryValueStyle = {
  fontSize: '1.05rem',
  fontWeight: 700,
  color: '#0f172a',
}

const summaryRows = [
  { label: '목표', value: '계획 정하기' },
  { label: '활동 기한', value: '매주 토요일 16시' },
  { label: '결과', value: 'Agentic RAG 공부하기' },
]

export const mogakco1Post = {
  path: '/모각코/모각코 1회차',
  category: '모각코',
  title: '모각코 1회차',
  summary:
    '모각코 첫 번째 모임. 이번 회차의 목표는 앞으로의 활동 계획을 정하는 것이었고, 그 결과로 Agentic RAG 공부를 다음 주제로 정했다.',
  Page() {
    return (
      <>
        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>모임 요약</h3>
            <p>2026년 7월 4일 16시, 모각코 첫 번째 모임을 진행했다.</p>
            <div style={summaryGridStyle}>
              {summaryRows.map((row) => (
                <div key={row.label} style={summaryCardStyle}>
                  <span style={summaryLabelStyle}>{row.label}</span>
                  <span style={summaryValueStyle}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>현장 사진</h3>
            <figure style={figureStyle}>
              <img
                src={mogakco0704}
                alt="모각코 1회차 현장 사진"
                style={figureImageStyle}
              />
            </figure>
          </div>
        </ScrollReveal>
      </>
    )
  },
}
