import PostLink from '../components/PostLink'
import ScrollReveal from '../components/ScrollReveal'

const paperListStyle = {
  margin: '0',
  paddingLeft: '20px',
  color: '#0f172a',
  lineHeight: 1.8,
}

const reviewGridStyle = {
  display: 'grid',
  gap: '14px',
  marginTop: '16px',
}

const reviewCardStyle = {
  display: 'grid',
  gap: '8px',
  padding: '18px 20px',
  borderRadius: '18px',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.94))',
}

const reviewLabelStyle = {
  color: '#64748b',
  fontSize: '0.85rem',
  fontWeight: 700,
}

const reviewValueStyle = {
  color: '#0f172a',
  fontSize: '1rem',
  lineHeight: 1.7,
}

function renderReviewCard(label, children) {
  return (
    <div style={reviewCardStyle}>
      <span style={reviewLabelStyle}>{label}</span>
      <span style={reviewValueStyle}>{children}</span>
    </div>
  )
}

function renderPaperReview({
  eyebrow,
  originalUrl,
  summary,
  abstraction,
  preliminaries,
  breakdown,
  architecture,
  results,
}) {
  return (
    <>
      <ScrollReveal animation="fade-up" className="article-block article-block--hero">
        <p className="eyebrow">{eyebrow}</p>
        <h2>Agentic RAG 논문 리뷰</h2>
        <p className="article-block__lead">{summary}</p>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" className="article-block">
        <div className="article-copy">
          <h3>원문</h3>
          <p>
            <PostLink href={originalUrl}>{originalUrl}</PostLink>
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" className="article-block">
        <div className="article-copy">
          <h3>2줄 요약</h3>
          <p>{summary}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" className="article-block">
        <div className="article-copy">
          <h3>Abstraction</h3>
          <div style={reviewGridStyle}>
            {abstraction.map((item) => (
              <div key={item.label}>
                {renderReviewCard(item.label, item.value)}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" className="article-block">
        <div className="article-copy">
          <h3>Preliminaries</h3>
          <ul style={paperListStyle}>
            {preliminaries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" className="article-block">
        <div className="article-copy">
          <h3>문제 분할</h3>
          <div style={reviewGridStyle}>
            {breakdown.map((item) => (
              <div key={item.label}>
                {renderReviewCard(item.label, item.value)}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" className="article-block">
        <div className="article-copy">
          <h3>구조</h3>
          <p>{architecture}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" className="article-block">
        <div className="article-copy">
          <h3>결과 및 성과</h3>
          <ul style={paperListStyle}>
            {results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </>
  )
}

const reviews = [
  {
    session: 2,
    paperTitle: 'Agentic Retrieval-Augmented Generation: A Survey on Agentic RAG',
    originalUrl: 'https://arxiv.org/abs/2501.09136',
    summary:
      '전통적인 RAG가 고정된 검색-생성 파이프라인에 머문다면, Agentic RAG는 계획, 반성, 도구 사용, 멀티 에이전트 협업을 검색 흐름 안에 넣어 복잡한 질의에 적응하는 구조를 제안한다.',
    abstraction: [
      {
        label: '기존 방법',
        value:
          '일반 RAG는 입력 질의에 대해 정해진 검색을 수행한 뒤 생성하는 경우가 많아, 다단계 추론이나 상황별 검색 전략 변경에 약하다.',
      },
      {
        label: '연구 방법',
        value:
          '논문은 Agentic RAG를 하나의 설계 패러다임으로 정리하고, reflection, planning, tool use, multi-agent collaboration을 기준으로 분류한다.',
      },
      {
        label: '읽을 포인트',
        value:
          '개별 알고리즘보다 “RAG 파이프라인을 누가 통제하는가”에 집중하면 좋다. 검색기는 부품이고, 에이전트는 검색 과정을 조율하는 제어 계층이다.',
      },
    ],
    preliminaries: [
      'RAG: 외부 문서를 검색해서 LLM 입력에 붙이고, 모델이 그 근거를 바탕으로 답하게 하는 방식',
      'Agent: 목표를 보고 다음 행동을 선택하며, 필요하면 도구를 호출하고 결과를 다시 판단하는 실행 주체',
      'Agentic RAG: 검색, 평가, 재검색, 답변 생성을 고정 순서가 아니라 상황에 따라 바꾸는 RAG',
    ],
    breakdown: [
      {
        label: 'Query Understanding',
        value: '질문을 그대로 검색하지 않고, 하위 질문이나 검색 계획으로 분해한다.',
      },
      {
        label: 'Retrieval Control',
        value: '검색 횟수, 검색 대상, 쿼리 재작성, 웹 검색 여부를 에이전트가 결정한다.',
      },
      {
        label: 'Response Grounding',
        value: '생성된 답이 검색 근거와 맞는지 반성하거나 검증하는 단계를 둔다.',
      },
    ],
    architecture:
      '사용자 질문 → 계획 수립 에이전트 → 검색 도구 호출 → 검색 결과 평가 → 필요 시 재검색/쿼리 수정 → 근거 기반 생성 → 자기 검토 흐름으로 볼 수 있다.',
    results: [
      'Agentic RAG를 독립 알고리즘이 아니라 RAG의 진화 방향으로 정리했다.',
      '복잡한 업무에서는 단일 검색보다 계획과 검증이 들어간 검색 흐름이 더 자연스럽다는 관점을 제공한다.',
      '실제 구현에서는 성능뿐 아니라 비용, 지연 시간, 도구 실패, 권한 제어까지 함께 다뤄야 한다.',
    ],
  },
  {
    session: 3,
    paperTitle: 'ReAct: Synergizing Reasoning and Acting in Language Models',
    originalUrl: 'https://arxiv.org/abs/2210.03629',
    summary:
      'ReAct는 LLM이 생각만 이어가는 대신, reasoning trace와 action을 번갈아 생성하게 만들어 외부 지식 검색과 의사결정을 한 루프로 묶는다.',
    abstraction: [
      {
        label: '기존 방법',
        value:
          'Chain-of-Thought는 추론 과정을 만들 수 있지만 외부 세계와 상호작용하지 못하고, action-only 방식은 행동의 이유가 불투명하다.',
      },
      {
        label: '연구 방법',
        value:
          '모델이 Thought, Action, Observation을 반복하며 지식베이스나 환경에서 정보를 얻고 다음 추론에 반영하도록 프롬프트한다.',
      },
      {
        label: 'Agentic RAG 관점',
        value:
          '검색을 단발성 함수 호출이 아니라 reasoning 중간에 호출되는 action으로 본다는 점에서 Agentic RAG의 기본 패턴이 된다.',
      },
    ],
    preliminaries: [
      'Reasoning: 답을 만들기 위해 필요한 중간 생각과 상태 추적',
      'Acting: 검색 API, 위키피디아, 웹 환경 같은 외부 도구를 호출하는 행동',
      'Observation: 도구 호출 뒤 돌아온 결과이며, 다음 reasoning의 입력이 된다.',
    ],
    breakdown: [
      {
        label: 'Thought',
        value: '현재 무엇을 알아야 하는지 판단하고 다음 행동을 고른다.',
      },
      {
        label: 'Action',
        value: '검색, 클릭, 조회처럼 외부 환경에서 정보를 얻는 명령을 실행한다.',
      },
      {
        label: 'Observation',
        value: '행동 결과를 받아 기존 추론을 업데이트하거나 오류를 수정한다.',
      },
    ],
    architecture:
      '질문 → Thought → Action → Observation → Thought ... → Answer 구조다. RAG로 옮기면 검색 질의를 만드는 단계와 검색 결과를 읽고 다음 검색 여부를 정하는 단계가 루프 안에 들어간다.',
    results: [
      'QA와 fact verification에서 단순 추론만 하는 방식의 환각과 오류 전파를 줄이는 모습을 보였다.',
      '행동과 생각이 함께 남기 때문에 사람이 디버깅하기 쉬운 실행 궤적을 만든다.',
      'Agentic RAG 구현 시 가장 먼저 떠올릴 수 있는 기본 루프를 제공한다.',
    ],
  },
  {
    session: 4,
    paperTitle: 'Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection',
    originalUrl: 'https://arxiv.org/abs/2310.11511',
    summary:
      'Self-RAG는 항상 같은 개수의 문서를 붙이는 대신, 모델이 필요할 때 검색하고 검색 결과와 자기 답변을 reflection token으로 평가하게 학습한다.',
    abstraction: [
      {
        label: '기존 방법',
        value:
          '일반 RAG는 검색이 필요 없는 질문에도 문서를 붙이거나, 관련 없는 문서를 넣어 오히려 답변 품질을 떨어뜨릴 수 있다.',
      },
      {
        label: '연구 방법',
        value:
          '모델이 검색 필요성, 문서 관련성, 답변 근거성, 답변 유용성을 나타내는 특수 토큰을 생성하도록 훈련한다.',
      },
      {
        label: 'Agentic RAG 관점',
        value:
          '별도 에이전트 없이도 모델 내부에 “검색할지 말지”와 “근거가 충분한지”를 판단하는 제어 신호를 넣는다.',
      },
    ],
    preliminaries: [
      'Reflection token: 생성 과정 중 모델의 판단을 드러내는 특수 토큰',
      'On-demand retrieval: 모든 질문에 검색하지 않고 필요할 때만 검색하는 방식',
      'Critique: 검색 문서와 생성 답변이 서로 맞는지 평가하는 자기 검토 단계',
    ],
    breakdown: [
      {
        label: 'Retrieve',
        value: '모델이 검색 필요성을 판단하고 필요한 경우에만 외부 문서를 가져온다.',
      },
      {
        label: 'Generate',
        value: '가져온 문서와 질문을 바탕으로 답변을 생성한다.',
      },
      {
        label: 'Critique',
        value: '문서 관련성, 답변 지지도, 유용성을 평가해 생성 결과를 조절한다.',
      },
    ],
    architecture:
      '입력 질문 → 검색 필요성 판단 → 검색 문서 조건부 사용 → 답변 생성 → reflection token 기반 평가 흐름이다. Agentic RAG에서는 이 판단을 별도 evaluator agent로 빼도 된다.',
    results: [
      '다양한 QA, reasoning, fact verification 작업에서 기존 RAG와 LLM 대비 품질과 사실성을 개선했다.',
      '긴 답변 생성에서 citation accuracy와 factuality를 높이는 방향을 보여준다.',
      '검색 품질 평가가 RAG 성능의 핵심이라는 점을 분명하게 만든다.',
    ],
  },
  {
    session: 5,
    paperTitle: 'Corrective Retrieval Augmented Generation',
    originalUrl: 'https://arxiv.org/abs/2401.15884',
    summary:
      'CRAG는 검색 결과가 틀릴 수 있다는 점을 전제로, retrieval evaluator가 문서 품질을 평가하고 부족하면 웹 검색과 지식 정제를 통해 답변 근거를 보정한다.',
    abstraction: [
      {
        label: '기존 방법',
        value:
          'RAG는 검색된 문서가 맞다는 가정에 크게 의존한다. 검색 결과가 엉뚱하면 모델은 그럴듯하지만 틀린 답을 만들 수 있다.',
      },
      {
        label: '연구 방법',
        value:
          '가벼운 retrieval evaluator로 검색 결과 신뢰도를 평가하고, confidence에 따라 정답 생성, 보완 검색, 부적합 문서 배제를 선택한다.',
      },
      {
        label: 'Agentic RAG 관점',
        value:
          '검색 결과를 무조건 받아들이지 않고, evaluator가 다음 행동을 트리거한다는 점에서 agentic control이 들어간 RAG다.',
      },
    ],
    preliminaries: [
      'Retrieval evaluator: 검색 결과가 질문에 충분히 관련 있는지 판단하는 작은 평가기',
      'Web search extension: 내부 코퍼스가 부족할 때 외부 검색을 추가하는 보완 전략',
      'Decompose-then-recompose: 긴 문서를 작은 지식 조각으로 나누고 필요한 정보만 재구성하는 방식',
    ],
    breakdown: [
      {
        label: 'Correct',
        value: '검색 결과가 충분하면 핵심 정보를 추출해 답변에 사용한다.',
      },
      {
        label: 'Ambiguous',
        value: '근거가 애매하면 웹 검색을 추가해 문맥을 보강한다.',
      },
      {
        label: 'Incorrect',
        value: '검색 결과가 부적합하면 해당 문서를 버리고 다른 지식 소스를 찾는다.',
      },
    ],
    architecture:
      '질문 → 기본 검색 → 검색 품질 평가 → confidence별 action 선택 → 지식 조각 정제 → 생성 흐름이다. 핵심은 생성 전에 retrieval failure를 감지하는 방어막이다.',
    results: [
      'short-form과 long-form generation 모두에서 RAG 기반 방법의 성능을 개선했다.',
      'plug-and-play 방식이라 기존 RAG 파이프라인에 evaluator와 보정 단계를 붙이기 쉽다.',
      'Agentic RAG에서 evaluator agent가 왜 필요한지 설명하는 좋은 사례다.',
    ],
  },
  {
    session: 6,
    paperTitle: 'Adaptive-RAG: Learning to Adapt Retrieval-Augmented Large Language Models through Question Complexity',
    originalUrl: 'https://arxiv.org/abs/2403.14403',
    summary:
      'Adaptive-RAG는 모든 질문에 같은 검색 전략을 쓰지 않고, 질문 복잡도를 분류해 no retrieval, single-step RAG, iterative RAG 중 적절한 방식을 선택한다.',
    abstraction: [
      {
        label: '기존 방법',
        value:
          '단순 질문에 복잡한 multi-step 검색을 쓰면 비용이 낭비되고, 복잡한 질문에 단일 검색만 쓰면 필요한 근거를 놓칠 수 있다.',
      },
      {
        label: '연구 방법',
        value:
          '작은 LM classifier가 질문 복잡도를 예측하고, 그 결과에 따라 가장 알맞은 검색-생성 전략을 선택한다.',
      },
      {
        label: 'Agentic RAG 관점',
        value:
          '에이전트가 “얼마나 깊게 검색할지”를 정하기 전에 질문 난이도 라우팅을 수행하는 구조로 해석할 수 있다.',
      },
    ],
    preliminaries: [
      'No retrieval: 모델 내부 지식만으로 답하는 경량 경로',
      'Single-step RAG: 한 번 검색하고 답하는 기본 경로',
      'Iterative RAG: 중간 답변이나 하위 질문을 바탕으로 여러 번 검색하는 경로',
    ],
    breakdown: [
      {
        label: 'Simple',
        value: '검색 없이 답하거나 짧은 검색으로 충분한 질문',
      },
      {
        label: 'Moderate',
        value: '외부 근거가 필요하지만 단일 검색으로 해결 가능한 질문',
      },
      {
        label: 'Complex',
        value: '여러 단서와 다단계 추론이 필요한 질문',
      },
    ],
    architecture:
      '질문 → complexity classifier → 전략 선택 → 선택된 RAG 경로 실행 → 답변 생성 구조다. Agentic RAG 시스템에서는 planner 앞단의 router로 쓰기 좋다.',
    results: [
      '정확도와 효율 사이의 균형을 맞추는 adaptive QA framework를 제안했다.',
      '질문마다 다른 검색 전략을 쓰는 것이 고정 전략보다 실용적임을 보여준다.',
      '운영 환경에서는 비용 예산과 latency SLA를 함께 고려한 라우팅으로 확장할 수 있다.',
    ],
  },
  {
    session: 7,
    paperTitle: 'Active Retrieval Augmented Generation',
    originalUrl: 'https://arxiv.org/abs/2305.06983',
    summary:
      'FLARE는 긴 글을 생성할 때 다음 문장을 미리 예측하고, 낮은 확신이 보이면 그 예측 문장을 검색 쿼리로 사용해 필요한 정보를 능동적으로 가져온다.',
    abstraction: [
      {
        label: '기존 방법',
        value:
          '많은 RAG는 입력 시점에 한 번만 검색한다. 하지만 긴 답변은 생성 중간에 새 정보가 계속 필요해질 수 있다.',
      },
      {
        label: '연구 방법',
        value:
          'Forward-Looking Active REtrieval은 앞으로 쓸 문장을 예측하고, 불확실한 토큰이 포함되면 해당 예측을 검색 질의로 바꿔 문서를 가져온다.',
      },
      {
        label: 'Agentic RAG 관점',
        value:
          '검색 시점이 입력 전이 아니라 생성 도중으로 이동한다. 답변 작성자가 필요를 감지하고 자료를 다시 찾는 방식에 가깝다.',
      },
    ],
    preliminaries: [
      'Active retrieval: 모델이 언제 무엇을 검색할지 능동적으로 결정하는 방식',
      'Look-ahead sentence: 아직 확정하지 않은 다음 문장 예측',
      'Low-confidence token: 모델이 생성에 확신하지 못하는 부분이며 검색 트리거로 사용된다.',
    ],
    breakdown: [
      {
        label: 'Predict',
        value: '다음에 쓸 문장을 먼저 생성해 필요한 지식의 방향을 잡는다.',
      },
      {
        label: 'Retrieve',
        value: '불확실한 예측 문장을 검색 쿼리로 바꿔 관련 문서를 가져온다.',
      },
      {
        label: 'Regenerate',
        value: '검색 근거를 반영해 해당 문장을 다시 생성한다.',
      },
    ],
    architecture:
      '초기 문맥 → 다음 문장 예측 → confidence 검사 → 필요 시 검색 → 근거 기반 재생성 → 다음 문장으로 반복하는 구조다.',
    results: [
      '긴 knowledge-intensive generation 작업에서 능동 검색이 단발 검색보다 유리할 수 있음을 보였다.',
      '검색 쿼리를 사람이 미리 설계하지 않아도 생성 과정에서 자연스럽게 만들어낸다.',
      'Agentic RAG에서 “생성 중 검색”이라는 중요한 제어 패턴을 제공한다.',
    ],
  },
  {
    session: 8,
    paperTitle: 'ReWOO: Decoupling Reasoning from Observations for Efficient Augmented Language Models',
    originalUrl: 'https://arxiv.org/abs/2305.18323',
    summary:
      'ReWOO는 reasoning과 tool observation을 매번 섞어 실행하지 않고, 먼저 전체 계획을 세운 뒤 필요한 도구 호출을 채워 넣어 토큰 비용과 반복 실행을 줄인다.',
    abstraction: [
      {
        label: '기존 방법',
        value:
          'ReAct식 루프는 직관적이지만 매 단계마다 이전 관찰과 생각을 다시 프롬프트에 넣어야 하므로 토큰 비용이 커질 수 있다.',
      },
      {
        label: '연구 방법',
        value:
          'Planner가 관찰 없이 추론 계획과 변수 슬롯을 만들고, Worker가 도구 호출 결과를 채운 뒤 Solver가 최종 답을 만든다.',
      },
      {
        label: 'Agentic RAG 관점',
        value:
          '복잡한 검색 작업을 먼저 쿼리 계획으로 컴파일하고, 실행 단계에서 검색 결과만 채우는 효율적 agent workflow로 볼 수 있다.',
      },
    ],
    preliminaries: [
      'Planner: 전체 reasoning plan과 필요한 도구 호출을 미리 작성하는 역할',
      'Worker: 계획 안의 검색/도구 호출을 실행해 관찰값을 채우는 역할',
      'Solver: 채워진 관찰값과 계획을 바탕으로 최종 답변을 생성하는 역할',
    ],
    breakdown: [
      {
        label: 'Plan First',
        value: '질문을 보고 필요한 정보 수집 단계를 먼저 분해한다.',
      },
      {
        label: 'Execute Tools',
        value: '계획에 있는 검색과 도구 호출을 실행해 변수 값을 채운다.',
      },
      {
        label: 'Solve',
        value: '계획과 관찰 결과를 합쳐 답을 만든다.',
      },
    ],
    architecture:
      '질문 → Planner의 변수화된 계획 → Worker의 도구 실행 → Solver의 최종 답변 구조다. 검색이 많은 Agentic RAG에서 실행 비용을 줄이는 설계로 읽을 수 있다.',
    results: [
      'HotpotQA에서 토큰 효율과 정확도 개선을 보고했다.',
      '도구 실패 상황에서도 reasoning 계획과 관찰 단계를 분리해 견고성을 높이는 방향을 제시했다.',
      'Agentic RAG 최종 회차로, 성능만큼 중요한 운영 비용과 모듈 분리 문제를 정리하기 좋다.',
    ],
  },
]

export const mogakcoAgenticRagPosts = reviews.map((review) => ({
  path: `/모각코/모각코 ${review.session}회차`,
  category: '모각코',
  title: `모각코 ${review.session}회차`,
  summary: `[논문 리뷰] ${review.paperTitle}. ${review.summary}`,
  Page() {
    return renderPaperReview({
      eyebrow: `Mogakco ${review.session}`,
      ...review,
    })
  },
}))
