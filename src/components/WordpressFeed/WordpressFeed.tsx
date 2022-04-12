import React from 'react'
import { WordpressFeedProps } from './WordpressFeed.types'
import * as S from './WordpressFeed.styles'

export const WordpressFeed: React.FC<WordpressFeedProps> = ({ apiKey, blogUrl }) => {
  return (
    <S.WordpressFeedContainer>
      <div>
        <h4>{apiKey}</h4>
        <h5>{blogUrl}</h5>
      </div>
    </S.WordpressFeedContainer>
  )
}
