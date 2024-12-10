import { homeApi } from './home.api'

export const homeService = async () => {
  const result = await homeApi()
  if (!result?.data[0]?.data) {
    console.error('Không có dữ liệu ', result)
    return null
  }
  console.log("21121212222212",JSON.parse(
    result?.data[0]?.data?.data
  ))
  const { title, copy, list, list2, list3, list4 } = JSON.parse(
    result?.data[0]?.data
  )
  return null
  return {
    title,
    copy,
    features: [list, list2, list3, list4],
  }
}
