type Image = {
  title: string
  url: string
  width: number
  height: number
}

type Category = {
  id: string
  slug: string
  title: string
  icon: string
}

type Author = {
  id: string
  fullName: string
  handle: string
  photo: Image
  twitter: string
}

type Post = {
  id: string
  title?: string
  slug?: string
  body?: string
  image?: Image
  url?: string
  summary?: string
  author: Author
  date?: string
  category: Category
  tags?: Array<string | null | undefined> | null | undefined
}