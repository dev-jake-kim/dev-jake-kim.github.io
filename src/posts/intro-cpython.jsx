import ScrollReveal from '../components/ScrollReveal'
import PostLink from '../components/PostLink'
import CodeBlock from '../components/CodeBlock'

const flowGridStyle = {
  display: 'grid',
  gap: '16px',
}

const flowCardStyle = {
  padding: '20px',
  borderRadius: '20px',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.94))',
}

const flowRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  alignItems: 'center',
  marginTop: '12px',
}

const flowNodeStyle = {
  display: 'inline-flex',
  gap: '8px',
  alignItems: 'center',
  padding: '10px 14px',
  borderRadius: '999px',
  background: 'rgba(226, 232, 240, 0.65)',
  color: '#0f172a',
  fontSize: '0.95rem',
  fontWeight: 600,
}

const flowArrowStyle = {
  color: '#64748b',
  fontWeight: 700,
}

const flowTitleStyle = {
  display: 'inline-flex',
  gap: '10px',
  alignItems: 'center',
}

const flowIconStyle = {
  width: '18px',
  height: '18px',
  flexShrink: 0,
}

const flowTitleIconStyle = {
  width: '22px',
  height: '22px',
  flexShrink: 0,
}

const cycleGridStyle = {
  display: 'grid',
  gap: '16px',
  margin: '16px 0',
}

const cycleCardStyle = {
  padding: '20px',
  borderRadius: '20px',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.94))',
}

const cycleTitleStyle = {
  margin: 0,
  fontSize: '1rem',
  fontWeight: 700,
  color: '#0f172a',
}

const cycleStageStyle = {
  marginTop: '14px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  alignItems: 'center',
}

const cycleObjectStyle = {
  minWidth: '160px',
  padding: '14px 16px',
  borderRadius: '16px',
  background: 'rgba(226, 232, 240, 0.55)',
  border: '1px solid rgba(148, 163, 184, 0.24)',
}

const cycleObjectTitleStyle = {
  display: 'block',
  fontSize: '0.95rem',
  fontWeight: 700,
  color: '#0f172a',
}

const cycleRefStyle = {
  display: 'block',
  marginTop: '6px',
  fontSize: '0.9rem',
  color: '#334155',
}

const cycleArrowStyle = {
  fontSize: '1.2rem',
  fontWeight: 700,
  color: '#64748b',
}

const cycleHintStyle = {
  margin: '14px 0 0',
  color: '#475569',
  fontSize: '0.95rem',
  lineHeight: 1.7,
}

const rcGridStyle = {
  display: 'grid',
  gap: '16px',
  margin: '16px 0',
}

const rcStepStyle = {
  padding: '20px',
  borderRadius: '20px',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.94))',
}

const rcStepTitleStyle = {
  margin: 0,
  fontSize: '1rem',
  fontWeight: 700,
  color: '#0f172a',
}

const rcObjectStyle = {
  marginTop: '14px',
  display: 'inline-flex',
  flexDirection: 'column',
  gap: '6px',
  minWidth: '180px',
  padding: '14px 16px',
  borderRadius: '16px',
  background: 'rgba(226, 232, 240, 0.55)',
  border: '1px solid rgba(148, 163, 184, 0.24)',
}

const rcMetaStyle = {
  fontSize: '0.9rem',
  color: '#334155',
}

const rcFreeStyle = {
  marginTop: '12px',
  fontSize: '0.92rem',
  fontWeight: 700,
  color: '#0f766e',
}

const iconUrls = {
  c: 'https://cdn.simpleicons.org/c',
  python: 'https://cdn.simpleicons.org/python',
  source: 'https://unpkg.com/@tabler/icons@latest/icons/outline/file-code.svg',
  compiler: 'https://unpkg.com/@tabler/icons@latest/icons/outline/settings-code.svg',
  binary: 'https://unpkg.com/@tabler/icons@latest/icons/outline/binary.svg',
  bytecode: 'https://unpkg.com/@tabler/icons@latest/icons/outline/file-digit.svg',
  pvm: 'https://unpkg.com/@tabler/icons@latest/icons/outline/binary-tree-2.svg',
  cpu: 'https://unpkg.com/@tabler/icons@latest/icons/outline/cpu.svg',
  tokenizing: 'https://unpkg.com/@tabler/icons@latest/icons/outline/scissors.svg',
  parsing: 'https://unpkg.com/@tabler/icons@latest/icons/outline/brackets-angle.svg',
  ast: 'https://unpkg.com/@tabler/icons@latest/icons/outline/git-branch.svg',
  compile: 'https://unpkg.com/@tabler/icons@latest/icons/outline/settings-up.svg',
}

function renderFlowNode(icon, alt, label) {
  return (
    <span style={flowNodeStyle}>
      <img src={icon} alt={alt} style={flowIconStyle} />
      <span>{label}</span>
    </span>
  )
}

function renderFlowTitle(icon, alt, label) {
  return (
    <strong style={flowTitleStyle}>
      <img src={icon} alt={alt} style={flowTitleIconStyle} />
      <span>{label}</span>
    </strong>
  )
}

export const introCpythonPost = {
  path: '/Cpython/intro Cpython',
  category: 'Cpython',
  title: 'intro Cpython',
  summary:
    '파이썬은 대중적으로 잘 알려진 프로그래밍 언어이고 아주 쉽게 만들어져있다. 그러나 그 구현을 위한 CPython은 잘 모르는 사람이 많다. 본 포스팅에서는 CPython의 간단한 overview를 다룬다.',
  Page() {
    return (
      <>
        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>Cpython이란?</h3>
            <p>Python 재단에서 만드는 표준 Python 구현체이다. <br/>CPython의 역할은 크게 2가지이다. <strong><br/> 1. runtime <br/> 2. language specification </strong></p>
            <p>Cpython 말고도 파이썬으로 만들어진 PyPy, Jvm과 연계하기 위한 Jython 등도 존재한다.</p>
            <p>
              <span style={{ color: 'gray' }}>
                본 포스팅에서는{' '}
                <PostLink href="https://github.com/python/cpython">
                  github.com/python/cpython
                </PostLink>{' '}
                (v3.8.0b4)를 기준으로 한다.
              </span>
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>Compiler란?</h3>
            <p>한 언어를 다른 언어로 바꿔 주는 것 대표적으로 gcc가 있다. gcc는 인간이 볼 수 있는 source code(.c, .cpp 등)를 기계가 읽을 수 있는 바이너리로 변환한다.<br/>
              일반적으로 system portability를 중요하게 여기고 Python은 대중적으로 사용되는 만큼 여러곳에 사용할 수 있다. Window, Linux, IOS, Android 등
            </p>
            <p> Compiler의 종류 <br/>
              <strong>1. Self hosted Compiler</strong>: 자기 자신으로 작성된 Compiler | eg. PyPy<br/>
              <strong>2. Source to Source Compiler</strong>: 이미 컴파일러가 존재하는 다른 언어로 작성된 Compiler | eg. Jython<br/>
              추가로 jython을 사용하면 java랑 메모리를 연계할 수 있다. 딥러닝 기능을 Spring에 붙일 때 유용하다.<br/>
              <span style={{ color: 'gray' }}>cf. 물론 Self hosted Compiler를 Compiler를 Compile하려면 그 최초에는 Source to Source Compiler가 필요하다.</span>
            </p>
            <p>Q: Python은 interpreted language인데 왜 갑자기 Compiler가 등장하나요?<br/>
              A: Python은 Interpreted language는 맞지만 compile을 하지 않는 것은 아니다. 
            </p>
            <p>
              전체 흐름은{' '}
              <PostLink href="https://realpython.com/cpython-source-code-guide/">
                Real Python guide
              </PostLink>
              {' '}를 같이 보면 조금 더 빨리 잡힌다.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>Source Code는 어떻게 실행될까?</h3>
            <p>
              같은 source code 실행이라도 C는 compiler가 바로 binary를 만들고,
              CPython은 먼저 byte code를 만든 뒤 PVM이 이를 해석해서 실행한다.
            </p>
            <div style={flowGridStyle}>
              <div style={flowCardStyle}>
                {renderFlowTitle(iconUrls.c, 'C language icon', 'C')}
                <div style={flowRowStyle}>
                  {renderFlowNode(iconUrls.source, 'source code icon', 'source code (.c)')}
                  <span style={flowArrowStyle}>&rarr;</span>
                  {renderFlowNode(iconUrls.compiler, 'compiler icon', 'compiler (gcc)')}
                  <span style={flowArrowStyle}>&rarr;</span>
                  {renderFlowNode(iconUrls.binary, 'binary icon', 'binary')}
                  <span style={flowArrowStyle}>&rarr;</span>
                  {renderFlowNode(iconUrls.cpu, 'CPU icon', 'CPU')}
                </div>
              </div>
              <div style={flowCardStyle}>
                {renderFlowTitle(iconUrls.python, 'Python icon', 'CPython')}
                <div style={flowRowStyle}>
                  {renderFlowNode(iconUrls.source, 'source code icon', 'source code (.py)')}
                  <span style={flowArrowStyle}>&rarr;</span>
                  {renderFlowNode(iconUrls.compiler, 'CPython compiler icon', 'CPython compiler')}
                  <span style={flowArrowStyle}>&rarr;</span>
                  {renderFlowNode(iconUrls.bytecode, 'byte code icon', 'byte code (.pyc)')}
                  <span style={flowArrowStyle}>&rarr;</span>
                  {renderFlowNode(iconUrls.pvm, 'PVM icon', 'PVM')}
                  <span style={flowArrowStyle}>&rarr;</span>
                  {renderFlowNode(iconUrls.cpu, 'CPU icon', 'CPU')}
                </div>
              </div>
            </div>
            <p>
              핵심은 CPython이 machine code를 바로 만드는 것이 아니라,
              중간 산물인 byte code를 만들고 PVM이 이를 실행한다는 점이다.<br/>
              만약 VM이 어떻게 동작하는지 예시를 보고싶다면 다음을 참조 <PostLink href="https://github.com/dev-jake-kim/VirtualArchitecture">간단한 VM 예시</PostLink>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>CPython과 PVM</h3>
            <p>Python은 잘 알려져있듯 PVM을 이용해서 Interpret 방식으로 동작한다. 여기서 compile이 어디에 들어가는 것일까?</p>
            <p>Python은 동작할 때 2단계를 거쳐서 실행된다. <br/>
              <strong>1. Compile: Source code(.py) &rarr; Byte code(.pyc)</strong><br/>
              <strong>2. Run: Byte code(.pyc) &rarr; PVM</strong><br/>
            </p>
            <p>
              Q: 왜 이런 귀찮은 방식을 사용하나요?<br/>
              A: 여러 이유가 존재한다. 대표적으로는 caching의 장점이 있다(컴파일은 생각보다 무거운 작업이다).
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>Python 파일을 어떻게 Byte Code로 바꿀까?</h3>
            <p>
              Python 파일은 바로 byte code가 되는 것이 아니라, 중간 단계를
              거치며 조금씩 실행 가능한 형태로 바뀐다.
            </p>
            <div style={flowCardStyle}>
              <div style={flowRowStyle}>
                {renderFlowNode(iconUrls.source, 'python source file icon', 'Python file (.py)')}
                <span style={flowArrowStyle}>&rarr;</span>
                {renderFlowNode(iconUrls.tokenizing, 'tokenizing icon', '1. tokenizing')}
                <span style={flowArrowStyle}>&rarr;</span>
                {renderFlowNode(iconUrls.parsing, 'parsing icon', '2. parsing (pgen)')}
                <span style={flowArrowStyle}>&rarr;</span>
                {renderFlowNode(iconUrls.ast, 'AST icon', '3. AST')}
                <span style={flowArrowStyle}>&rarr;</span>
                {renderFlowNode(iconUrls.compile, 'compile icon', '4. compile')}
                <span style={flowArrowStyle}>&rarr;</span>
                {renderFlowNode(iconUrls.bytecode, 'byte code icon', 'byte code (.pyc)')}
              </div>
            </div>
            <p>
              <strong>1. tokenizing</strong>: source code를 바로 이해하는 대신,
              먼저 의미 있는 작은 조각(token)들로 나누는 단계이다.
            </p>
            <p>
              <strong>2. parsing(pgen)</strong>: 나뉜 token들을 문법 규칙에 맞춰
              읽어들이는 단계이다.
            </p>
            <p>
              AST와 compile 단계는 이번 글에서는 설명하지 않고, 추후 포스팅에서
              따로 다룰 예정이다.
            </p>
          </div>
        </ScrollReveal>
         <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h1>Token</h1>
            <p>공식 repo를 보면 ./Grammar/Tokens에 Token들이 정의되어있다. 
              Python에서 사용하는 +,-,%,() 같은 연산자 뿐 아니라 기호 \n, \tab 들이 정의되어있고 각각의 Unique한 이름이 존재한다. 
              이들은 parse tree의 leaf node로 존재한다. parse tree는 tokenizing의 일부라고 생각하면 된다. 
              <span style={{ color: 'gray' }}><br/>parse tree의 자세한건 추후 포스팅에서</span><br/><br/>
              특이한 점은 tokenizer가 2개가 존재하는 것이다. <br/>
              {renderFlowTitle(iconUrls.python, 'Python icon', 'Python(debugging), ')} {renderFlowTitle(iconUrls.c, 'C language icon', 'C(Build)')}<br/>
              둘의 tokenizing은 동일하지만 각각 debugging용 build용이라는 점에서 차이가 발생한다.
            </p>
            <p>
              아래는 Tokens의 내용이다.
              <CodeBlock
                language="txt"
                title="./Grammar/Tokens"
                fold
                code="ENDMARKER
NAME
NUMBER
STRING
NEWLINE
INDENT
DEDENT

LPAR                    '('
RPAR                    ')'
LSQB                    '['
RSQB                    ']'
COLON                   ':'
COMMA                   ','
SEMI                    ';'
PLUS                    '+'
MINUS                   '-'
STAR                    '*'
SLASH                   '/'
VBAR                    '|'
AMPER                   '&'
LESS                    '<'
GREATER                 '>'
EQUAL                   '='
DOT                     '.'
PERCENT                 '%'
LBRACE                  '{'
RBRACE                  '}'
EQEQUAL                 '=='
NOTEQUAL                '!='
LESSEQUAL               '<='
GREATEREQUAL            '>='
TILDE                   '~'
CIRCUMFLEX              '^'
LEFTSHIFT               '<<'
RIGHTSHIFT              '>>'
DOUBLESTAR              '**'
PLUSEQUAL               '+='
MINEQUAL                '-='
STAREQUAL               '*='
SLASHEQUAL              '/='
PERCENTEQUAL            '%='
AMPEREQUAL              '&='
VBAREQUAL               '|='
CIRCUMFLEXEQUAL         '^='
LEFTSHIFTEQUAL          '<<='
RIGHTSHIFTEQUAL         '>>='
DOUBLESTAREQUAL         '**='
DOUBLESLASH             '//'
DOUBLESLASHEQUAL        '//='
AT                      '@'
ATEQUAL                 '@='
RARROW                  '->'
ELLIPSIS                '...'
COLONEQUAL              ':='

OP
AWAIT
ASYNC
TYPE_IGNORE
TYPE_COMMENT
ERRORTOKEN

# These aren't used by the C tokenizer but are needed for tokenize.py
COMMENT
NL
ENCODING
"
              />
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>Grammar</h3>
            <p>
              Tokens파일과 같이 사용되는 Grammar file이다. 분리된 토큰이 어떤 문장을 이루고있는지 아는데 사용된다. <br/>
              기계가 읽을 수 있게 EBNF로 작성되어있어 정규식과 매우 닮아있다. Compiler는 pgen을 이용해서 parser table을 제작한다.<br/>
              예를들어 with구문은 아래와 같이 정의되어있다.<br/>
              <CodeBlock language='txt' title='Grammar/Grammar' code="with_stmt: 'with' with_item (',' with_item)*  ':' [TYPE_COMMENT] suite
with_item: test ['as' expr]"/><br/>
              여기서는 `(',' with_item)*` 때문에 `with` 뒤에 `with_item`을 하나 쓴 다음, 필요하면 `, with_item` 형태를 여러 번 더 붙일 수 있다.<br/>
              또 `['as' expr]`는 `as f` 같은 부분이 있어도 되고 없어도 된다는 뜻이다.<br/>
              Python 코드로 보면 아래와 같은 형태다.<br/>
              <CodeBlock language='python' title='with example' code={`with open('file.txt') as f:
    data = f.read()

with open('input.txt') as src, open('output.txt', 'w') as dst:
    dst.write(src.read())`}/>
              이 파일을 조작하여 기존에는 없던 문법/키워드를 창조할 수 있다. <br/>자세한것은 Grammar 파트 참조<PostLink href="https://realpython.com/cpython-source-code-guide">Real Python</PostLink>
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>메모리관리</h3>
            <p>
              C나 C++를 배웠다면 알겠지만 메모리 관리는 Memory Leak와 직결되는 매우 중요한 문제이다. 본 포스팅에서는 많은 메모리관리 객체중 PyArena를 기준으로 설명하겠다. <br/>
              PyArena는 C++의 shared pointer와 매우 닮아있다. 이 객체는 메모리의 자동 해제를 reference counting(ceval.c에서 관리)을 통해 해결한다.<br/>
              <span style={{color: 'gray', fontSize: '12px'}}>씨이벌인걸 보니 reference기능 만들다가 화난게 분명하다</span></p>
            <p>
              <strong>PyArena의 동작</strong><br/>
              Interpreter가 Instance화되면 Interpreter의 field로 PyArena를 삽입한다.<br/>
              처음 arena가 만들어지면 이후 컴파일 과정에서 필요한 객체와 메모리를 이 arena에 차곡차곡 등록한다.
              Python object를 arena 관리 대상에 넣을 때는 `PyArena_AddPyObject()` 같은 함수를 호출하고, 일반 raw memory가 필요할 때는 `PyArena_Malloc()`, 크기 변경이 필요할 때는 `PyArena_Realloc()`, 직접 반환할 때는 `PyArena_Free()`를 사용한다.<br/>
              예를 들어 어떤 값을 표현하는 `PyObject`나 중간 자료구조를 만들었다면 arena 쪽에 함께 묶어두고, 이후 더 이상 필요 없어졌을 때 arena 기준으로 한 번에 정리하는 식이다.<br/>
              즉 핵심은 "객체를 만들 때마다 따로따로 관리하는 것"보다 "관련된 메모리를 arena에 등록해 두고 생명주기를 같이 가져가는 것"에 가깝다.
            </p>
            <p>
              아래 그림은 위 설명을 이해하기 위한 단순화된 계층 구조이다.<br/>
              `process` 아래에 `interpreter`가 있고, 그 아래에서 `PyArena`가 여러 객체와 raw memory를 묶어서 관리한다고 보면 된다.
              `PyListObject` 역시 큰 틀에서는 `PyObject` 계열 객체라고 생각하면 된다.<br/>
              <CodeBlock
                language='txt'
                title='PyArena hierarchy (simplified)'
                code={`Process
└── Interpreter
    └── PyArena #1
        ├── next -> PyArena #2
        ├── PyObject
        │   └── int object (ex: a = 13)
        ├── PyListObject
        │   ├── ob_item[0] -> PyObject(1)
        │   ├── ob_item[1] -> PyObject(2)
        │   └── ob_item[2] -> PyObject(3)
        └── Raw memory blocks
            ├── PyArena_Malloc()
            ├── PyArena_Realloc()
            └── PyArena_Free()

PyArena #2(Linked List 연결)
└── next -> PyArena #3

PyArena #3(Linked List 연결)
└── next -> NULL`}
              />
            </p>
            <p>
              <strong>Reference counting 시각화</strong><br/>
              reference counting은 "지금 이 객체를 몇 군데에서 붙잡고 있느냐"를 숫자로 세는 방식이다.
              이름 하나가 객체를 가리키면 count가 올라가고, 참조가 사라지면 count가 내려간다.
              아래 예시는 리스트 객체 하나를 두 변수 `a`, `b`가 공유하는 상황을 단순화한 그림이다.<br/>
              <div style={rcGridStyle}>
                <div style={rcStepStyle}>
                  <p style={rcStepTitleStyle}>1. <code>a = []</code></p>
                  <div style={rcObjectStyle}>
                    <strong style={cycleObjectTitleStyle}>PyListObject L1</strong>
                    <span style={rcMetaStyle}><code>refcnt = 1</code></span>
                    <span style={rcMetaStyle}>from <code>a</code></span>
                  </div>
                </div>
                <div style={rcStepStyle}>
                  <p style={rcStepTitleStyle}>2. <code>b = a</code></p>
                  <div style={rcObjectStyle}>
                    <strong style={cycleObjectTitleStyle}>PyListObject L1</strong>
                    <span style={rcMetaStyle}><code>refcnt = 2</code></span>
                    <span style={rcMetaStyle}>from <code>a</code>, <code>b</code></span>
                  </div>
                </div>
                <div style={rcStepStyle}>
                  <p style={rcStepTitleStyle}>3. <code>del a</code></p>
                  <div style={rcObjectStyle}>
                    <strong style={cycleObjectTitleStyle}>PyListObject L1</strong>
                    <span style={rcMetaStyle}><code>refcnt = 1</code></span>
                    <span style={rcMetaStyle}>from <code>b</code></span>
                  </div>
                </div>
                <div style={rcStepStyle}>
                  <p style={rcStepTitleStyle}>4. <code>del b</code></p>
                  <div style={rcObjectStyle}>
                    <strong style={cycleObjectTitleStyle}>PyListObject L1</strong>
                    <span style={rcMetaStyle}><code>refcnt = 0</code></span>
                    <span style={rcMetaStyle}>no external references</span>
                  </div>
                  <div style={rcFreeStyle}>&rarr; dealloc / free</div>
                </div>
              </div>
              즉 `refcnt`가 0이 되는 순간 "이 객체를 더 이상 아무도 참조하지 않는다"라고 판단하고 해제 루틴이 실행된다.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>Garbage collector</h3>
            <a>순환 참조는 위와 같은 reference counting기반 메모리 해제의 아킬레스건이다. <br/>
            아래와 같은 코드가 가장 전형적인 순환 참조 예시다.
            <CodeBlock
              language='python'
              title='circular reference example'
              code={`a = []
b = []

a.append(b)
b.append(a)

del a
del b`}
            />
            <div style={cycleGridStyle}>
              <div style={cycleCardStyle}>
                <p style={cycleTitleStyle}>1. 외부 참조가 있는 상태</p>
                <div style={cycleStageStyle}>
                  <div style={cycleObjectStyle}>
                    <strong style={cycleObjectTitleStyle}>PyListObject A</strong>
                    <span style={cycleRefStyle}>refcnt = 2</span>
                    <span style={cycleRefStyle}>from <code>a</code>, <code>B[0]</code></span>
                  </div>
                  <span style={cycleArrowStyle}>&harr;</span>
                  <div style={cycleObjectStyle}>
                    <strong style={cycleObjectTitleStyle}>PyListObject B</strong>
                    <span style={cycleRefStyle}>refcnt = 2</span>
                    <span style={cycleRefStyle}>from <code>b</code>, <code>A[0]</code></span>
                  </div>
                </div>
              </div>
              <div style={cycleCardStyle}>
                <p style={cycleTitleStyle}>2. <code>del a</code>, <code>del b</code> 이후</p>
                <div style={cycleStageStyle}>
                  <div style={cycleObjectStyle}>
                    <strong style={cycleObjectTitleStyle}>PyListObject A</strong>
                    <span style={cycleRefStyle}>refcnt = 1</span>
                    <span style={cycleRefStyle}>from <code>B[0]</code> only</span>
                  </div>
                  <span style={cycleArrowStyle}>&harr;</span>
                  <div style={cycleObjectStyle}>
                    <strong style={cycleObjectTitleStyle}>PyListObject B</strong>
                    <span style={cycleRefStyle}>refcnt = 1</span>
                    <span style={cycleRefStyle}>from <code>A[0]</code> only</span>
                  </div>
                </div>
                <p style={cycleHintStyle}>
                  바깥 변수는 사라졌지만 A와 B가 서로를 계속 붙잡고 있어서 <code>refcnt</code>가 0이 되지 않는다.
                  그래서 reference counting만으로는 해제되지 않고, cyclic garbage collector가 한 번 더 순회해야 한다.
                </p>
              </div>
            </div>
            C++의 shared Pointer를 배웠다면 PyArena와 같은 방식만을 사용한다면 순환참조 문제를 해결할 수 없다는 것을 바로 알 수 있을 것이다. c++에서는 weak pointer를 사용했지만 Python은 사용자의 실수로 인한 Memory leak를 배제하기 위해 약간(?) 혹은 조금 많은 성능을 희생해서 gc를 도입했다. gc가 어떻게 동작하는지는 실제 gc를 import해서 확인할 수 있다. </a>
            <CodeBlock language='python' title='GC' code={`>>> import gc
>>> gc.set_debug(gc.DEBUG_STATS)
# garbage collector가 실행될 때마다 통계 정보를 출력한다.

>>> gc.get_threshold()
(700, 10, 10)
# gc가 자동으로 돌기 시작하는 threshold 값을 확인한다.

>>> gc.get_count()
(688, 1, 1)
# 현재 세대별 count가 얼마나 쌓였는지 확인한다.

>>> gc.collect()
24
# gc를 수동으로 한 번 실행한다.
# 내부적으로는 Modules/gcmodule.c의 collect() 구현을 호출한다.`}/>
          </div>
        </ScrollReveal>


        
      </>
    )
  },
}
