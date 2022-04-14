import React, { useEffect, useState } from 'react'
import { WordpressFeedProps } from './WordpressFeed.types'
import { getPostsApi } from '../../api'
import type { Post } from '../../api/types'
import { PostsContainer } from '../PostsContainer'
import * as S from './WordpressFeed.styles'

export const WordpressFeed: React.FC<WordpressFeedProps> = ({
  blogUrl,
  totalPosts,
  options = {
    postsContainerClassName: '',
    postItemClassName: '',
    postItemWidth: 200,
    renderImage: false,
    compactMode: false,
    imageClassName: '',
    renderVisitLink: false,
    visitLinkText: 'See more...',
    visitLinkClassName: '',
    titleLines: 2,
    titleMinHeight: 36,
    bodyLines: 5,
    bodyMinHeight: 80,
    cardLink: false
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
      {posts.length === 0 ? <div>Loading</div> : <PostsContainer options={options} posts={posts} />}
    </S.WordpressFeedContainer>
  )
}
