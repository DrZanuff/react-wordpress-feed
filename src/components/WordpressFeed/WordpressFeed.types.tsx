export interface WordpressFeedProps {
  blogUrl: string
  totalPosts: number
  options?: {
    postsContainerClassName?: string
    postItemClassName?: string
    postItemWidth?: number | string
    renderVisitLink?: boolean
    visitLinkText?: string
    visitLinkClassName?: string
  }
}
