import { client } from '@/utils/apiClient'

export const homeApi = async () => {
  try {
    return await client.get('list')
  } catch (error) {
    throw new Error('not api', error.message)
  }
}
