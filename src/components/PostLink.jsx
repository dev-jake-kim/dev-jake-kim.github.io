import { useMemo, useState } from 'react'

function getHostname(href) {
  try {
    return new URL(href).hostname
  } catch {
    return ''
  }
}

function PostLink({ href, children }) {
  const [iconFailed, setIconFailed] = useState(false)
  const hostname = useMemo(() => getHostname(href), [href])
  const iconUrl = hostname
    ? `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`
    : ''

  return (
    <a
      className="post-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {!iconFailed && iconUrl && (
        <img
          className="post-link__icon"
          src={iconUrl}
          alt=""
          aria-hidden="true"
          onError={() => setIconFailed(true)}
        />
      )}
      <span>{children}</span>
    </a>
  )
}

export default PostLink
