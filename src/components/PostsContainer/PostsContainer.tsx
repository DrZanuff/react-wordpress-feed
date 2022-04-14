import type { PostsContainerProps, StyleOptionsType } from './PostsContainer.types'
import * as S from './PostsContainer.styles'

export function PostsContainer({ options, posts }: PostsContainerProps) {
  const styleOptions: StyleOptionsType = {
    compactMode: options.compactMode,
    postItemWidth: options.postItemWidth,
    bodyLines: options.bodyLines,
    bodyMinHeight: options.bodyMinHeight,
    titleLines: options.titleLines,
    titleMinHeight: options.titleMinHeight,
    imageMaxHeight: options.imageMaxHeight
  }

  return (
    <S.PostsContainer
      id="postsContainer"
      className={options.postsContainerClassName}
      options={styleOptions}>
      {posts.map((post) => (
        <li key={post.id} id="postItem" className={options.postItemClassName}>
          {options.compactMode && options.renderImage && (
            <img
              id="postImageThumb"
              className={options.imageClassName}
              src={post.uagb_featured_image_src.thumbnail[0]}
              alt={post.title.rendered}
            />
          )}
          <div className="post-content">
            <h2 id="postTitle" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {options.renderImage && !options.compactMode && (
              <img
                id="postImage"
                className={options.imageClassName}
                src={post.uagb_featured_image_src.medium[0]}
                alt={post.title.rendered}
              />
            )}
            <p id="postText" dangerouslySetInnerHTML={{ __html: post.uagb_excerpt }} />
            {options.renderVisitLink && (
              <a
                id="visitLink"
                target="_blank"
                href={post.link}
                className={options.visitLinkClassName}>
                {options.visitLinkText ? options.visitLinkText : 'See more...'}
              </a>
            )}
          </div>
          {options.cardLink && <a id="cardLink" target="_blank" href={post.link} />}
        </li>
      ))}
    </S.PostsContainer>
  )
}
