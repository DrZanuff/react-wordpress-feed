type ImageSrc = [string, number, number, boolean]

export interface Post {
  id: number
  date: string
  link: string
  title: {
    rendered: string
  }
  uagb_excerpt: string
  uagb_featured_image_src: {
    thumbnail: ImageSrc
    medium: ImageSrc
  }
  uagb_author_info: {
    display_name: string
    uthor_link: string
  }
}

// hellip;
