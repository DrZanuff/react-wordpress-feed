import React, { useEffect, useState } from 'react'
import { WordpressFeedProps } from './WordpressFeed.types'
import { getPostsApi } from '../../api'
import type { Post } from '../../api/types'
import type { StyleOptionsType } from './WordpressFeed.types'
import * as S from './WordpressFeed.styles'

export const WordpressFeed: React.FC<WordpressFeedProps> = ({
  blogUrl,
  totalPosts,
  options = {
    postsContainerClassName: '',
    postItemClassName: '',
    postItemWidth: 200,
    renderImage: false,
    imageClassName: '',
    renderVisitLink: false,
    visitLinkText: 'See more...',
    visitLinkClassName: '',
    titleLines: 2,
    titleMinHeight: 36,
    bodyLines: 5,
    bodyMinHeight: 80
  }
}) => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function getPosts() {
      const postsList = await getPostsApi(blogUrl, totalPosts)
      setPosts(postsList)
    }

    getPosts()
  }, [])

  const styleOptions: StyleOptionsType = {
    postItemWidth: options.postItemWidth,
    bodyLines: options.bodyLines,
    bodyMinHeight: options.bodyMinHeight,
    titleLines: options.titleLines,
    titleMinHeight: options.titleMinHeight,
    imageMaxHeight: options.imageMaxHeight
  }

  return (
    <S.WordpressFeedContainer>
      {posts.length === 0 ? (
        <div>Loading</div>
      ) : (
        <S.PostsContainer
          id="postsContainer"
          className={options.postsContainerClassName}
          options={styleOptions}>
          {posts.map((post) => (
            <li key={post.id} id="postItem" className={options.postItemClassName}>
              <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              {options.renderImage && (
                <img
                  id="postImage"
                  className={options.imageClassName}
                  src={post.uagb_featured_image_src.thumbnail[0]}
                  alt={post.title.rendered}
                />
              )}
              <p dangerouslySetInnerHTML={{ __html: post.uagb_excerpt }} />
              {options.renderVisitLink && (
                <a
                  id="visitLink"
                  target="_blank"
                  href={post.link}
                  className={options.visitLinkClassName}>
                  {options.visitLinkText ? options.visitLinkText : 'See more...'}
                </a>
              )}
            </li>
          ))}
        </S.PostsContainer>
      )}
    </S.WordpressFeedContainer>
  )
}
