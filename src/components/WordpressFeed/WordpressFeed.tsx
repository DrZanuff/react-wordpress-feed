import React, { useEffect, useState } from 'react'
import { WordpressFeedProps } from './WordpressFeed.types'
import { getPostsApi } from '../../api'
import type { Post } from '../../api/types'
import * as S from './WordpressFeed.styles'

export const WordpressFeed: React.FC<WordpressFeedProps> = ({
  blogUrl,
  totalPosts,
  options = {
    postsContainerClassName: '',
    postItemClassName: '',
    postItemWidth: 200,
    renderVisitLink: false,
    visitLinkText: 'See more...',
    visitLinkClassName: ''
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

  return (
    <S.WordpressFeedContainer>
      {posts.length === 0 ? (
        <div>Loading</div>
      ) : (
        <S.PostsContainer
          id="postsContainer"
          className={options.postsContainerClassName}
          postWidth={options.postItemWidth}>
          {posts.map((post) => (
            <li key={post.id} id="postItem" className={options.postItemClassName}>
              <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
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
