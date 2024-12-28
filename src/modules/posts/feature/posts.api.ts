import { query } from '@/utils/httpGraphql'
import { gql } from 'graphql-request'

export const PostsQuery = gql`
  query Posts {
    posts(first: 5, where: { status: PUBLISH }) {
      edges {
        node {
          title(format: RENDERED)
          date
          slug
        }
      }
    }
  }
`

export const postApi = async () => {
  try {
    return await query<any>(PostsQuery)
  } catch (error) {
    throw new Error('Api failure: ' + error.message)
  }
}
