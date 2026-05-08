import { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const languageConfig = {
  python: {
    label: 'Python',
    icon: 'https://cdn.simpleicons.org/python',
  },
  bash: {
    label: 'Bash',
    icon: 'https://cdn.simpleicons.org/gnubash',
  },
  yaml: {
    label: 'YAML',
    icon: 'https://cdn.simpleicons.org/yaml',
  },
  txt: {
    label: 'TXT',
    icon: 'https://cdn.simpleicons.org/readthedocs',
  },
}

function CodeBlock({
  language = 'python',
  code,
  title,
  fold = false,
  defaultExpanded = false,
}) {
  const [copied, setCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(!fold || defaultExpanded)
  const normalizedLanguage = language === 'txt' ? 'text' : language
  const config = languageConfig[language] ?? {
    label: language.toUpperCase(),
    icon: '',
  }

  useEffect(() => {
    if (!copied) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setCopied(false)
    }, 1500)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [copied])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={`code-block code-block--${language}`}>
      <div className="code-block__header">
        <div className="code-block__meta">
          {config.icon && (
            <img
              className="code-block__icon"
              src={config.icon}
              alt=""
              aria-hidden="true"
            />
          )}
          <span className="code-block__label">{config.label}</span>
          {title && <span className="code-block__title">{title}</span>}
        </div>

        <button
          type="button"
          className="code-block__copy"
          onClick={handleCopy}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>

        {fold && (
          <button
            type="button"
            className="code-block__toggle"
            onClick={() => setIsExpanded((value) => !value)}
          >
            {isExpanded ? 'Fold' : 'Expand'}
          </button>
        )}
      </div>

      {isExpanded && (
        <SyntaxHighlighter
          language={normalizedLanguage}
          style={githubGist}
          customStyle={{
            margin: 0,
            padding: '18px 20px 22px',
            background: 'transparent',
            borderRadius: 0,
            fontFamily: 'var(--mono)',
            fontSize: '0.95rem',
            lineHeight: '1.75',
          }}
          codeTagProps={{
            style: {
              fontFamily: 'var(--mono)',
            },
          }}
          wrapLongLines
          className="code-block__body"
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  )
}

export default CodeBlock
