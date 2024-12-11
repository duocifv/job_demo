import { homeApi } from './home.api'

export const homeService = async () => {
  const result = await homeApi()
  if (!result?.data[0]?.data) {
    console.error('Không có dữ liệu ', result)
    return null
  }
  const resultData = JSON.parse(
    result?.data[0]?.data
  )
  const { title, copy, list, list2, list3, list4 } = resultData.data
  return {
    title,
    copy,
    features: [list, list2, list3, list4],
  }
}
