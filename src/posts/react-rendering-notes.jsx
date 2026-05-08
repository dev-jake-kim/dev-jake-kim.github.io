import ScrollReveal from '../components/ScrollReveal'

export const reactRenderingNotesPost = {
  path: '/React/렌더링 흐름 메모',
  category: 'React',
  title: '렌더링 흐름 메모',
  summary:
    '컴포넌트가 다시 그려질 때 무엇이 트리거였는지 순서대로 기록하면 디버깅 속도가 빨라집니다.',
  Page() {
    return (
      <>
        <ScrollReveal animation="fade-up" className="article-block article-block--hero">
          <p className="eyebrow">React Notes</p>
          <h2>렌더링 흐름 메모</h2>
          <p className="article-block__lead">
            컴포넌트가 다시 그려질 때 무엇이 트리거였는지, 어떤 상태가 화면을
            바꾸는지 순서대로 기록해 두면 디버깅 속도가 확실히 빨라집니다.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>기록 방식</h3>
            <p>
              상태 변경, 파생 값 계산, 실제 화면 반영을 한 줄씩 분리해서 보면
              불필요한 재렌더를 찾기가 쉬워집니다.
            </p>
            <p>
              페이지형 포스트 구조를 쓰면 중간에 코드 이미지나 다이어그램을
              넣어 문서처럼 설명할 수 있습니다.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <blockquote className="article-quote">
            <p>렌더링 최적화는 기법보다 먼저 흐름을 선명하게 이해하는 일이다.</p>
            <cite>React study memo</cite>
          </blockquote>
        </ScrollReveal>
      </>
    )
  },
}
