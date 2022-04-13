import styled from 'styled-components'

export const WordpressFeedContainer = styled.div`
  display: flex;
  width: 100%;
`
interface PostContainerProps {
  postWidth?: string | number
}

export const PostsContainer = styled.ul<PostContainerProps>`
  display: flex;
  flex-wrap: wrap;

  #postItem {
    list-style-type: none;
    display: flex;
    flex-direction: column;

    width: ${({ postWidth }) => {
      if (!postWidth) {
        return '200px'
      }

      if (typeof postWidth === 'number') {
        return `${postWidth}px`
      }

      return postWidth
    }};
    border: 1px solid black;

    h2 {
      font-size: 16px;
      font-weight: bold;
    }

    p {
      font-size: 14px;
    }
  }
`
