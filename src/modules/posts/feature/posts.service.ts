import { postApi } from './posts.api'

export const postHomeService = async () => {
  const result = await postApi()
  if (!result) return []
  return result?.posts?.edges
}
