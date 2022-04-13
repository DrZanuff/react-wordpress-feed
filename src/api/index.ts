import axios from 'axios'
import { Post } from './types'

export async function getPostsApi(baseUrl: string, posts: number): Promise<Post[]> {
  try {
    const { status, data } = await axios.get<Post[]>(
      `${baseUrl}wp-json/wp/v2/posts?per_page=${posts}`
    )

    if (status !== 200) {
      throw 'Something is wrong...'
    }

    console.log(data)
    return data
  } catch (e) {
    console.log(e)
    return [] as Post[]
  }
}
