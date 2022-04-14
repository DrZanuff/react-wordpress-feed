export interface WordpressFeedOptions {
  postsContainerClassName?: string
  postItemClassName?: string
  postItemWidth?: number | string
  renderImage?: boolean
  compactMode?: boolean
  imageClassName?: string
  imageMaxHeight?: number | string
  visitLinkText?: string
  visitLinkClassName?: string
  titleLines?: number
  titleMinHeight?: number | string
  bodyLines?: number
  bodyMinHeight?: number | string
  renderVisitLink?: boolean
  cardLink?: boolean
}

export interface WordpressFeedProps {
  blogUrl: string
  totalPosts: number
  options?: WordpressFeedOptions
}
