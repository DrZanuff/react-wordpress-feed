import type { WordpressFeedOptions } from '../WordpressFeed/WordpressFeed.types'
import type { Post } from '../../api/types'

export type StyleOptionsType = Pick<
  WordpressFeedOptions,
  | 'compactMode'
  | 'postItemWidth'
  | 'titleLines'
  | 'titleMinHeight'
  | 'bodyLines'
  | 'bodyMinHeight'
  | 'imageMaxHeight'
>

export interface PostsContainerProps {
  options: WordpressFeedOptions
  posts: Post[]
}
