import ScrollReveal from '../components/ScrollReveal'

export const designDensityPost = {
  path: '/Design/제품 페이지의 밀도 조절',
  category: 'Design',
  title: '제품 페이지의 밀도 조절',
  summary:
    '좋은 제품 페이지는 정보를 많이 담으면서도 읽는 사람이 답답하지 않게 여백과 속도를 조절합니다.',
  Page() {
    return (
      <>
        <ScrollReveal animation="fade-up" className="article-block article-block--hero">
          <p className="eyebrow">Design Journal</p>
          <h2>제품 페이지의 밀도 조절</h2>
          <p className="article-block__lead">
            좋은 제품 페이지는 정보를 많이 담으면서도 읽는 사람이 답답하지
            않게 여백과 속도를 조절합니다.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="slide-left" className="article-block">
          <div className="article-split">
            <div className="article-copy">
              <h3>밀도는 줄이는 게 아니라 배치하는 것</h3>
              <p>
                카드 수를 줄이기보다 정보가 들어오는 순서를 정리하면 체감
                밀도가 달라집니다.
              </p>
              <p>
                큰 제목, 중간 설명, 작은 세부 정보가 계단처럼 내려와야 화면이
                안정됩니다.
              </p>
            </div>

            <aside className="article-note">
              <p className="article-note__title">UI Hint</p>
              <p>
                시선이 머무는 지점을 먼저 크게 만들고, 보조 정보는 더 가볍게
                처리합니다.
              </p>
            </aside>
          </div>
        </ScrollReveal>
      </>
    )
  },
}
