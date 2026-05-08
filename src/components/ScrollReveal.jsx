import { useEffect, useRef, useState } from 'react'

function joinClassNames(...names) {
  return names.filter(Boolean).join(' ')
}

function ScrollReveal({ animation = 'fade-up', className, children }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={ref}
      className={joinClassNames(
        'reveal',
        `reveal--${animation}`,
        isVisible && 'is-visible',
        className,
      )}
    >
      {children}
    </section>
  )
}

export default ScrollReveal
