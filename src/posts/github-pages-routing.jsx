import ScrollReveal from '../components/ScrollReveal'

export const githubPagesRoutingPost = {
  path: '/Deploy/GitHub Pages 경로 실험',
  category: 'Deploy',
  title: 'GitHub Pages 경로 실험',
  summary:
    '정적 사이트에서도 보기 좋은 글 주소를 유지하려면 라우팅과 404 처리 방식을 함께 맞춰야 합니다.',
  Page() {
    return (
      <>
        <ScrollReveal animation="fade-up" className="article-block article-block--hero">
          <p className="eyebrow">Deploy</p>
          <h2>GitHub Pages 경로 실험</h2>
          <p className="article-block__lead">
            정적 사이트에서도 보기 좋은 글 주소를 유지하려면 라우팅과 404
            처리 방식을 함께 맞춰야 합니다.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>이번 구조에서 한 일</h3>
            <p>
              직접 `/카테고리/글 제목` 경로로 들어왔을 때도 메인 앱이 다시 해당
              포스트를 찾을 수 있게 우회 리다이렉트를 추가했습니다.
            </p>
            <p>
              그래서 공유 링크나 새로고침에서도 동일한 주소 체계를 유지할 수
              있습니다.
            </p>
          </div>
        </ScrollReveal>
      </>
    )
  },
}
