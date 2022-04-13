import styled, { css } from 'styled-components'
import { StyleOptionsType } from './WordpressFeed.types'

export const WordpressFeedContainer = styled.div`
  display: flex;
  width: 100%;
`
interface PostContainerProps {
  options: StyleOptionsType
}

export const PostsContainer = styled.ul<PostContainerProps>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  #postItem {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: ${({ options }) => {
      if (!options.postItemWidth) {
        return '200px'
      }

      if (typeof options.postItemWidth === 'number') {
        return `${options.postItemWidth}px`
      }

      return options.postItemWidth
    }};
    padding: 4px;

    h2 {
      font-size: 16px;
      font-weight: bold;

      ${({ options }) =>
        options.titleLines &&
        css`
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: ${options.titleLines};
          -webkit-box-orient: vertical;
          min-height: ${() => {
            if (typeof options.titleMinHeight === 'number') {
              return `${options.titleMinHeight}px`
            }

            if (typeof options.titleMinHeight === 'string') {
              return options.titleMinHeight
            }

            return '36px'
          }};
        `}
    }

    img {
      width: 100%;
      object-fit: contain;

      ${({ options }) =>
        options.imageMaxHeight &&
        css`
          max-height: ${() => {
            if (typeof options.imageMaxHeight === 'number') {
              return `${options.imageMaxHeight}px`
            }

            return options.imageMaxHeight
          }};
        `}
    }

    p {
      font-size: 14px;

      ${({ options }) =>
        options.bodyLines &&
        css`
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: ${options.bodyLines};
          -webkit-box-orient: vertical;
          min-height: ${() => {
            if (typeof options.bodyMinHeight === 'number') {
              return `${options.bodyMinHeight}px`
            }

            if (typeof options.bodyMinHeight === 'string') {
              return options.bodyMinHeight
            }

            return '80px'
          }};
        `}
    }
  }
`
