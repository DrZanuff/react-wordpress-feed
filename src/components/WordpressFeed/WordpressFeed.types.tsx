interface WordpressFeedOptions {
  postsContainerClassName?: string
  postItemClassName?: string
  postItemWidth?: number | string
  renderImage?: boolean
  imageClassName?: string
  imageMaxHeight?: number | string
  renderVisitLink?: boolean
  visitLinkText?: string
  visitLinkClassName?: string
  titleLines?: number
  titleMinHeight?: number | string
  bodyLines?: number
  bodyMinHeight?: number | string
}

export type StyleOptionsType = Pick<
  WordpressFeedOptions,
  | 'postItemWidth'
  | 'titleLines'
  | 'titleMinHeight'
  | 'bodyLines'
  | 'bodyMinHeight'
  | 'imageMaxHeight'
>
export interface WordpressFeedProps {
  blogUrl: string
  totalPosts: number
  options?: WordpressFeedOptions
}
