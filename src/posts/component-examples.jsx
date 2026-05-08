import CodeBlock from '../components/CodeBlock'
import PostLink from '../components/PostLink'
import ScrollReveal from '../components/ScrollReveal'

export const componentExamplesPost = {
  path: '/Docs/포스트 컴포넌트 예시',
  category: 'Docs',
  title: '포스트 컴포넌트 예시',
  summary:
    '포스트 안에서 사용하는 링크 칩과 코드 블록 컴포넌트의 사용 예시를 모아둔 문서입니다.',
  Page() {
    return (
      <>
        <ScrollReveal animation="fade-up" className="article-block article-block--hero">
          <p className="eyebrow">Post Components</p>
          <h2>포스트 컴포넌트 예시</h2>
          <p className="article-block__lead">
            글을 쓰면서 자주 사용할 링크 칩과 코드 블록 컴포넌트를 한곳에
            모아두었습니다. 새 포스트를 만들 때 이 페이지를 참고해서 바로
            복사해 쓰면 됩니다.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>링크 컴포넌트</h3>
            <p>
              <PostLink href="https://github.com/python/cpython">
                github.com/python/cpython
              </PostLink>
            </p>
            <p>
              <PostLink href="https://realpython.com/cpython-source-code-guide/">
                Real Python guide
              </PostLink>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" className="article-block">
          <div className="article-copy">
            <h3>코드 블록 컴포넌트</h3>
            <p>
              우선 `python`, `bash`, `yaml`, `txt`를 지원합니다.
            </p>
          </div>
          <div className="code-block-list">
            <CodeBlock
              language="python"
              title="example.py"
              fold
              code={`def greet(name: str) -> None:
    print(f"hello, {name}")


greet("cpython")`}
            />
            <CodeBlock
              language="bash"
              title="terminal"
              code={`git clone https://github.com/python/cpython
cd cpython
./configure && make -j4`}
            />
            <CodeBlock
              language="yaml"
              title="post.yaml"
              code={`post:
  category: Docs
  title: 포스트 컴포넌트 예시
  publishedAt: 2026-05-09`}
            />
            <CodeBlock
              language="txt"
              title="notes.txt"
              code={`CPython reading notes
- start from the runtime flow
- then follow tokenizing -> parsing -> AST
- inspect source files after the big picture is clear`}
            />
          </div>
        </ScrollReveal>
      </>
    )
  },
}
