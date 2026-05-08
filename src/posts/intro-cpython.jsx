import heroImage from '../assets/hero.png'
import ScrollReveal from '../components/ScrollReveal'

export const introCpythonPost = {
  path: '/Cpython/intro Cpython',
  category: 'Cpython',
  title: 'intro Cpython',
  summary:
    'CPython을 처음 읽을 때는 소스 파일보다 실행 흐름을 먼저 잡는 편이 훨씬 이해가 빠릅니다.',
  Page() {
    return (
      <>
        <ScrollReveal animation="fade-up" className="article-block article-block--hero">
          <p className="eyebrow">CPython Deep Dive</p>
          <h2>intro Cpython</h2>
          <p className="article-block__lead">
            CPython은 파이썬 문법을 실제로 실행 가능한 동작으로 바꾸는 기준
            구현체입니다. 처음 읽을 때는 소스 파일 하나하나보다 프로세스 시작,
            초기화, 컴파일, 평가 루프라는 큰 흐름을 먼저 잡는 편이 훨씬
            이해가 빠릅니다.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="zoom" className="article-block article-block--image">
          <figure className="article-figure">
            <img src={heroImage} alt="CPython flow illustration" />
            <figcaption>
              포스트 안에 이미지를 직접 배치하고, 큰 소개 섹션처럼 사용할 수
              있습니다.
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal animation="slide-left" className="article-block">
          <div className="article-split">
            <div className="article-copy">
              <h3>처음 볼 때 잡아둘 실행 흐름</h3>
              <p>
                CPython을 읽기 시작하면 함수 이름과 디렉터리 구조에 먼저
                압도되기 쉽습니다. 그래서 지금은 어디서 시작해서 어떤 단계로
                실행되는가만 따라가는 것이 좋습니다.
              </p>
              <p>
                런타임 초기화가 끝나면 소스는 토큰화와 파싱을 거쳐 코드 객체로
                바뀌고, 그다음 evaluation loop에서 바이트코드가 실제로
                실행됩니다.
              </p>
            </div>

            <aside className="article-note">
              <p className="article-note__title">Scroll Animation</p>
              <p>
                이 페이지 파일 안에서는 필요한 블록에만 애니메이션을 넣고,
                나머지는 정적인 문서처럼 둘 수 있습니다.
              </p>
              <ul className="article-note__list">
                <li>프로세스 시작과 인자 처리</li>
                <li>런타임 초기화와 기본 모듈 준비</li>
                <li>AST와 바이트코드 생성</li>
                <li>evaluation loop 진입</li>
              </ul>
            </aside>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <h3>이번 페이지에서 같이 보는 포인트</h3>
          <div className="article-feature-grid">
            <article className="feature-card">
              <span className="feature-card__label">Entry</span>
              <strong>main</strong>
              <p>실행 시작점과 인자 해석 위치를 먼저 잡습니다.</p>
            </article>
            <article className="feature-card">
              <span className="feature-card__label">Compile</span>
              <strong>Parser</strong>
              <p>문법이 코드 객체로 바뀌는 흐름을 훑습니다.</p>
            </article>
            <article className="feature-card">
              <span className="feature-card__label">Run</span>
              <strong>Eval Loop</strong>
              <p>생성된 바이트코드가 실제로 도는 지점을 확인합니다.</p>
            </article>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <blockquote className="article-quote">
            <p>
              처음부터 전부 이해하려 하기보다, 한 번 읽을 때는 한 단계의
              역할만 붙잡는 편이 훨씬 오래 남는다.
            </p>
            <cite>Jake Kim note</cite>
          </blockquote>
        </ScrollReveal>
      </>
    )
  },
}
