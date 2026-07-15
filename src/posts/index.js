import { componentExamplesPost } from './component-examples'
import { postEntries } from '../data/siteContent'
import { designDensityPost } from './design-density'
import { githubPagesRoutingPost } from './github-pages-routing'
import { introCpythonPost } from './intro-cpython'
import { mogakco1Post } from './mogakco-1'
import { mogakcoAgenticRagPosts } from './mogakco-agentic-rag'
import { reactRenderingNotesPost } from './react-rendering-notes'

const postPages = {
  [componentExamplesPost.path]: componentExamplesPost,
  [introCpythonPost.path]: introCpythonPost,
  [mogakco1Post.path]: mogakco1Post,
  ...Object.fromEntries(
    mogakcoAgenticRagPosts.map((post) => [post.path, post]),
  ),
  [reactRenderingNotesPost.path]: reactRenderingNotesPost,
  [designDensityPost.path]: designDensityPost,
  [githubPagesRoutingPost.path]: githubPagesRoutingPost,
}

function isPostVisible(post) {
  return post.visibleFrom === null || new Date(post.visibleFrom) <= new Date()
}

export const posts = postEntries
  .map((entry) => ({
    ...entry,
    ...postPages[entry.path],
  }))
  .filter((post) => post.title && post.Page)
  .filter(isPostVisible)
  .sort((left, right) => new Date(right.publishedAt) - new Date(left.publishedAt))
