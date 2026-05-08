import { useEffect, useState } from 'react'
import './App.css'
import { githubProfileUrl, profile } from './data/profile'
import { posts } from './posts'

const HOME_PATH = '/'
const POSTS_PATH = '/posts'
const ABOUT_PATH = '/about'
const featuredRepositories = [
  {
    name: 'nhnacademy-be11-Byeol23',
    owner: 'nhnacademy-be11-Byeol23',
    url: 'https://github.com/nhnacademy-be11-Byeol23',
  },
  {
    name: 'CustomDMVST',
    owner: 'dev-jake-kim',
    url: 'https://github.com/dev-jake-kim/CustomDMVST',
  },
  {
    name: 'Jinsu',
    owner: 'SPR-kaggle-Project',
    url: 'https://github.com/SPR-kaggle-Project/Jinsu',
  },
]

function formatDate(dateString) {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString))
}

function readPathname() {
  return decodeURIComponent(window.location.pathname)
}

function readInitialPathname() {
  const url = new URL(window.location.href)
  const redirect = url.searchParams.get('redirect')

  if (!redirect) {
    return readPathname()
  }

  const nextUrl = new URL(redirect, window.location.origin)
  window.history.replaceState(
    null,
    '',
    `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`,
  )

  return decodeURIComponent(nextUrl.pathname)
}

function findPostByPath(pathname) {
  return posts.find((post) => decodeURIComponent(post.path) === pathname) ?? null
}

function ArticleCard({ post, onNavigate }) {
  return (
    <article className="post-card">
      <button
        type="button"
        className="post-card__link"
        onClick={() => onNavigate(post.path)}
      >
        <span className="post-card__category">{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.summary}</p>
        <div className="post-card__meta">
          <span>{formatDate(post.publishedAt)}</span>
          <span hidden>{post.path}</span>
        </div>
      </button>
    </article>
  )
}

function HomePage({ onNavigate }) {
  const recentPosts = posts.slice(0, 3)

  return (
    <>
      <header className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Jake Kim&apos;s Blog</p>
          <h1>내가 공부한 것을 정리하는 블로그</h1>
          {/* <p className="hero__description">
            각 글은 별도 페이지 컴포넌트로 분리되어 있어서, 텍스트 글이 아니라
            하나의 작은 제품 페이지처럼 자유롭게 구성할 수 있습니다.
          </p> */}
          <div className="hero__actions">
            <button
              type="button"
              className="button button--primary"
              onClick={() => onNavigate(POSTS_PATH)}
            >
              전체 글 보기
            </button>
            <button
              type="button"
              className="button button--secondary"
              onClick={() => onNavigate(ABOUT_PATH)}
            >
              약력 보기
            </button>
            <a
              className="button button--secondary"
              href={githubProfileUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub로 이동
            </a>
          </div>
        </div>

        <aside className="hero__panel">
          <p className="hero__panel-label">Featured Repositories</p>
          <div className="hero__panel-paths">
            {featuredRepositories.map((repository) => (
              <a
                key={repository.url}
                className="path-chip"
                href={repository.url}
                target="_blank"
                rel="noreferrer"
              >
                <span>{repository.owner}</span>
                <strong>{repository.name}</strong>
              </a>
            ))}
          </div>
        </aside>
      </header>

      <section className="section">
        <div className="section__heading">
          <div>
            <p className="eyebrow">Recent Posts</p>
            <h2>최근 포스팅 3개</h2>
          </div>
          {/* <p className="section__description">
            목록 정보는 `siteContent.js`의 날짜와 경로를 기준으로 정렬되고,
            실제 화면은 각 페이지 파일에서 렌더링됩니다.
          </p> */}
        </div>

        <div className="post-grid">
          {recentPosts.map((post) => (
            <ArticleCard key={post.path} post={post} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </>
  )
}

function PostsPage({ onNavigate }) {
  return (
    <section className="section page-section">
      <div className="section__heading">
        <div>
          <p className="eyebrow">All Posts</p>
          <h2>전체 글</h2>
        </div>
        {/* <p className="section__description">
          현재 등록된 글 {posts.length}개를 각각 독립된 페이지로 탐색할 수
          있습니다.
        </p> */}
      </div>

      <div className="post-grid post-grid--full">
        {posts.map((post) => (
          <ArticleCard key={post.path} post={post} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-page__card">
        <img
          className="about-page__image"
          src={profile.avatarUrl}
          alt={`${profile.name} GitHub profile`}
        />

        <div className="about-page__content">
          <p className="eyebrow">About</p>
          <h1>{profile.name}</h1>
          <p className="about-page__headline">{profile.headline}</p>
          <p className="about-page__bio">{profile.bio}</p>

          <div className="about-page__meta">
            <span>{profile.location}</span>
            <span>{profile.email}</span>
          </div>

          <div className="about-page__tags">
            {profile.focus.map((item) => (
              <span key={item} className="category-pill">
                {item}
              </span>
            ))}
          </div>

          <a
            className="button button--primary"
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub 프로필 보기
          </a>
        </div>
      </div>
    </section>
  )
}

function PostPage({ post, onNavigate }) {
  const PageComponent = post.Page

  return (
    <article className="article-page article-page--rich">
      <div className="article-page__header article-page__header--rich">
        <button
          type="button"
          className="back-link"
          onClick={() => onNavigate(POSTS_PATH)}
        >
          전체 글로 돌아가기
        </button>
        <span className="article-page__category">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="article-page__summary">{post.summary}</p>
        <p className="article-page__meta">
          {formatDate(post.publishedAt)} · {post.path}
        </p>
      </div>

      <div className="article-flow">
        <PageComponent />
      </div>
    </article>
  )
}

function NotFound({ onNavigate }) {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>찾고 있는 글을 아직 준비하지 못했어요.</h1>
      <p>
        주소를 다시 확인하거나 홈으로 돌아가서 최근 글부터 둘러보면 바로
        이어서 볼 수 있습니다.
      </p>
      <button
        type="button"
        className="button button--primary"
        onClick={() => onNavigate(HOME_PATH)}
      >
        메인 페이지로 이동
      </button>
    </section>
  )
}

function App() {
  const [pathname, setPathname] = useState(readInitialPathname)

  useEffect(() => {
    const handlePopState = () => {
      setPathname(readPathname())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  function navigateTo(path) {
    if (decodeURIComponent(path) === pathname) {
      return
    }

    window.history.pushState(null, '', path)
    setPathname(decodeURIComponent(new URL(path, window.location.origin).pathname))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentPost = findPostByPath(pathname)
  const isHome = pathname === HOME_PATH
  const isPosts = pathname === POSTS_PATH
  const isAbout = pathname === ABOUT_PATH

  useEffect(() => {
    if (currentPost) {
      document.title = `${currentPost.title} | Jake Kim Blog`
      return
    }

    if (isPosts) {
      document.title = '전체 글 | Jake Kim Blog'
      return
    }

    if (isAbout) {
      document.title = '약력 | Jake Kim Blog'
      return
    }

    document.title = 'Jake Kim Blog'
  }, [currentPost, isAbout, isPosts])

  return (
    <div className="app-shell">
      <nav className="topbar">
        <button type="button" className="brand" onClick={() => navigateTo(HOME_PATH)}>
          <span className="brand__mark">JK</span>
          <span className="brand__text">dev-jake-kim.github.io</span>
        </button>

        <div className="topbar__nav">
          <button type="button" className="topbar__button" onClick={() => navigateTo(POSTS_PATH)}>
            전체 글
          </button>
          <button type="button" className="topbar__button" onClick={() => navigateTo(ABOUT_PATH)}>
            약력
          </button>
          <a href={githubProfileUrl} target="_blank" rel="noreferrer" className="topbar__link">
            GitHub
          </a>
        </div>
      </nav>

      {isHome && <HomePage onNavigate={navigateTo} />}
      {isPosts && <PostsPage onNavigate={navigateTo} />}
      {isAbout && <AboutPage />}
      {!isHome && !isPosts && !isAbout && currentPost && (
        <PostPage post={currentPost} onNavigate={navigateTo} />
      )}
      {!isHome && !isPosts && !isAbout && !currentPost && (
        <NotFound onNavigate={navigateTo} />
      )}
    </div>
  )
}

export default App
