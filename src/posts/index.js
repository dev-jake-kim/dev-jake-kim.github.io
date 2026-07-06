import { componentExamplesPost } from './component-examples'
import { postEntries } from '../data/siteContent'
import { designDensityPost } from './design-density'
import { githubPagesRoutingPost } from './github-pages-routing'
import { introCpythonPost } from './intro-cpython'
import { mogakco1Post } from './mogakco-1'
import { reactRenderingNotesPost } from './react-rendering-notes'

const postPages = {
  [componentExamplesPost.path]: componentExamplesPost,
  [introCpythonPost.path]: introCpythonPost,
  [mogakco1Post.path]: mogakco1Post,
  [reactRenderingNotesPost.path]: reactRenderingNotesPost,
  [designDensityPost.path]: designDensityPost,
  [githubPagesRoutingPost.path]: githubPagesRoutingPost,
}

export const posts = postEntries
  .map((entry) => ({
    ...entry,
    ...postPages[entry.path],
  }))
  .filter((post) => post.title && post.Page)
  .sort((left, right) => new Date(right.publishedAt) - new Date(left.publishedAt))
